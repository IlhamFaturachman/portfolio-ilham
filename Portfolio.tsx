/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
// Fix: Import Project type for type safety.
import { portfolioData, Project } from './portfolio-data.js';
import { PortfolioCard } from './PortfolioCard.js';
import { ProjectModal } from './ProjectModal.js';

// Dapatkan kategori unik dari data, dengan "All" sebagai yang pertama
const categories = ['All', ...Array.from(new Set(portfolioData.map(p => p.category)))];

const useDecodeEffect = (originalText, scrambleChars) => {
  const [text, setText] = React.useState(originalText);
  const intervalRef = React.useRef<number | null>(null);

  const trigger = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    intervalRef.current = window.setInterval(() => {
      setText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            if (letter === ' ') return ' ';
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      // SLOWDOWN: Changed from 1/3 to 1/4
      iteration += 1 / 4; 
    }, 40); // SLOWDOWN: Changed from 30 to 40
  };
  
  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(originalText);
  }

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, []);

  return { text, trigger, reset };
}

export const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  // Fix: Add type for state, ref, and function parameters.
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const gridRef = React.useRef<HTMLDivElement>(null);
  
  const originalTitle = "Project Saya";
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$*";
  const { text: decodedTitle, trigger: triggerDecode, reset: resetDecode } = useDecodeEffect(originalTitle, scrambleChars);


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
          <div className="section-title-wrapper portfolio-title">
            <h2 
              className="section-main-title decode-title"
              onMouseEnter={triggerDecode}
              onMouseLeave={resetDecode}
            >
              {decodedTitle}
            </h2>
            <p className="section-subtitle">
              Berikut adalah beberapa proyek pilihan yang telah saya kerjakan, menampilkan berbagai teknologi dan solusi yang telah saya implementasikan.
            </p>
          </div>
          
          <div className="portfolio-filters" role="tablist" aria-label="Filter Proyek">
            {categories.map(category => (
              <button
                key={category}
                role="tab"
                aria-selected={activeFilter === category}
                className={`portfolio-filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid" ref={gridRef}>
            {portfolioData.map((project) => {
              const isFilteredOut = activeFilter !== 'All' && project.category !== activeFilter;
              return (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onCardClick={() => handleOpenModal(project)}
                  isFilteredOut={isFilteredOut}
                />
              )
            })}
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