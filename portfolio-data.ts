/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Fix: Define and export the Project interface for type safety.
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Mesin Pencari Resep AI",
    description: "Aplikasi web canggih yang memungkinkan pengguna menemukan resep berdasarkan bahan-bahan yang mereka miliki, menggunakan kekuatan Gemini API untuk menghasilkan ide-ide kreatif. Antarmuka yang bersih dan responsif dibangun dengan React.",
    image: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80",
    technologies: ["React", "Gemini API", "CSS Grid", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Visualizer Data Interaktif",
    description: "Dasbor analitik yang mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti. Menampilkan visualisasi data yang dinamis dan dapat disesuaikan menggunakan D3.js dan React, dengan backend Node.js untuk pemrosesan data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Platform E-commerce Modern",
    description: "Situs e-commerce lengkap dengan fitur-fitur seperti keranjang belanja, otentikasi pengguna, dan gateway pembayaran. Dibangun dengan arsitektur yang skalabel dan fokus pada pengalaman pengguna yang mulus dari awal hingga akhir.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["React", "Redux", "Firebase", "Styled-Components"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
