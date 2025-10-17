/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

// Komponen Visual Formasi Partikel Reaktif
const ReactiveParticleFormation = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = canvas.parentElement as HTMLDivElement;

    // Pengaturan Partikel
    const PARTICLE_COUNT = 70;
    const CONNECT_RADIUS = 100;
    const MOUSE_REPEL_RADIUS = 120;
    const MOUSE_REPEL_STRENGTH = 0.5;
    let animationFrameId: number;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    const initialize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const animate = () => {
      if (particles.length === 0 || canvas.width === 0 || canvas.height === 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      };
      
      // Baca warna dari variabel CSS pada setiap frame agar tetap sinkron dengan tema
      const styles = getComputedStyle(container);
      const primaryColor = styles.getPropertyValue('--primary-color').trim();
      const secondaryColorRgb = styles.getPropertyValue('--secondary-color-rgb').trim();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Perbarui dan gambar partikel
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < MOUSE_REPEL_RADIUS) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
            p.x += forceDirectionX * force * MOUSE_REPEL_STRENGTH;
            p.y += forceDirectionY * force * MOUSE_REPEL_STRENGTH;
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();
      });

      // Gambar koneksi
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_RADIUS) {
            const opacity = 1 - dist / CONNECT_RADIUS;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${secondaryColorRgb}, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initialize();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    const resizeObserver = new ResizeObserver(() => {
      initialize();
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };

  }, []);

  return (
    <div className="interactive-visual-container">
      <canvas ref={canvasRef} className="interactive-visual-canvas"></canvas>
    </div>
  );
};

export const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // GANTI DENGAN ENDPOINT FORMULIR FORMSPREE ANDA
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <div className="container">
        <div className="section-title-wrapper contact-title">
          <h2 className="section-main-title">Hubungi Saya</h2>
          <p className="section-subtitle">
            Punya proyek menarik, pertanyaan, atau hanya ingin menyapa? Saya ingin sekali mendengar dari Anda.
          </p>
        </div>
        
        <div className="contact-grid-container">
          {/* Kolom Kiri: Formulir Kontak */}
          <div className="contact-form-wrapper">
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
                <i className="fas fa-paper-plane"></i>
              </button>

              {status === 'success' && <p className="form-status success">Pesan Anda telah terkirim. Terima kasih!</p>}
              {status === 'error' && <p className="form-status error">Terjadi kesalahan. Silakan coba lagi nanti.</p>}
            </form>
          </div>

          {/* Kolom Kanan: Info & Visual */}
          <div className="contact-info-wrapper">
            <ReactiveParticleFormation />
            <h3>Atau Hubungi Langsung</h3>
            <div className="social-links">
              <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="mailto:emailanda@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};