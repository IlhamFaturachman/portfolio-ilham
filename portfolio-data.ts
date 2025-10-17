/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Fix: Define and export the Project interface for type safety.
export interface Project {
  id: number;
  title: string;
  category: 'Web Full-Stack' | 'Mobile' | 'CMS & Platform' | 'Lainnya';
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}

export const portfolioData: Project[] = [
    {
        id: 7,
        title: "Buku Tamu Digital Dinamis",
        category: "Web Full-Stack",
        description: "Mengembangkan aplikasi buku tamu canggih dengan fitur unik di mana admin dapat membuat field formulir secara dinamis tanpa mengubah kode. Dibangun sebagai Single Page Application (SPA) modern menggunakan stack TALL (Laravel) yang dimodifikasi dengan Inertia.js dan React.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["Laravel", "Inertia.js", "React", "MySQL", "Tailwind CSS"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 6,
        title: "Aplikasi Pelaporan Fasilitas Rusak",
        category: "Web Full-Stack",
        description: "Membangun aplikasi web berbasis Laravel untuk digitalisasi proses pelaporan fasilitas rusak di Polinema. Aplikasi ini memungkinkan mahasiswa dan staf untuk melaporkan kerusakan dengan foto, melacak status perbaikan, dan memberikan notifikasi otomatis kepada pihak terkait.",
        image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["Laravel", "MySQL", "Bootstrap", "PHP"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 5,
        title: "Sistem Pencatatan Prestasi Mahasiswa",
        category: "Web Full-Stack",
        description: "Merancang dan mengembangkan sistem web lengkap untuk Politeknik Negeri Malang (Polinema) guna mencatat dan memvalidasi prestasi mahasiswa. Sistem ini menangani alur kerja dari pengajuan, validasi oleh dosen, hingga rekapitulasi, menggunakan stack PHP native dan AJAX untuk pengalaman pengguna yang dinamis.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["PHP", "SQL Server", "JavaScript", "AJAX", "HTML/CSS", "Figma"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 1,
        title: "ShowBakso - Aplikasi Mobile",
        category: "Mobile",
        description: "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter untuk direktori penjual bakso. Proyek ini bertujuan untuk memudahkan pengguna menemukan lokasi, menu, dan ulasan penjual bakso terdekat. Fokus pada UI/UX yang bersih dan performa natif.",
        image: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 2,
        title: "Sistem Absensi QR Code",
        category: "Mobile",
        description: "Membangun sistem absensi mobile untuk sebuah organisasi menggunakan Flutter. Karyawan dapat melakukan check-in dan check-out dengan memindai QR code unik. Aplikasi ini terintegrasi dengan backend untuk mencatat waktu secara real-time dan menghasilkan laporan.",
        image: "https://images.unsplash.com/photo-1593786229323-25ecd3472099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["Flutter", "Dart", "QR Scanner", "REST API"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 4,
        title: "Template WordPress Kustom",
        category: "CMS & Platform",
        description: "Merancang dan membangun template WordPress yang sepenuhnya kustom dan responsif menggunakan Elementor Pro. Template ini dibuat dengan fokus pada optimasi kecepatan, SEO, dan kemudahan kustomisasi bagi klien tanpa memerlukan pengetahuan koding.",
        image: "https://images.unsplash.com/photo-1616469829935-c2f334623b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["WordPress", "Elementor", "PHP", "CSS"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: 3,
        title: "Dokumentasi API Interaktif",
        category: "Lainnya",
        description: "Merancang dan menulis dokumentasi API yang komprehensif untuk layanan internal menggunakan standar OpenAPI (Swagger). Dokumentasi ini bersifat interaktif, memungkinkan developer lain untuk menguji endpoint secara langsung dari browser, sehingga mempercepat proses integrasi.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["OpenAPI", "Swagger UI", "YAML", "Postman"],
        liveUrl: "#",
        repoUrl: "#",
    },
];
