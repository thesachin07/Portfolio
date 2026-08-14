export const site = {
  name: 'Sachin Kumar',
  initials: 'SK',
  role: 'Frontend Software Engineer',
  location: 'Noida, India',
  headline: 'Interfaces that hold up in production.',
  intro:
    "I work across frontend architecture, API integration, and performance-minded UI, building with React, Next.js, and Node.js. This portfolio is for people who want to see how I turn a design or a rough idea into a working, maintainable product.",
  email: 'sachin070502@gmail.com',
  phone: '+91 7042544875',
  github: 'https://github.com/thesachin07',
  linkedin: 'https://linkedin.com/in/thesachin07',
  twitter: 'https://twitter.com/sachin1649110',
  resumeFile: '/Sachin.resume.pdf',
  web3formsKey: '3322108a-4598-498d-a0c9-5cfc9c49ba00', 
};

export const stats = [
  { value: '1+', label: 'years building production frontend interfaces' },
  { value: '4', label: 'shipped projects, from e-commerce to AI-driven UX' },
  { value: '3', label: 'stacks worked across: React, Next.js, and Node.js services' },
  { value: '14', label: 'tools and technologies used day to day' },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  role: string;
  stack: string[];
  category: 'web' | 'ai';
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    summary: 'A full-stack storefront with inventory management and an admin dashboardFull-stack MERN e-commerce platform with authentication, product management, cart, and orders.',
    description:
      'A full-stack e-commerce solution covering product catalog, checkout flow, inventory management, and an admin dashboard for managing orders and stock.',
    image: '/projects/img2.png',
    role: 'Full stack developer',
    stack: ['React', 'Express', 'Node.js', 'MongoDB', 'Cloudinary'],
    category: 'web',
    github: 'https://github.com/thesachin07/Snitch',
    demo: 'https://snitch-ashen.vercel.app/',
  },

  {
    slug: 'dealforge',
    title: 'DealForge',
    summary: 'An AI-powered negotiation game where you bargain with a virtual seller.',
    description:
      'DealForge is an AI-powered negotiation game where users bargain with a virtual seller to secure the best price on a premium product. It combines a React/Vite frontend with an Express/MongoDB backend, leaderboard tracking, and chat-driven negotiation mechanics.',
    image: '/projects/Img4.png',
    role: 'Full stack developer',
    stack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
    category: 'ai',
    github: 'https://github.com/thesachin07/dealforge',
    demo: 'https://dealforgein.vercel.app/',
  },
 
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    summary: 'A full-stack storefront with inventory management and an admin dashboard.',
    description:
      'A full-stack e-commerce solution covering product catalog, checkout flow, inventory management, and an admin dashboard for managing orders and stock.',
    image: '/projects/Img1.jpeg',
    role: 'Full stack developer',
    stack: ['React', 'Next.js', 'Supabase', 'Cloudinary'],
    category: 'web',
    github: 'https://github.com/thesachin07/S-H-E-commerce',
    demo: 'https://stello-rho.vercel.app/',
  },
 
  {
    slug: 'quiz-web-app',
    title: 'Quiz Web App',
    summary: 'An interactive quiz app with real-time scoring and performance analytics.',
    description:
      'An interactive quiz web application with real-time scoring, timed questions, and analytics on performance across attempts.',
    image: '/projects/Img3.jpeg',
    role: 'Frontend developer',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    category: 'web',
    github: 'https://github.com/thesachin07/quiz',
    demo: 'https://quiz-git-main-sachins-projects-1991415b.vercel.app/',
  },
  
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  problem?: string;
  approach?: string[];
  outcomes?: string[];
  Learning?: string;
  stack?: string[];
  kind: 'work' | 'education';
};

export const timeline: TimelineItem[] = [
 {
  title: 'Frontend Developer Internship',
  org: 'Gennext IT Management & Consultancy Pvt. Ltd.',
  period: 'March 2025 — August 2025',
  problem: 'The internal dashboard was slow to load and had no reusable component system, making new features take days to ship.',
  approach: ['Rebuilt core UI components in React with a shared design system, and lazy-loaded heavy routes to cut initial load time.'],
  outcomes: ['Improved page load performance by ~20% and reduced development effort for new features through reusable React components.'],
  Learning: '[Learned how much a consistent component API saves downstream — refactoring is cheaper than duplicating.]',
    stack: [
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
  ],
  kind: 'work',
},
 {
  title: 'Frontend Developer Internship',
  org: 'MangosOrange Services Pvt. Ltd.',
  period: 'Nov 2024 — March 2025',

  problem:
    'Needed hands-on experience building responsive and production-facing web interfaces while strengthening practical frontend development skills.',

  approach: [
    'Built and improved frontend interfaces using React, JavaScript, HTML, CSS, and modern UI practices.',
    'Worked on responsive layouts and reusable components to improve consistency across different screen sizes.',
    'Collaborated on frontend tasks, debugging issues and refining user-facing functionality based on project requirements.',
  ],

  outcomes: [
    'Developed practical experience with React and modern frontend development workflows.',
    'Improved ability to build responsive, reusable, and maintainable UI components.',
    'Strengthened debugging, problem-solving, and understanding of real-world development practices.',
  ],

  Learning:
    'Gained a stronger understanding of responsive design, component-based development, user experience, and writing maintainable frontend code.',

  stack: [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
  ],

  kind: 'work',
},
  {
    title: 'Bachelor of Technology',
    org: 'Dr. A.P.J. Abdul Kalam Technical University',
    period: '2021 — 2025',
    description: 'Specialized in Computer Science and Engineering.',
    kind: 'education',
  },
];

export const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'CI/CD', 'Git'] },
  { category: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Taiga'] },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'Resume', href: '/resume/' },
  { label: 'Contact', href: '/contact/' },
];
