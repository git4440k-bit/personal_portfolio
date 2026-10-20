import React, { useState } from 'react';
import { contactConfig } from '../data/contact';
import { useReveal } from '../hooks/useReveal';
import '../styles/Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useReveal({ threshold: 0.1 });

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="section contact-section" 
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section-header reveal-item">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            Reach Out
          </span>
          <h2 id="contact-heading" className="section-title">
            {contactConfig.heading}
          </h2>
          <p className="section-subtitle">
            {contactConfig.subheading}
          </p>
        </div>

        <div className="contact-card-wrapper">
          <div className="contact-main-card reveal-item">
            <div className="contact-text-block">
              <span className="contact-tag">Direct Communication</span>
              <h3 className="contact-prompt">Let's build something exceptional together.</h3>
              <p className="contact-description">
                Whether you have an open front-end position, a contract project, or just want to connect — my inbox is always open.
              </p>

              {/* Direct Email Action Button */}
              <div className="contact-quick-action">
                <a 
                  href={`mailto:${contactConfig.email}`}
                  className="btn btn-primary contact-main-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  className="btn btn-outline copy-btn"
                  onClick={() => handleCopyEmail(contactConfig.email)}
                  title="Copy email address to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="highlight-yellow">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="highlight-yellow">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Configured Channels List (FR-19, FR-20, FR-21) */}
            <div className="contact-channels-list">
              {contactConfig.channels.map((channel) => {
                const isMail = channel.type === 'email' || channel.url.startsWith('mailto:');
                return (
                  <a
                    key={channel.id}
                    href={channel.url}
                    className="channel-card reveal-item"
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                  >
                    <div className="channel-info">
                      <div className="channel-top">
                        <span className="channel-name">{channel.name}</span>
                        {channel.id === 'github' && (
                          <span className="channel-badge">Code</span>
                        )}
                        {channel.id === 'email' && (
                          <span className="channel-badge">Primary</span>
                        )}
                      </div>
                      <span className="channel-value">{channel.value}</span>
                      <p className="channel-desc">{channel.description}</p>
                    </div>

                    <div className="channel-arrow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
