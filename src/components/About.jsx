import React from 'react';
import { useReveal } from '../hooks/useReveal';
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
            About Me
          </span>
          <h2 id="about-heading" className="section-title">
            Background &amp; Focus
          </h2>
        </div>

        <div className="about-content-grid">
          {/* Main Approved Bio (FR-8) */}
          <div className="about-bio-card reveal-item">
            <p className="about-lead">
              I'm a front-end developer and recent graduate with a background in information systems, computer networks, and business subjects like accounting and public economics. I enjoy turning ideas into fast, responsive interfaces with React, and I like building tools that make sense for real users and real businesses.
            </p>

            <div className="about-focus-points">
              <div className="focus-point-item reveal-item">
                <div className="point-icon-wrapper" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="point-title">Front-end Engineering</h3>
                  <p className="point-desc">Clean, modular React components, responsive mobile-first layouts, and modern CSS.</p>
                </div>
              </div>

              <div className="focus-point-item reveal-item">
                <div className="point-icon-wrapper" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="point-title">Systems &amp; Networks</h3>
                  <p className="point-desc">Foundational knowledge in computing systems, network protocols, and web architecture.</p>
                </div>
              </div>

              <div className="focus-point-item reveal-item">
                <div className="point-icon-wrapper" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="point-title">Business &amp; Usability</h3>
                  <p className="point-desc">Understanding of accounting and business economics to build solutions that drive actual value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
