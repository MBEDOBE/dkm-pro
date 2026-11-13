/** Single source of truth for the home-page highlights and full portfolio. */
export interface Project {
  id: number;
  name: string;
  image: string;
  thumbnail: string;
  category: string;
  stack: string[];
  description: string;
  contribution: string;
  link: string;
  featured?: boolean;
}

// Project names, images, stacks, descriptions and URLs come from the original
// AnimatedPortfolio component. No invented client outcomes or testimonials.
export const projects: Project[] = [
  {
    id: 1,
    name: "St. Joseph Technical Institute Website",
    image: "/assets/sab-mock.webp",
    thumbnail: "/assets/thumbnails/sab-mock.webp",
    category: "Education · Website",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "A responsive website for a technical institute, designed to make school information easy to explore across devices.",
    contribution: "Website design and development",
    link: "https://stjosephtechsaboba.com",
    featured: true,
  },
  {
    id: 2,
    name: "Shalom Guest House App",
    image: "/assets/sha-mock.webp",
    thumbnail: "/assets/thumbnails/sha-mock.webp",
    category: "Hospitality · Web application",
    stack: ["React", "Tailwind", "Node.js", "Express", "SQL"],
    description: "A guest house booking and management application built to support reservation and property workflows.",
    contribution: "Application design and development",
    link: "https://shalompguestsaboba.com",
    featured: true,
  },
  {
    id: 3,
    name: "Yendi Peace Centre",
    image: "/assets/ypc-mock.webp",
    thumbnail: "/assets/thumbnails/ypc-mock.webp",
    category: "Organization · Website",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "A responsive website created for Yendi Peace Centre.",
    contribution: "Website design and development",
    link: "https://yendipeacecentre.org",
  },
  {
    id: 4,
    name: "AspireEd Project",
    image: "/assets/asp-mock.webp",
    thumbnail: "/assets/thumbnails/asp-mock.webp",
    category: "Education · Website",
    stack: ["React", "Tailwind"],
    description: "A clean, responsive website for an education-focused project.",
    contribution: "Website design and development",
    link: "https://theaspireedproject.org",
    featured: true,
  },
  {
    id: 5,
    name: "SVD Ghana Redesign",
    image: "/assets/svd-mock.webp",
    thumbnail: "/assets/thumbnails/svd-mock.webp",
    category: "Organization · Website redesign",
    stack: ["WordPress", "Elementor"],
    description: "A redesign and WordPress implementation of the existing SVD Ghana website.",
    contribution: "Website redesign and WordPress development",
    link: "https://svdghana.org",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
