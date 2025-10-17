/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const sections = [
  { id: 'hero-about', name: 'Tentang' },
  { id: 'skills', name: 'Keahlian' },
  { id: 'experience', name: 'Pengalaman' },
  { id: 'portfolio', name: 'Proyek' },
  { id: 'contact', name: 'Kontak' }
];

export const DotNavigator = () => {
  const [activeSection, setActiveSection] = React.useState('hero-about');

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      // Section dianggap aktif ketika 40% dari bagian tersebut terlihat.
      // Ini memberikan perasaan yang lebih alami saat menggulir.
      threshold: 0.4
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionElements = sections.map(sec => document.getElementById(sec.id));
    
    sectionElements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="dot-nav" aria-label="Navigasi Halaman">
      <ul>
        {sections.map(section => (
          <li key={section.id} className={activeSection === section.id ? 'active' : ''}>
            <a href={`#${section.id}`} aria-label={`Lompat ke bagian ${section.name}`}>
              <span className="dot-tooltip">{section.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};