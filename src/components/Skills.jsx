import React from 'react';
import { skillGroups } from '../data/skills';
import { useReveal } from '../hooks/useReveal';
import '../styles/Skills.css';

export default function Skills() {
  const sectionRef = useReveal({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="section skills-section" 
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            Technical Expertise
          </span>
          <h2 id="skills-heading" className="section-title">
            Skills & Competencies
          </h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to craft modern, accessible web applications.
          </p>
        </div>

        <div className="skills-groups-wrapper">
          {skillGroups.map((groupObj, groupIdx) => (
            <div 
              key={groupObj.group || groupIdx} 
              className="skills-group-block reveal-item"
            >
              <div className="group-header">
                <span className="group-badge">0{groupIdx + 1}</span>
                <h3 className="group-title">{groupObj.group}</h3>
              </div>

              <div className="skills-rows-list">
                {groupObj.items.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name || skillIdx} 
                      className="skill-row reveal-item"
                    >
                      <div className="skill-row-left">
                        {Icon && (
                          <span className="skill-icon-wrapper" aria-hidden="true">
                            <Icon className="skill-icon" />
                          </span>
                        )}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-row-right">
                        <p className="skill-note">{skill.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
