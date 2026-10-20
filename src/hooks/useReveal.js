import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger scroll-reveal animations using IntersectionObserver.
 * Automatically adds 'reveal-visible' class when elements intersect the viewport.
 * Honors 'prefers-reduced-motion' by marking all elements visible immediately.
 */
export function useReveal(options = {}) {
  const containerRef = useRef(null);
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', staggerDelay = 70 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elementsToReveal = container.classList.contains('reveal-item')
      ? [container, ...container.querySelectorAll('.reveal-item')]
      : Array.from(container.querySelectorAll('.reveal-item'));

    if (elementsToReveal.length === 0) {
      elementsToReveal.push(container);
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elementsToReveal.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    // Set staggered delay on elements that have children or marked items
    elementsToReveal.forEach((el, index) => {
      if (!el.style.transitionDelay && elementsToReveal.length > 1) {
        el.style.transitionDelay = `${index * staggerDelay}ms`;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold,
      rootMargin,
    });

    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, staggerDelay]);

  return containerRef;
}
