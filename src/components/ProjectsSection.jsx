'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsSection({ darkMode }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution, inventory management, and admin dashboard.',
      image: '/projects/Img1.jpeg', 
      tags: ['React', 'Next.js', 'Supabase', 'Claudinary'],
      category: 'web',
      github: 'https://github.com/thesachin07/S-H-E-commerce',
      demo: 'https://stello-rho.vercel.app/',
    },
    {
      id: 2,
      title: 'Eloquent Web Architecture',
      description: 'High-fidelity Eloquent UI focused on reading-optimized layouts, scalable CSS, and pixel-perfect responsiveness',
      image: '/projects/Img2.jpeg',
      tags: ['Next.js', 'JavaScript', 'Tailwind CSS','Responsive Design'],
      category: 'web',
      github: 'https://github.com/thesachin07/UI-design',
      demo: 'https://test-ui-c1a2.vercel.app/',
      // stars: 189,
    },
    {
      id: 3,
      title: 'Quiz Web App',
      description: 'Interactive quiz web application with real-time scoring and performance analytics.',
      image: '/projects/Img3.jpeg',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      category: 'web',
      github: 'https://github.com/thesachin07/quiz',
      demo: 'https://quiz-git-main-sachins-projects-1991415b.vercel.app/',
      // stars: 312,
    },
    
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'opensource', label: 'Open Source' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-yellow-400 text-gray-900 shadow-lg scale-105'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold ">
                  {project.image ? (
                    <Image src={project.image} alt={project.title} className="object-cover w-full h-full" width={400} height={300} />
                  ) : (
                    'No Image'
                  )}
                </div>
                {/* <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white text-sm font-semibold">{project.stars}</span>
                </div> */}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-semibold ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/thesachin07/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
