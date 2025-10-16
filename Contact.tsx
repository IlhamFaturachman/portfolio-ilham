/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // GANTI DENGAN ENDPOINT FORMULIR FORMSPREE ANDA
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact">
      <div className="container contact-content">
        <h2 className="section-title">Hubungi Saya</h2>
        <p>Punya pertanyaan atau ingin bekerja sama? Isi formulir di bawah ini atau hubungi saya melalui media sosial.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name"
              name="name" 
              className="form-input" 
              placeholder=" " 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <label htmlFor="name" className="form-label">Nama</label>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email"
              name="email"
              className="form-input" 
              placeholder=" " 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <label htmlFor="email" className="form-label">Email</label>
          </div>
          <div className="form-group">
            <textarea 
              id="message"
              name="message"
              className="form-input" 
              rows="5" 
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message" className="form-label">Pesan</label>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          {status === 'success' && <p className="form-status success">Pesan Anda telah terkirim. Terima kasih!</p>}
          {status === 'error' && <p className="form-status error">Terjadi kesalahan. Silakan coba lagi nanti.</p>}
        </form>

        <div className="social-links">
          <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="mailto:emailanda@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};