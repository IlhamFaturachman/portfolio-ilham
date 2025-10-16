/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { skillsData, Skill } from './skills-data.js';

// Helper untuk mengelompokkan keahlian berdasarkan kategori
const categorizeSkills = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

const SkillInfoPanel = ({ skill }: { skill: Skill | null }) => (
  <div className="skill-info-panel">
    {skill ? (
      <>
        <div className="info-header">
          <i className={`${skill.iconClass} info-icon`}></i>
          <span className="info-name">{skill.name}</span>
        </div>
        <div className="info-category">{skill.category}</div>
        <div className="proficiency-bar-container">
          <div 
            className="proficiency-bar-fill"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className="proficiency-level-text">Tingkat Kemahiran: {skill.level}%</span>
      </>
    ) : (
      <div className="info-placeholder">
        <i className="fas fa-hand-pointer"></i>
        <span>Arahkan kursor pada galaksi, lalu pilih keahlian untuk melihat detail.</span>
      </div>
    )}
  </div>
);

const ParallaxBackground = () => {
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 1.5 + 0.5}px`,
          animationDuration: `${Math.random() * 8 + 7}s`,
          animationDelay: `${Math.random() * 7}s`,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="skills-parallax-bg">
        <div className="stars-layer-1">
         {stars.map(star => (
            <div
              key={star.id}
              className="twinkling-star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
        <div className="nebula-layer"></div>
    </div>
  );
};

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState<Skill | null>(null);
  const skillsRef = React.useRef<HTMLElement>(null);
  const categorized = categorizeSkills(skillsData);
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!skillsRef.current) return;
      const { clientX, clientY } = e;
      const rect = skillsRef.current.getBoundingClientRect();
      
      const xPos = ((clientX - rect.left) / rect.width - 0.5) * 40; // Parallax intensity
      const yPos = ((clientY - rect.top) / rect.height - 0.5) * 40;

      skillsRef.current.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
      skillsRef.current.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
      skillsRef.current.style.setProperty('--parallax-x', `${-xPos}px`);
      skillsRef.current.style.setProperty('--parallax-y', `${-yPos}px`);
    };

    const section = skillsRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
       <ParallaxBackground />
      <div className="container skills-container">
        <div className="skills-constellations">
           <h2 className="section-title">Galaksi Keahlian</h2>
            {Object.entries(categorized).map(([category, skills]) => (
                <div key={category} className="skill-galaxy">
                    <div className="galaxy-core">{category}</div>
                    <div className="galaxy-orbits">
                        {skills.map((skill, index) => {
                             const orbitDuration = 20 + (skills.length - index) * 3;
                             const orbitRadius = (index % 2 === 0) ? 90 : 140;
                             const initialRotation = (360 / skills.length) * index;

                            return (
                             <div 
                                key={skill.name} 
                                className="skill-orbit-path"
                                style={{
                                    '--duration': `${orbitDuration}s`,
                                    '--rotation': `${initialRotation}deg`,
                                }}
                             >
                                <div
                                  className="skill-node"
                                  onMouseEnter={() => setHoveredSkill(skill)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`Lihat detail untuk ${skill.name}`}
                                  style={{ '--radius': `${orbitRadius}px`}}
                                >
                                  <i className={`skill-icon ${skill.iconClass}`}></i>
                                  <span className="skill-name-tooltip">{skill.name}</span>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            ))}
        </div>
        <SkillInfoPanel skill={hoveredSkill} />
      </div>
    </section>
  );
};