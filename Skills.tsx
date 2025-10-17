/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { skillsData, Skill } from './skills-data.js';

const SkillDetailDisplay = ({ skill, onClose }: { skill: Skill, onClose: () => void }) => (
  <div className="skill-detail-wrapper">
    <div className="info-content-wrapper">
      <div className="info-header">
        <i className={`${skill.iconClass} info-icon`}></i>
        <span id="skill-detail-title" className="info-name">{skill.name}</span>
      </div>
      <div className="info-category">{skill.category}</div>
      <p className="info-description">{skill.description}</p>
      <div className="proficiency-bar-container">
        <div
          className="proficiency-bar-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <span className="proficiency-level-text">Tingkat Kemahiran: {skill.level}%</span>
    </div>
    <button onClick={onClose} className="back-to-constellation-btn">
      &larr; Kembali ke Konstelasi
    </button>
  </div>
);


// Helper to generate lines for constellations
const ConstellationLines = ({ skills, activeFilter, hoveredSkill, isFocused }: { skills: Skill[], activeFilter: string, hoveredSkill: Skill | null, isFocused: boolean }) => {
  // Fix: Use React.ReactElement instead of JSX.Element to resolve "Cannot find namespace 'JSX'" error.
  const lines: React.ReactElement[] = [];
  const categories = [...new Set(skills.map(s => s.category))];

  categories.forEach(category => {
    const skillsInCategory = skills.filter(s => s.category === category);
    for (let i = 0; i < skillsInCategory.length; i++) {
      for (let j = i + 1; j < skillsInCategory.length; j++) {
        const skill1 = skillsInCategory[i];
        const skill2 = skillsInCategory[j];
        const isHovered = !isFocused && hoveredSkill?.category === category && (activeFilter === 'All' || activeFilter === category);
        lines.push(
          <line
            key={`${skill1.name}-${skill2.name}`}
            x1={`${skill1.x}%`}
            y1={`${skill1.y}%`}
            x2={`${skill2.x}%`}
            y2={`${skill2.y}%`}
            className={`constellation-line ${isHovered ? 'line-hovered' : ''}`}
          />
        );
      }
    }
  });

  return (
    <svg className="constellation-svg" preserveAspectRatio="none">
      {lines}
    </svg>
  );
};

export const Skills = () => {
  const [focusedSkill, setFocusedSkill] = React.useState<Skill | null>(null);
  const [hoveredSkill, setHoveredSkill] = React.useState<Skill | null>(null);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [wavePosition, setWavePosition] = React.useState<{x: string, y: string} | null>(null);
  const skillsCanvasRef = React.useRef<HTMLDivElement>(null);
  const skillsContainerRef = React.useRef<HTMLDivElement>(null);

  const categories = ['All', ...Array.from(new Set(skillsData.map(s => s.category)))];

  const handleSelectSkill = (skill: Skill, e: React.MouseEvent) => {
    setFocusedSkill(skill);
    
    // Trigger energy wave animation
    const rect = e.currentTarget.getBoundingClientRect();
    const canvasRect = skillsCanvasRef.current!.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - canvasRect.left;
    const y = rect.top + rect.height / 2 - canvasRect.top;
    setWavePosition({ x: `${x}px`, y: `${y}px` });
  };
  
  const handleClearFocus = () => {
    setFocusedSkill(null);
  };

  React.useEffect(() => {
    if (wavePosition) {
      const timer = setTimeout(() => setWavePosition(null), 1000); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [wavePosition]);


  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = skillsContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if(currentRef) observer.unobserve(currentRef);
    };
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // FIX: Disable parallax not only when focused, but also when hovering any star.
      // This prevents the canvas from moving while the user is trying to interact with a star.
      if (focusedSkill || hoveredSkill) return;

      const canvas = skillsCanvasRef.current;
      if (!canvas) return;
      const { left, top, width, height } = canvas.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      const xPct = (mouseX / width - 0.5);
      const yPct = (mouseY / height - 0.5);
      canvas.style.setProperty('--mouse-x-stars', `${xPct}`);
      canvas.style.setProperty('--mouse-y-stars', `${yPct}`);
    };
    
    const container = skillsContainerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, [focusedSkill, hoveredSkill]); // FIX: Add hoveredSkill to dependency array
  
  const canvasTransformStyle = focusedSkill
  ? { transform: `scale(1.5) translate(${50 - focusedSkill.x}%, ${50 - focusedSkill.y}%)` }
  : {};

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Konstelasi Keahlian</h2>
          <div className="skill-filters" role="tablist" aria-label="Filter Keahlian">
            {categories.map(category => (
              <button
                key={category}
                role="tab"
                aria-selected={activeFilter === category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category);
                  handleClearFocus(); // Clear focus when changing filter
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div 
            ref={skillsContainerRef}
            className={`skills-container ${isIntersecting ? 'in-view' : ''} ${focusedSkill ? 'focus-active' : ''}`}
          >
            <div
                ref={skillsCanvasRef}
                className={`skills-canvas filter-${activeFilter.replace(/\s|&/g, '-')}-active`}
                style={canvasTransformStyle}
            >
                <ConstellationLines skills={skillsData} activeFilter={activeFilter} hoveredSkill={hoveredSkill} isFocused={!!focusedSkill} />
                {wavePosition && <div className="energy-wave" style={{ left: wavePosition.x, top: wavePosition.y }} />}
            
                {skillsData.map((skill, index) => {
                    const isFilteredOut = activeFilter !== 'All' && skill.category !== activeFilter;
                    const isDimmed = focusedSkill && focusedSkill.name !== skill.name;

                    return (
                        <div 
                            key={skill.name}
                            className={`skill-star ${isFilteredOut ? 'filtered-out' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                            style={{ 
                              left: `${skill.x}%`,
                              top: `${skill.y}%`,
                              transitionDelay: `${isIntersecting ? index * 0.05 : 0}s`
                            }}
                            onClick={(e) => !isFilteredOut && handleSelectSkill(skill, e)}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            tabIndex={isFilteredOut ? -1 : 0}
                            onKeyPress={(e) => e.key === 'Enter' && !isFilteredOut && handleSelectSkill(skill, e as any)}
                            aria-label={skill.name}
                        >
                            <i className={`${skill.iconClass} skill-icon`}></i>
                            <div className="skill-name-tooltip">{skill.name}</div>
                        </div>
                    );
                })}
            </div>
            {focusedSkill && <SkillDetailDisplay skill={focusedSkill} onClose={handleClearFocus} />}
          </div>
      </div>
    </section>
  );
};