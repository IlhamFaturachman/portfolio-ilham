/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { experienceData } from './experience-data.js';

export const Experience = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!section || !wrapper || !track || !progress) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      // FIX: Calculate maxScrollLeft using the wrapper's width as the viewport,
      // not the track's own width. This is the core fix.
      const maxScrollLeft = track.scrollWidth - wrapper.clientWidth;

      // Kondisi baru yang lebih tangguh
      if (top > 0) {
        // Sebelum section menjadi sticky, pastikan semuanya di posisi awal.
        window.requestAnimationFrame(() => {
          track.style.transform = `translateX(0px)`;
          progress.style.width = `0%`;
        });
      } else if (top <= 0 && top > -scrollableHeight) {
        // Selama section sticky dan sedang digulir.
        const progressPercentage = Math.max(0, Math.min(1, -top / scrollableHeight));
        
        window.requestAnimationFrame(() => {
          track.style.transform = `translateX(-${progressPercentage * maxScrollLeft}px)`;
          progress.style.width = `${progressPercentage * 100}%`;
        });
      } else {
        // Setelah melewati section, pastikan semuanya di posisi akhir.
         window.requestAnimationFrame(() => {
          track.style.transform = `translateX(-${maxScrollLeft}px)`;
          progress.style.width = `100%`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="experience-sticky-container">
        <div className="experience-title-frame">
          <h2 className="experience-title-top">Perjalanan</h2>
          <h2 className="experience-title-bottom">Karir</h2>
        </div>
        <div className="experience-track-wrapper" ref={wrapperRef}>
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