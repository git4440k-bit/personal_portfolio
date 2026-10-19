import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', targetId);
    }
  };

  return (
    <section id="top" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge-wrapper">
          <div className="status-badge" role="status">
            <span className="status-pulse">
              <span className="status-ping"></span>
              <span className="status-point"></span>
            </span>
            <span className="badge-text">Open to work</span>
            <span className="badge-separator" aria-hidden="true">•</span>
            <span className="badge-location">Egypt</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="hero-name">Kareem Mahmoud</h1>
        
        <h2 className="hero-title">
          <span className="title-highlight">Front-end</span> Developer
        </h2>

        {/* Tagline */}
        <p className="hero-tagline">
          I build clean, responsive web interfaces with React.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a
            href="#projects"
            className="btn btn-primary hero-btn-primary"
            onClick={(e) => handleScrollTo(e, '#projects')}
          >
            <span>View projects</span>
            <svg
              className="btn-arrow-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          
          <a
            href="#contact"
            className="btn btn-outline hero-btn-outline"
            onClick={(e) => handleScrollTo(e, '#contact')}
          >
            <span>Contact me</span>
          </a>
        </div>

        {/* Subtle quick stats / tech chips */}
        <div className="hero-highlights">
          <div className="highlight-pill">
            <span className="pill-dot"></span> React & Modern JS
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span> Responsive & Mobile-First
          </div>
          <div className="highlight-pill">
            <span className="pill-dot"></span> Performance & Clean Code
          </div>
        </div>

      </div>
    </section>
  );
}
