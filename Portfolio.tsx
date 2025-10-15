/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
// Fix: Import Project type for type safety.
import { portfolioData, Project } from './portfolio-data.js';
import { PortfolioCard } from './PortfolioCard.js';
import { ProjectModal } from './ProjectModal.js';

export const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  // Fix: Add type for state, ref, and function parameters.
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentGridRef = gridRef.current;
    if (currentGridRef) {
      observer.observe(currentGridRef);
    }

    return () => {
      if (currentGridRef) {
        observer.unobserve(currentGridRef);
      }
    };
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title">Proyek Pilihan</h2>
          <div className="portfolio-grid" ref={gridRef}>
            {portfolioData.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onCardClick={() => handleOpenModal(project)}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
