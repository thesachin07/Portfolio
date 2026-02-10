'use client';

import { useState } from 'react';
import Navbar from '../src/components/Navbar';
import BackgroundEffects from '../src/components/BackgroundEffects';
import FloatingIcons from '../src/components/FloatingIcons';
import HeroSection from '../src/components/HeroSection';
import AboutSection from '../src/components/AboutSection';
import ProjectsSection from '../src/components/ProjectsSection';
// import BlogSection from '../src/components/BlogSection';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1a1f3a]' : 'bg-gray-50'} transition-colors duration-500 overflow-hidden relative`}>
      
      <BackgroundEffects />

      <FloatingIcons />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <HeroSection darkMode={darkMode} />

      <AboutSection darkMode={darkMode} />

      <ProjectsSection darkMode={darkMode} />

      {/* <BlogSection darkMode={darkMode} /> */}

      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}
