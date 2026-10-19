import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="footer-copyright">
            &copy; {currentYear} Kareem Mahmoud. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React &amp; Vite • Plain CSS
          </p>
        </div>

        <div className="footer-right">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
