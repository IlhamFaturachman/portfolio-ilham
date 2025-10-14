/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const portfolioData = [
  {
    id: 1,
    title: 'Template Website WordPress',
    description: 'Koleksi template website modern dan responsif yang dibuat khusus untuk WordPress, cocok untuk berbagai kebutuhan bisnis.',
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-739932753de4?q=80&w=800&auto=format&fit=crop',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Aplikasi Mobile E-Commerce',
    description: 'Aplikasi lintas platform yang dirancang untuk membantu pengguna tetap teratur dan produktif saat bepergian.',
    imageUrl: 'https://placehold.co/600x400/1e1e1e/03dac6?text=Proyek+2',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Alat Visualisasi Data',
    description: 'Alat canggih untuk memvisualisasikan kumpulan data yang kompleks melalui bagan dan grafik yang intuitif.',
    imageUrl: 'https://placehold.co/600x400/1e1e1e/bb86fc?text=Proyek+3',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Sistem Manajemen Konten',
    description: 'Sebuah CMS kustom yang dibangun dari awal untuk mengelola konten blog secara dinamis dengan panel admin yang mudah digunakan.',
    imageUrl: 'https://placehold.co/600x400/1e1e1e/3700b3?text=Proyek+4',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 5,
    title: 'Platform Kursus Online',
    description: 'Platform e-learning interaktif yang memungkinkan instruktur membuat dan menjual kursus kepada siswa di seluruh dunia.',
    imageUrl: 'https://placehold.co/600x400/1e1e1e/cf6679?text=Proyek+5',
    liveLink: '#',
    repoLink: '#',
  }
];

const PortfolioCard = ({ title, description, imageUrl, liveLink, repoLink }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = (e) => {
    // Mencegah toggle saat tautan diklik
    if (e.target.tagName.toLowerCase() !== 'a') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`portfolio-card ${isOpen ? 'open' : ''}`} onClick={handleToggle} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleToggle(e)} aria-expanded={isOpen}>
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <div className="collapsible-details">
          <p>{description}</p>
          <div className="card-links">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Lihat Langsung</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">Repositori</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Portfolio = () => (
  <section id="portfolio">
    <div className="container">
      <h2 className="section-title">Portofolio Saya</h2>
      <div className="portfolio-grid">
        {/* FIX: Destructure `id` for the key and spread the rest of the project properties. This prevents passing the `id` prop to PortfolioCard, which does not expect it. */}
        {portfolioData.map(({ id, ...project }) => (
          <PortfolioCard key={id} {...project} />
        ))}
      </div>
    </div>
  </section>
);