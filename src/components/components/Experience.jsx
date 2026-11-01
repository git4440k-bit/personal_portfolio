import React from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Frontend & Web Developer',
    company: 'Independent & Client Projects',
    period: '2023 — Present',
    location: 'Remote / Egypt',
    description: [
      'Engineered responsive, accessible single-page web applications using React, modern JavaScript, and component-driven architecture.',
      'Implemented clean state management, modular CSS systems, and dynamic routing to ensure seamless cross-device compatibility.',
      'Optimized asset delivery, bundling configurations, and Core Web Vitals to achieve fast page loads and smooth user interactions.'
    ],
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 / Modern CSS', 'REST APIs', 'Vite', 'Git']
  },
  {
    id: 2,
    role: 'Software & Information Systems Graduate',
    company: 'Academic & Applied Engineering',
    period: '2020 — 2024',
    location: 'Egypt',
    description: [
      'Studied core computer science disciplines including data structures, relational database design (SQL), and system analysis.',
      'Hands-on coursework in computer networking, TCP/IP protocols, and client-server communication architectures.',
      'Combined technical computing with business economics and managerial accounting to understand software ROI.'
    ],
    skills: ['Web Architecture', 'Computer Networks', 'Database Systems (SQL)', 'Systems Analysis', 'Problem Solving']
  }
];

export default function Experience() {
  const sectionRef = useReveal({ threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="section experience-section" 
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            02 / Experience
          </span>
          <h2 id="experience-heading" className="section-title">
            Experience &amp; Milestones
          </h2>
          <p className="section-subtitle">
            A chronological timeline of my development work, technical projects, and professional background.
          </p>
        </div>

        {/* Timeline Container (SWE Andrew Style) */}
        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item reveal-item">
              {/* Timeline marker with glowing dot */}
              <div className="timeline-marker" aria-hidden="true">
                <div className="marker-dot"></div>
              </div>

              {/* Timeline card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company">{exp.company}</span>
                      <span className="timeline-separator">•</span>
                      <span className="timeline-location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="timeline-badge">{exp.period}</span>
                </div>

                <ul className="timeline-desc-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="timeline-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
