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
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onCardClick }) => {
  return (
    <div 
      className="portfolio-card"
      onClick={onCardClick}
      aria-label={`Lihat detail untuk ${project.title}`}
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onCardClick()}
    >
      <div 
        className="card-image" 
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="card-overlay">
        <h3 className="card-title">{project.title}</h3>
        <p>Lihat Detail &rarr;</p>
      </div>
    </div>
  );
};
