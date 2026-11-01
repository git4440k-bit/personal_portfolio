import React from 'react';
import { skillGroups } from '../data/skills';
import { useReveal } from '../hooks/useReveal';
import '../styles/Skills.css';

export default function Skills() {
  const sectionRef = useReveal({ threshold: 0.1 });
  return (
    <section id="skills" ref={sectionRef} className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-eyebrow"><span className="eyebrow-line"></span>01 / Stack</span>
          <h2 id="skills-heading" className="section-title">Tools I build with</h2>
        </div>
        <div className="stack-grid">
          {skillGroups.map((g) => (
            <div key={g.group} className="stack-col reveal-item">
              <h3 className="stack-title">{g.group}</h3>
              <ul className="stack-list">
                {g.items.map((s) => { const Icon = s.icon; return (
                  <li key={s.name} className="stack-tag">{Icon && <Icon aria-hidden="true" />}{s.name}</li>
                ); })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
