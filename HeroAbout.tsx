/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const HeroAbout = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => setIsFlipped(true);
  const handleUnflip = () => setIsFlipped(false);

  return (
    <section id="hero-about">
      <div className="hero-flipper-container">
        <div className={`hero-flipper ${isFlipped ? 'is-flipped' : ''}`}>
          
          {/* Front Face - Hero */}
          <div className="hero-face hero-face-front">
            <h1>Ilham Faturachman</h1>
            <p>Pengembang Frontend | Desainer UI/UX | Pecinta Teknologi</p>
            <p>Selamat datang di ruang digital saya. Klik panah untuk mengenal saya lebih jauh.</p>
            <button 
              className="flip-button next" 
              onClick={handleFlip} 
              aria-label="Lihat tentang saya"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Back Face - About */}
          <div className="hero-face hero-face-back">
            <button 
              className="flip-button back" 
              onClick={handleUnflip} 
              aria-label="Kembali ke perkenalan"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
              alt="Foto Ilham Faturachman" 
              className="about-photo" 
            />
            <div className="about-content">
              <h2>Tentang Saya</h2>
              <p>
                Saya adalah seorang pengembang perangkat lunak yang bersemangat dengan pengalaman dalam menciptakan aplikasi web yang efisien dan ramah pengguna. Bagi saya, pengembangan web bukan hanya tentang menulis kode, tetapi tentang menciptakan pengalaman digital yang intuitif dan berkesan. Saya selalu antusias mempelajari hal-hal baru dan berkolaborasi dalam proyek-proyek yang menantang untuk mendorong batas-batas inovasi teknologi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};