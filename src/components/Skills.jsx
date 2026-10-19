import React from 'react';
import { skillGroups } from '../data/skills';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
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
            <div key={groupObj.group || groupIdx} className="skills-group-block">
              <div className="group-header">
                <span className="group-badge">0{groupIdx + 1}</span>
                <h3 className="group-title">{groupObj.group}</h3>
              </div>

              <div className="skills-rows-list">
                {groupObj.items.map((skill, skillIdx) => (
                  <div key={skill.name || skillIdx} className="skill-row">
                    <div className="skill-row-left">
                      <span className="skill-marker"></span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-row-right">
                      <p className="skill-note">{skill.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
