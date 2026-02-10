"use client";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Moon,
  Menu,
  X,
  Sun,
  BookOpen,
  MessageCircle,
  FileText,
  Briefcase,
  Code2,
  User,
  Home,
  Settings,
} from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: MessageCircle },
    { href: "#resume", label: "Resume", icon: FileText },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode ? "bg-[#1a1f3a]/80" : "bg-white/80"
      } backdrop-blur-md border-b ${
        darkMode ? "border-gray-700/50" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-white shadow-lg">
              SK
            </div>

            {/* Name only on desktop */}
            <span
              className={`hidden md:block font-semibold text-lg ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Sachin Kumar
            </span>
          </div>

          {/* Desktop Nav */}
          {/* Desktop Nav – CENTER */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
  {navLinks.map((link) => {
    const Icon = link.icon;
    return (
      <a
        key={link.href}
        href={link.href}
        className={`flex items-center gap-2 text-sm ${
          darkMode
            ? "text-gray-300 hover:text-yellow-400"
            : "text-gray-600 hover:text-gray-900"
        } transition-colors`}
      >
        <Icon size={16} />
        {link.label}
      </a>
    );
  })}
</div>

{/* RIGHT SIDE ICONS */}
<div className="hidden md:flex items-center gap-4 ml-auto pl-4 border-l border-white">
  <a
    href="https://github.com/thesachin07"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={darkMode ? "text-white" : "text-gray-600"}>
      <Github size={20} />
    </span>
  </a>

  <a
    href="https://www.linkedin.com/in/thesachin07/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={darkMode ? "text-white" : "text-gray-600"}>
      <Linkedin size={20} />
    </span>
  </a>

  <button onClick={() => setDarkMode(!darkMode)} className={darkMode ? "text-white" : "text-gray-600"}>
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
</div>


          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden ml-auto ">
            {/* Dark mode always visible */}
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Hamburger */}
            <button onClick={() => setOpen(!open)}>
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                {open ? <X size={26} /> : <Menu size={26} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden px-6 py-4 space-y-4 ${
            darkMode ? "bg-[#1a1f3a]" : "bg-white"
          }`}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-sm text-white hover:text-yellow-400"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}

          <div className="hidden md:flex gap-4 pt-4 border-t">
            <a
              href="https://github.com/thesachin07"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "text-white" : "text-gray-600"}
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/thesachin07/"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "text-white" : "text-gray-600"}
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
