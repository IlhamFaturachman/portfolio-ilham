/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const Contact = () => (
  <section id="contact">
    <div className="container contact-content">
      <h2 className="section-title">Hubungi Saya</h2>
      <p>Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya!</p>
      <div className="social-links">
        <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="mailto:emailanda@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
      </div>
    </div>
  </section>
);
