/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroAbout } from './HeroAbout.js';
import { Skills } from './Skills.js';
import { Experience } from './Experience.js';
import { Portfolio } from './Portfolio.js';
import { Contact } from './Contact.js';

const SplashScreen = ({ isFading }) => (
  <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
    <div className="splash-content">
      <h1 className="nav-logo">Ilham Faturachman</h1>
    </div>
  </div>
);

const Header = ({ isScrolled }) => (
  <header className={`app-header ${isScrolled ? 'header-scrolled' : ''}`}>
    <div className="container">
      <nav className="navbar">
        <a href="#hero-about" className="nav-logo">Ilham Faturachman</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#skills" className="nav-link">Keahlian</a></li>
          <li className="nav-item"><a href="#experience" className="nav-link">Pengalaman</a></li>
          <li className="nav-item"><a href="#portfolio" className="nav-link">Proyek</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Ilham Faturachman. Semua Hak Dilindungi.</p>
  </footer>
);

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFading, setIsFading] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [stars, setStars] = React.useState([]);
  const [mousePosition, setMousePosition] = React.useState({ x: -999, y: -999 });
  const throttleTimeout = React.useRef(null);


  React.useEffect(() => {
    // Splash screen timers
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (throttleTimeout.current) return;

      throttleTimeout.current = setTimeout(() => {
        throttleTimeout.current = null;
      }, 50); // Throttle to prevent too many stars at once

      const newStar = {
        id: Date.now() + Math.random(),
        top: event.clientY,
        left: event.clientX,
        endX: (Math.random() - 0.5) * 400 + 'px',
        endY: (Math.random() - 0.5) * 400 + 'px',
        duration: (Math.random() * 0.8 + 0.5) + 's'
      };

      setStars(prevStars => [...prevStars, newStar]);

      // Cleanup star after animation
      setTimeout(() => {
        setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
      }, 1300); // duration + a little buffer
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if(throttleTimeout.current) clearTimeout(throttleTimeout.current);
    };
  }, []);


  if (isLoading) {
    return <SplashScreen isFading={isFading} />;
  }

  return (
    <div className="app-content">
       <div 
         className="interactive-grid"
         style={{
           '--mouse-x': `${mousePosition.x}px`,
           '--mouse-y': `${mousePosition.y}px`,
         }}
       />
       {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            '--end-x': star.endX,
            '--end-y': star.endY,
            '--duration': star.duration
          }}
        />
      ))}
      <Header isScrolled={isScrolled} />
      <main>
        <HeroAbout />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);