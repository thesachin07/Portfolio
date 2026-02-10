'use client';

import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function AboutSection({ darkMode }) {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker','CI/CD', 'Git'] },
    { category: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Taiga'] },
  ];

  const timeline = [
    {
      icon: Briefcase,
      title: 'Frontend Developer',
      company: 'Gennext It Management & Consultancy Pvt. Ltd.',
      period: 'March 2025 - August 2025',
      description: 'Developed scalable web applications',
    },
    {
      icon: Code2,
      title: 'Frontend Developer Trainee',
      company: 'MangosOrange Services Pvt. Ltd.',
      period: 'Nov 2024 - March 2025',
      description: 'Learnt and implemented frontend technologies',
    },
    {
      icon: GraduationCap,
      title: 'Bachelor of Technology',
      company: 'Dr. A.P.J. Abdul Kalam Technical University',
      period: '2021 - 2025',
      description: 'Specialized in Computer Science And Engineering',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-[#D4AF37]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Passionate developer with a track record of delivering high-quality solutions
          </p>
        </div>

        {/* Introduction */}
        <div className={`mb-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
          <div className="flex items-start gap-4 mb-6">
            <Award className="text-yellow-400 flex-shrink-0" size={32} />
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Who Am I?
              </h3>
              <p className={` text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
Passionate software engineer with expertise in building scalable web applications and distributed systems. 
I love sharing knowledge through technical talks on modern CSS, writing about performance optimization, and contributing to open-source UI libraries. 
                I specialize in creating scalable, performant, and user-friendly solutions that solve real-world problems.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey in tech started with a curiosity about how things work, and has evolved into a career 
                where I get to build amazing web applications and collaborate with talented team meambers.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <h4 className={`text-xl font-bold mb-4 text-yellow-400`}>
                  {skillSet.category}
                </h4>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex gap-6 p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center">
                      <Icon className="text-yellow-400" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <p className="text-yellow-400 font-semibold mb-2">
                      {item.company} • {item.period}
                    </p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
