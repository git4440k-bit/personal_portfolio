import React from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useReveal({ threshold: 0.1 });

  const scrollTo = (event, id) => {
    event.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', id);
  };

  return (
    <section id="top" ref={heroRef} className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        <div className="status-badge reveal-item" role="status">
          <span className="status-point" aria-hidden="true" />
          Open to opportunities <span aria-hidden="true">//</span> Egypt
        </div>

        <h1 className="hero-name reveal-item">
          <span>Kareem</span>
          <span>Mahmoud</span>
        </h1>

        <p className="hero-title reveal-item">
          <span className="title-highlight">Front-end</span> Developer
        </p>

        <p className="hero-kicker reveal-item">
          Builds <span aria-hidden="true">//</span> <strong>responsive interfaces</strong>
        </p>

        <p className="hero-description reveal-item">
          I build clean, responsive web interfaces with React—thoughtfully designed for real people and real businesses.
        </p>

        <div className="hero-actions reveal-item">
          <a href="#contact" className="btn btn-primary hero-btn-primary" onClick={(event) => scrollTo(event, '#contact')}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <a href="#projects" className="btn btn-outline hero-btn-outline" onClick={(event) => scrollTo(event, '#projects')}>
            View work
          </a>
        </div>

        <div className="hero-footer reveal-item">
          <div className="hero-stats" aria-label="Profile highlights">
            <div>
              <span>Base</span>
              <strong>Egypt</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>React / JS</strong>
            </div>
          </div>
          <a className="hero-social" href="https://github.com/git4440k-bit" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>

              </div>
    </section>
  );
}
