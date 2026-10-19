import React from 'react';
import { projects } from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            Featured Work
          </span>
          <h2 id="projects-heading" className="section-title">
            Projects
          </h2>
          <p className="section-subtitle">
            A showcase of web applications built with an emphasis on responsive design, performance, and real user value.
          </p>
        </div>

        <div className="projects-grid">
          {projects && projects.length > 0 ? (
            projects.map((project, idx) => {
              const hasDemo = Boolean(project.demo && project.demo.trim());
              const hasGithub = Boolean(project.github && project.github.trim());

              return (
                <article key={project.title || idx} className="project-card">
                  <div className="project-card-header">
                    <span className="project-index">0{idx + 1}</span>
                    <div className="project-status-dot"></div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technology Tags */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="project-tech-tags" aria-label="Technologies used">
                      {project.tech.map((tag, tagIdx) => (
                        <span key={tagIdx} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions: Demo & GitHub links.
                      FR-16: If a project has no demo or no GitHub link, that button is hidden instead of broken. */}
                  {(hasDemo || hasGithub) && (
                    <div className="project-links">
                      {hasDemo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary project-btn"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      )}

                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary project-btn"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })
          ) : (
            <div className="projects-empty-state">
              <p>Projects are currently being updated. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
