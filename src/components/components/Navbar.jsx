import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['top', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id === 'top' ? 'home' : id);
          return;
        }
      }
      if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Stack', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = href === '#top' ? document.getElementById('top') : document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', href);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container container" aria-label="Main Navigation">
        <a 
          href="#top" 
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, '#top')}
          aria-label="Kareem Mahmoud - Home"
        >
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-name">KAREEM MAHMOUD</span>
        </a>

        {/* Desktop Links Dock */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle in desktop nav */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Actions: ThemeToggle + Hamburger */}
        <div className="navbar-mobile-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="mobile-theme-toggle" />

          <button
            type="button"
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-nav-menu"
          className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}
          aria-hidden={!isOpen}
        >
          <div className="mobile-menu-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary mobile-cta-btn"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
