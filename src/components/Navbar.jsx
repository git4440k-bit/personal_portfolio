import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
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
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
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
          <span className="brand-dot"></span>
          <span className="brand-name">Kareem Mahmoud</span>
        </a>

        {/* Desktop Navigation */}
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
            className="btn btn-outline nav-cta-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Hire Me
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
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
