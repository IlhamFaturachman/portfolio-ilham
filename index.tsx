/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hero } from './Hero.js';
import { About } from './About.js';
import { Portfolio } from './Portfolio.js';
import { Contact } from './Contact.js';

const SplashScreen = ({ isFading }) => (
  <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
    <div className="splash-content">
      <h1 className="nav-logo">Ilham Faturachman</h1>
    </div>
  </div>
);

const Header = () => (
  <header className="app-header">
    <div className="container">
      <nav className="navbar">
        <a href="#hero" className="nav-logo">Ilham Faturachman</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#about" className="nav-link">Tentang Saya</a></li>
          <li className="nav-item"><a href="#portfolio" className="nav-link">Portofolio</a></li>
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

  React.useEffect(() => {
    // Splash screen timers
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    // Particles.js initialization
    const tsParticles = (window as any).tsParticles;
    if (tsParticles) {
      tsParticles.load({
        id: "particles-background",
        options: {
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#a0a0a0",
            },
            links: {
              color: "#a0a0a0",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        },
      });
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return <SplashScreen isFading={isFading} />;
  }

  return (
    <div className="app-content">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);