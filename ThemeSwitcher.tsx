/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const ThemeSwitcher = () => {
  // Default ke 'dark' dan biarkan useEffect yang menanganinya untuk menghindari flash saat rendering sisi server
  const [theme, setTheme] = React.useState('dark');

  // Inisialisasi tema berdasarkan preferensi sistem & localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  // Terapkan tema ke body dan simpan ke localStorage
  React.useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-switcher" 
      aria-label={`Beralih ke mode ${theme === 'light' ? 'gelap' : 'terang'}`}
    >
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
};
