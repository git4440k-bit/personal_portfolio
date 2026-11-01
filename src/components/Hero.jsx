import React, { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Hero.css';

const roles = ['Frontend Engineer', 'Full-Stack Developer', 'Software Engineer'];

export default function Hero() {
  const heroRef = useReveal({ threshold: 0.1 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setRoleText(roles[roleIndex]);
      return undefined;
    }

    const currentRole = roles[roleIndex];
    const delay = erasing ? 45 : 70;
    const timeout = window.setTimeout(() => {
      if (erasing) {
        if (roleText.length > 0) {
          setRoleText(currentRole.slice(0, roleText.length - 1));
        } else {
          setErasing(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        }
      } else if (roleText.length < currentRole.length) {
        setRoleText(currentRole.slice(0, roleText.length + 1));
      } else {
        window.setTimeout(() => setErasing(true), 1800);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [roleIndex, roleText, erasing, roles]);

  const scrollTo = (event, id) => {
    event.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', id);
  };

  return (
    <section id="top" ref={heroRef} className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        <div className="hero-index reveal-item" aria-hidden="true">00</div>
        {/* Live Availability Badge (SWE Andrew style) */}
        <div className="status-badge reveal-item" role="status">
          <span className="status-point-ping" aria-hidden="true" />
          <span className="status-point" aria-hidden="true" />
          <span className="status-text">Available for new opportunities</span>
          <span className="status-divider" aria-hidden="true">•</span>
          <span className="status-location">Software &amp; Web</span>
        </div>

        <h1 className="hero-name reveal-item">
          <span>Kareem</span>
          <span>Mahmoud</span>
        </h1>

        <p className="hero-role reveal-item" aria-label={`${roles[roleIndex]} for Kareem Mahmoud`}>
          <span className="hero-role-text" aria-hidden="true">{roleText}</span>
          <span className="hero-role-caret" aria-hidden="true" />
        </p>
        <p className="hero-subtitle reveal-item">
          Frontend &amp; full-stack software engineer dedicated to building high-performance, accessible, and elegantly crafted digital products.
        </p>

        {/* Tech Badges Row */}
        <div className="hero-tech-row reveal-item">
          <span className="tech-chip">React</span>
          <span className="tech-chip">JavaScript (ES6+)</span>
          <span className="tech-chip">TypeScript</span>
          <span className="tech-chip">Node.js</span>
          <span className="tech-chip">REST APIs</span>
          <span className="tech-chip">Modern CSS</span>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions reveal-item">
          <a
            href="#projects"
            className="btn btn-primary hero-btn-primary"
            onClick={(event) => scrollTo(event, '#projects')}
          >
            Explore Projects <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#contact"
            className="btn btn-secondary hero-btn-secondary"
            onClick={(event) => scrollTo(event, '#contact')}
          >
            Get in Touch
          </a>
        </div>

        <div className="hero-footer reveal-item">
          <div className="hero-stats" aria-label="Profile highlights">
            <div className="stat-card">
              <span className="stat-label">Focus</span>
              <strong className="stat-value">Frontend &amp; Systems</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Base</span>
              <strong className="stat-value">Egypt / Remote</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Mindset</span>
              <strong className="stat-value">Clean Code &amp; Speed</strong>
            </div>
          </div>

          <div className="hero-links">
            <a
              className="hero-social-link"
              href="https://github.com/git4440k-bit"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
