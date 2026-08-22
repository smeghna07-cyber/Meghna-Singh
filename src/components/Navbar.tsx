import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Mail, FileText, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800/80 py-3 text-white'
          : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Name & University */}
          <a
            id="nav-brand-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-700/80 border border-blue-500/40 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-600 transition-colors">
              <GraduationCap className="w-5 h-5 text-blue-100" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-serif font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-xs text-blue-200/90 font-medium tracking-wide">
                JECRC University • Physiotherapy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-150 relative ${
                    isActive
                      ? 'text-white bg-blue-800/60 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-cta-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Faculty</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 text-slate-200 shadow-xl animate-fadeIn"
        >
          <div className="border-b border-slate-800 pb-2 mb-2 text-xs font-medium uppercase tracking-wider text-slate-400 px-3">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-blue-900/60 text-white font-semibold border-l-4 border-blue-500'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            );
          })}
          <div className="pt-4 px-3">
            <a
              id="mobile-nav-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch with Dr. Singh</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
