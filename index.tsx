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
