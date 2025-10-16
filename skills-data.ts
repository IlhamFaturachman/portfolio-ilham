/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Skill {
  name: string;
  iconClass: string;
  category: string;
  level: number;
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5", iconClass: "fab fa-html5", category: "Frontend", level: 95 },
  { name: "CSS3", iconClass: "fab fa-css3-alt", category: "Frontend", level: 90 },
  { name: "JavaScript", iconClass: "fab fa-js-square", category: "Frontend", level: 92 },
  { name: "React", iconClass: "fab fa-react", category: "Frontend", level: 93 },
  { name: "TypeScript", iconClass: "fas fa-code", category: "Frontend", level: 85 },
  { name: "Redux", iconClass: "fas fa-project-diagram", category: "Frontend", level: 80 },
  
  // Backend
  { name: "Node.js", iconClass: "fab fa-node-js", category: "Backend", level: 88 },
  { name: "Express", iconClass: "fas fa-server", category: "Backend", level: 85 },
  { name: "Python", iconClass: "fab fa-python", category: "Backend", level: 75 },
  { name: "Firebase", iconClass: "fas fa-database", category: "Backend", level: 82 },
  
  // Desain
  { name: "Figma", iconClass: "fab fa-figma", category: "Desain", level: 90 },
  { name: "UI/UX Design", iconClass: "fas fa-palette", category: "Desain", level: 88 },
  { name: "Responsive Design", iconClass: "fas fa-mobile-alt", category: "Desain", level: 95 },

  // Tools & Lainnya
  { name: "Git", iconClass: "fab fa-git-alt", category: "Tools & Lainnya", level: 94 },
  { name: "GitHub", iconClass: "fab fa-github", category: "Tools & Lainnya", level: 96 },
  { name: "Webpack", iconClass: "fas fa-box-open", category: "Tools & Lainnya", level: 78 },
  { name: "Gemini API", iconClass: "fas fa-robot", category: "Tools & Lainnya", level: 80 },
];
