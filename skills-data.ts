/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Skill {
  name: string;
  iconClass: string;
  category: string;
  level: number;
  description: string;
  x: number; // Position on the X axis (percentage)
  y: number; // Position on the Y axis (percentage)
}

export const skillsData: Skill[] = [
  // Backend
  { name: "Laravel", iconClass: "fab fa-laravel", category: "Backend", level: 95, description: "Membangun aplikasi web back-end yang kuat, aman, dan skalabel dengan ekosistem PHP paling populer.", x: 80, y: 25 },
  { name: "PHP", iconClass: "fab fa-php", category: "Backend", level: 92, description: "Bahasa skrip sisi server yang menjadi tulang punggung Laravel dan sebagian besar web.", x: 90, y: 40 },
  { name: "Node.js", iconClass: "fab fa-node-js", category: "Backend", level: 80, description: "Membangun API yang cepat dan non-blocking, ideal untuk aplikasi real-time dan microservices.", x: 85, y: 10 },
  { name: "MySQL", iconClass: "fas fa-database", category: "Backend", level: 90, description: "Merancang dan mengelola database relasional yang efisien untuk berbagai skala aplikasi.", x: 70, y: 15 },
  { name: "REST API", iconClass: "fas fa-cogs", category: "Backend", level: 94, description: "Merancang dan mengimplementasikan API yang logis dan mudah dikonsumsi oleh aplikasi frontend dan mobile.", x: 75, y: 45 },

  // Frontend
  { name: "React", iconClass: "fab fa-react", category: "Frontend", level: 93, description: "Membangun antarmuka pengguna yang dinamis, interaktif, dan berbasis komponen.", x: 20, y: 20 },
  { name: "JavaScript", iconClass: "fab fa-js-square", category: "Frontend", level: 92, description: "Logika inti dari web modern, dari manipulasi DOM hingga fitur ES6+ yang canggih.", x: 10, y: 35 },
  { name: "HTML5", iconClass: "fab fa-html5", category: "Frontend", level: 98, description: "Struktur fundamental untuk konten web yang semantik, aksesibel, dan SEO-friendly.", x: 30, y: 10 },
  { name: "CSS3", iconClass: "fab fa-css3-alt", category: "Frontend", level: 95, description: "Menghias web dengan tata letak kompleks (Flexbox, Grid), animasi, dan desain yang responsif.", x: 10, y: 10 },
  { name: "Tailwind CSS", iconClass: "fas fa-wind", category: "Frontend", level: 88, description: "Mempercepat pengembangan UI dengan kerangka kerja utility-first yang sangat dapat disesuaikan.", x: 35, y: 30 },
  { name: "Bootstrap", iconClass: "fab fa-bootstrap", category: "Frontend", level: 85, description: "Membangun prototipe dan situs yang responsif dengan cepat menggunakan komponen siap pakai.", x: 25, y: 45 },
  { name: "Axios & AJAX", iconClass: "fas fa-sync-alt", category: "Frontend", level: 90, description: "Mengelola permintaan HTTP asinkron untuk komunikasi yang mulus antara klien dan server.", x: 15, y: 55 },
  { name: "Vite", iconClass: "fas fa-bolt", category: "Frontend", level: 85, description: "Build tool modern yang memberikan pengalaman pengembangan frontend super cepat.", x: 40, y: 50 },

  // Mobile
  { name: "Flutter", iconClass: "fas fa-mobile-alt", category: "Mobile", level: 85, description: "Mengembangkan aplikasi mobile cross-platform (iOS & Android) yang indah dan berkinerja tinggi dari satu basis kode.", x: 15, y: 80 },

  // CMS & Platform
  { name: "Inertia.js", iconClass: "fas fa-link", category: "CMS & Platform", level: 82, description: "Menjembatani backend (Laravel) dengan frontend (React) untuk menciptakan aplikasi monolitik modern.", x: 35, y: 70 },
  { name: "WordPress", iconClass: "fab fa-wordpress", category: "CMS & Platform", level: 80, description: "Mengustomisasi dan mengembangkan tema serta plugin untuk platform CMS paling populer di dunia.", x: 38, y: 88 },
  
  // DevOps & Tools
  { name: "Git & GitHub", iconClass: "fab fa-github", category: "DevOps & Tools", level: 96, description: "Sistem kontrol versi esensial dan platform kolaborasi untuk setiap proyek perangkat lunak.", x: 65, y: 80 },
  { name: "Ubuntu Server", iconClass: "fab fa-ubuntu", category: "DevOps & Tools", level: 78, description: "Mengelola dan mengkonfigurasi server Linux untuk hosting aplikasi web yang andal.", x: 80, y: 70 },
  { name: "Nginx", iconClass: "fas fa-server", category: "DevOps & Tools", level: 75, description: "Mengkonfigurasi web server berkinerja tinggi, reverse proxy, dan load balancer.", x: 85, y: 88 },
  { name: "Postman", iconClass: "fas fa-rocket", category: "DevOps & Tools", level: 95, description: "Alat utama untuk pengujian, dokumentasi, dan pengembangan API yang efisien.", x: 60, y: 65 },
  { name: "Figma", iconClass: "fab fa-figma", category: "DevOps & Tools", level: 88, description: "Menerjemahkan desain UI/UX high-fidelity menjadi kode yang fungsional dan piksel-perfect.", x: 55, y: 90 }
];