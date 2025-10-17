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
  // Frontend
  { name: "HTML5", iconClass: "fab fa-html5", category: "Frontend", level: 95, description: "Membangun struktur web yang semantik dan dapat diakses menggunakan standar terbaru.", x: 15, y: 20 },
  { name: "CSS3", iconClass: "fab fa-css3-alt", category: "Frontend", level: 90, description: "Merancang tata letak yang kompleks dan responsif dengan Flexbox, Grid, dan animasi.", x: 10, y: 40 },
  { name: "JavaScript", iconClass: "fab fa-js-square", category: "Frontend", level: 92, description: "Menghidupkan aplikasi dengan logika interaktif, manipulasi DOM, dan fitur ES6+.", x: 25, y: 35 },
  { name: "React", iconClass: "fab fa-react", category: "Frontend", level: 93, description: "Membangun antarmuka pengguna yang dapat diskalakan dan berbasis komponen dengan pustaka terkemuka.", x: 20, y: 60 },
  { name: "TypeScript", iconClass: "fas fa-code", category: "Frontend", level: 85, description: "Meningkatkan kualitas kode dengan tipe statis untuk proyek JavaScript skala besar.", x: 32, y: 50 },
  { name: "Redux", iconClass: "fas fa-project-diagram", category: "Frontend", level: 80, description: "Mengelola state aplikasi yang kompleks secara terpusat untuk konsistensi data.", x: 8, y: 65 },
  
  // Backend
  { name: "Node.js", iconClass: "fab fa-node-js", category: "Backend", level: 88, description: "Membangun API yang cepat dan efisien menggunakan lingkungan runtime JavaScript sisi server.", x: 50, y: 15 },
  { name: "Express", iconClass: "fas fa-server", category: "Backend", level: 85, description: "Kerangka kerja minimalis untuk Node.js yang mempercepat pengembangan aplikasi web dan API.", x: 60, y: 25 },
  { name: "Python", iconClass: "fab fa-python", category: "Backend", level: 75, description: "Bahasa serbaguna yang digunakan untuk skrip, otomatisasi, dan pengembangan backend.", x: 45, y: 35 },
  { name: "Firebase", iconClass: "fas fa-database", category: "Backend", level: 82, description: "Platform pengembangan backend-as-a-service untuk otentikasi, database, dan hosting.", x: 55, y: 45 },
  
  // Desain
  { name: "Figma", iconClass: "fab fa-figma", category: "Desain", level: 90, description: "Merancang prototipe antarmuka pengguna yang kolaboratif dan high-fidelity.", x: 80, y: 20 },
  { name: "UI/UX Design", iconClass: "fas fa-palette", category: "Desain", level: 88, description: "Menerapkan prinsip-prinsip desain untuk menciptakan pengalaman pengguna yang intuitif.", x: 90, y: 35 },
  { name: "Responsive Design", iconClass: "fas fa-mobile-alt", category: "Desain", level: 95, description: "Memastikan aplikasi web berfungsi dan terlihat hebat di semua ukuran perangkat.", x: 85, y: 50 },

  // Tools & Lainnya
  { name: "Git", iconClass: "fab fa-git-alt", category: "Tools & Lainnya", level: 94, description: "Sistem kontrol versi terdistribusi untuk melacak perubahan kode secara efisien.", x: 30, y: 85 },
  { name: "GitHub", iconClass: "fab fa-github", category: "Tools & Lainnya", level: 96, description: "Platform hosting untuk kolaborasi kode, peninjauan, dan manajemen proyek.", x: 45, y: 75 },
  { name: "Webpack", iconClass: "fas fa-box-open", category: "Tools & Lainnya", level: 78, description: "Bundler modul untuk mengoptimalkan dan mengelola aset aplikasi JavaScript modern.", x: 60, y: 88 },
  { name: "Gemini API", iconClass: "fas fa-robot", category: "Tools & Lainnya", level: 80, description: "Mengintegrasikan model AI generatif canggih untuk fitur-fitur cerdas dalam aplikasi.", x: 75, y: 78 },
];