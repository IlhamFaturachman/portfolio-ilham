/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Project } from './portfolio-data.js';

// Fix: Add explicit prop types for the component to resolve the error.
interface PortfolioCardProps {
  project: Project;
  onCardClick: () => void;
  isFilteredOut: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onCardClick, isFilteredOut }) => {
  return (
    <div 
      className={`portfolio-card ${isFilteredOut ? 'filtered-out' : ''}`}
      onClick={onCardClick}
      aria-label={`Lihat detail untuk ${project.title}`}
      tabIndex={isFilteredOut ? -1 : 0}
      onKeyPress={(e) => !isFilteredOut && e.key === 'Enter' && onCardClick()}
    >
      <div 
        className="card-image" 
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="card-overlay">
        <h3 className="card-title">{project.title}</h3>
        <div className="card-tech-tags">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="card-tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
