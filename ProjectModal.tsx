/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Project } from './portfolio-data.js';

// Fix: Add explicit prop types for the component.
interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Tutup modal">&times;</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2 id="modal-title" className="modal-title">{project.title}</h2>
        <div className="modal-tags">
          {project.technologies.map(tech => (
            <span key={tech} className="modal-tag">{tech}</span>
          ))}
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link primary">Lihat Langsung</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="modal-link secondary">Lihat Kode</a>}
        </div>
      </div>
    </div>
  );
};
