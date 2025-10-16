/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { experienceData } from './experience-data.js';

// Fix: Define prop types for the TimelineItem component to resolve type errors.
type ExperienceItem = (typeof experienceData)[number];

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    const currentItemRef = itemRef.current;
    if (currentItemRef) {
      observer.observe(currentItemRef);
    }

    return () => {
      if (currentItemRef) {
        observer.unobserve(currentItemRef);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="timeline-content">
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <h4 className="timeline-company">{item.company}</h4>
        <p className="timeline-description">{item.description}</p>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Pengalaman Kerja</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
