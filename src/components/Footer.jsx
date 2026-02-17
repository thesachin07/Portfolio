'use client';

import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      // { label: 'Blog', href: '#blog' },
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/thesachin07/' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/thesachin07/' },
      { label: 'Twitter', href: 'https://twitter.com/sachin1649110' },
      { label: 'Resume', href: '#resume' },
    ],
  };

  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-sm border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-white shadow-lg">
                SK
              </div>
              <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Sachin Kumar
              </span>
            </div>
            <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Frontend Engineer passionate about building exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-all duration-300 hover:scale-110`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-all duration-300 hover:scale-110`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-all duration-300 hover:scale-110`}
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:sachin.kumar@example.com"
                className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-all duration-300 hover:scale-110`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-colors inline-flex items-center gap-2 group`}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`text-sm ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-colors inline-flex items-center gap-2 group`}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} mb-8`}></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
            © {currentYear} Sachin Kumar. Made with{' '}
            <Heart className="text-red-500 fill-red-500" size={16} />
            in India
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} ${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'} transition-all duration-300 hover:scale-105 shadow-lg`}
            aria-label="Scroll to top"
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
