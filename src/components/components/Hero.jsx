import React, { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useClock } from '../hooks/useClock';
import '../styles/Hero.css';

const WORDS = ['FRONT-END', 'REACT', 'RESPONSIVE UI', 'CLEAN CODE'];

function useTyping(words) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const wait = !del && n === w.length ? 1400 : del ? 40 : 80;
    const id = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % words.length); }
    }, wait);
    return () => clearTimeout(id);
  }, [n, del, i, words]);
  return words[i].slice(0, n);
}

export default function Hero() {
  const heroRef = useReveal({ threshold: 0.1 });
  const time = useClock();
  const typed = useTyping(WORDS);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', id);
  };

  return (
    <section id="top" ref={heroRef} className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        <div className="status-badge reveal-item" role="status">
          <span className="status-point-ping" aria-hidden="true" />
          <span className="status-point" aria-hidden="true" />
          <span className="status-text">OPEN TO SELECT PROJECTS</span>
          <span className="status-divider" aria-hidden="true">•</span>
          <span className="status-location">Egypt · {time}</span>
        </div>

        <h1 className="hero-name reveal-item">
          <span>Kareem</span>
          <span className="hero-gradient-text">Mahmoud</span>
        </h1>

        <p className="hero-role reveal-item">Front-End Developer</p>
        <p className="hero-builds reveal-item">
          BUILDS // <span className="hero-typed">{typed}</span><span className="hero-caret" aria-hidden="true" />
        </p>

        <p className="hero-subtitle reveal-item">
          I build responsive, accessible interfaces with React and modern web standards — backed by a graduate background in information systems, computer networks, accounting and public economics.
        </p>

        <div className="hero-actions reveal-item">
          <a href="#contact" className="btn btn-primary hero-btn-primary" onClick={(e) => scrollTo(e, '#contact')}>Start a project →</a>
          <a href="#projects" className="btn btn-secondary hero-btn-secondary" onClick={(e) => scrollTo(e, '#projects')}>View work</a>
        </div>

        <div className="hero-footer reveal-item">
          <div className="hero-stats">
            <div className="stat-card"><span className="stat-label">Base</span><strong className="stat-value">Egypt</strong></div>
            <div className="stat-card"><span className="stat-label">Stack</span><strong className="stat-value">HTML · CSS · JS · React</strong></div>
          </div>
          <div className="hero-links">
            <a className="hero-social-link" href="https://github.com/git4440k-bit" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
            <span className="hero-social-link hero-scroll">SCROLL ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
