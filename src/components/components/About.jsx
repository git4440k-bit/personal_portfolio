import React from 'react';
import { useReveal } from '../hooks/useReveal';
import Counter from './Counter';
import '../styles/About.css';

export default function About() {
  const sectionRef = useReveal({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="section about-section" 
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            00 / About
          </span>
          <h2 id="about-heading" className="section-title">
            Engineering Mindset &amp; Craft
          </h2>
          <p className="section-subtitle">
            A developer who bridges technical precision with product vision, clean architecture, and real business value.
          </p>
        </div>

        <div className="counters-row">
          <Counter to={3} suffix="+" label="Projects built" />
          <Counter to={3} label="Core languages" />
          <Counter to={4} label="Academic domains" />
          <Counter to={100} suffix="%" label="Mobile-first" />
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {/* Main Story Bento Card */}
          <div className="bento-card bento-card-main reveal-item">
            <div className="bento-badge">Background &amp; Vision</div>
            <h3 className="bento-title">Front-end Engineering with Architectural Discipline</h3>
            <p className="bento-text">
              I'm a front-end engineer with a strong foundation in information systems, computer networks, and business economics. I focus on turning complex challenges into fast, accessible, and responsive interfaces built with React and modern web standards.
            </p>
            <p className="bento-text">
              I believe great software doesn't just look sleek—it functions reliably, loads instantaneously, and scales predictably under production workloads.
            </p>

            <div className="bento-highlights">
              <div className="highlight-pill">⚡ Core Web Vitals Focus</div>
              <div className="highlight-pill">📱 Mobile-First Design</div>
              <div className="highlight-pill">🧩 Reusable Component Architecture</div>
            </div>
          </div>

          {/* Bento Card 2: Principles */}
          <div className="bento-card bento-card-side reveal-item">
            <div className="bento-badge">Philosophy</div>
            <h4 className="bento-sub-title">How I Work</h4>
            <ul className="bento-list">
              <li>
                <strong>Precision over complexity:</strong> Writing clean, maintainable, and self-documenting code.
              </li>
              <li>
                <strong>Design systems:</strong> Building design tokens and modular UI libraries for consistent UX.
              </li>
              <li>
                <strong>Continuous learning:</strong> Staying ahead with modern JavaScript, state management, and web APIs.
              </li>
            </ul>
          </div>

          {/* Bento Card 3: Systems & Networks */}
          <div className="bento-card reveal-item">
            <div className="bento-icon" aria-hidden="true">🌐</div>
            <h4 className="bento-card-heading">Systems &amp; Network Roots</h4>
            <p className="bento-card-desc">
              Grounded in network protocols, server-client handshakes, and distributed computing models to optimize web communication.
            </p>
          </div>

          {/* Bento Card 4: Business & Usability */}
          <div className="bento-card reveal-item">
            <div className="bento-icon" aria-hidden="true">💼</div>
            <h4 className="bento-card-heading">Business &amp; Product Driven</h4>
            <p className="bento-card-desc">
              Educated in public economics and accounting, ensuring every technical choice maps directly to user engagement and business impact.
            </p>
          </div>

          {/* Bento Card 5: Modern Tooling */}
          <div className="bento-card reveal-item">
            <div className="bento-icon" aria-hidden="true">🛠️</div>
            <h4 className="bento-card-heading">Modern Tooling</h4>
            <p className="bento-card-desc">
              Leveraging Vite, Git workflow, ESLint/Oxlint, responsive CSS modules, and component-driven development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
