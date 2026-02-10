'use client';

import { BookOpen, MessageCircle } from 'lucide-react';

export default function HeroSection({ darkMode }) {
  return (
    <main id="home" className="relative pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 animate-fadeIn">
          
          {/* Greeting */}
          <div className="flex items-center justify-center gap-2 text-yellow-300 font-medium mb-4 animate-slideDown">
            <span className="text-2xl">👋</span>
            <span>Hello, my name is</span>
          </div>

          {/* Name with Shimmer Effect */}
          <h1 className="text-6xl md:text-8xl font-bold flex flex-col items-center tracking-tighter font-display">
            <span className="text-transparent bg-gradient-to-r from-[#eab308] via-white to-[#eab308] shimmer-effect animate-shimmer">
              Sachin 
            </span>
            <span className="text-transparent bg-gradient-to-r from-[#eab308] via-white to-[#eab308] shimmer-effect animate-shimmer">
              Kumar
            </span>
          </h1>

          {/* Description */}
          <div className={`max-w-4xl mx-auto space-y-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fadeIn`} style={{ animationDelay: '0.3s' }}>
            <p>
              <span className="text-yellow-400 font-semibold">Frontend Software Engineer</span> with{' '}
              <span className="text-yellow-400 font-semibold">1+ year experience</span>
            </p>
            <p>
              <span className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-md text-yellow-400 font-medium">
                Frontend Developer
              </span>
              {', '}
              <span className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-md text-yellow-400 font-medium">
                React.js & Node.js Expert
              </span>
              {', and '}
              <span className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-md text-yellow-400 font-medium">
                Open Source Contributor
              </span>
            </p>
            <p className="leading-relaxed">
              I architect and build scalable web applications using cutting-edge technologies like{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>React.js</span>,{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Node.js</span>,{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>JavaScript</span>, and{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>cloud platforms</span>. 
              Specializing in enterprise systems, startup MVPs, and high-performance solutions that drive measurable business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <BookOpen size={20} />
              See me in action →
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
            >
              <MessageCircle size={20} />
              Get In Touch ↗
            </a>
          </div>

         
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">50+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">25+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tech Talks</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">10K+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>GitHub Stars</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400">1+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
