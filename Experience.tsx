/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { experienceData } from './experience-data.js';

export const Experience = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!section || !track || !progress) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // Only calculate when the section is in view
      if (top <= 0 && top > -scrollableHeight) {
        const progressPercentage = (-top / scrollableHeight);
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        
        // Use requestAnimationFrame for smoother animations
        window.requestAnimationFrame(() => {
          track.style.transform = `translateX(-${progressPercentage * maxScrollLeft}px)`;
          progress.style.width = `${progressPercentage * 100}%`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="experience-sticky-container">
        <h2 className="section-title">Perjalanan Karir</h2>
        <div className="experience-track-wrapper">
          <div className="experience-track" ref={trackRef}>
            {experienceData.map((item) => (
              <div key={item.id} className="experience-card">
                <span className="experience-date">{item.date}</span>
                <h3 className="experience-title">{item.title}</h3>
                <h4 className="experience-company">{item.company}</h4>
                <p className="experience-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-progress-bar-container">
            <div className="experience-progress-bar" ref={progressRef}></div>
        </div>
      </div>
    </section>
  );
};