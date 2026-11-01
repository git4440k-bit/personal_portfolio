import React, { useEffect, useRef } from 'react';
import '../styles/StarBackground.css';

/**
 * StarBackground
 * Renders an animated, high-performance canvas starfield.
 * Seamlessly harmonizes with both Dark Mode (#08080c) and Light Mode (#F9F9F9):
 *  - Dark Mode: Radiant silver-white, neon teal, and warm gold twinkling stars with glowing halos and shooting comets.
 *  - Light Mode: Subtle emerald-teal, warm amber, and slate-indigo sparkles that shimmer elegantly on #F9F9F9.
 */
export default function StarBackground({ theme = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars = [];
    let shootingStar = null;
    let nextShootingStarTime = Date.now() + 2500 + Math.random() * 3000;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette mapping for dark and light modes
    const getColors = (isDark) => {
      if (isDark) {
        return {
          primary: {
            core: (a) => `rgba(255, 255, 255, ${a})`,
            glow: (a) => `rgba(255, 255, 255, ${a * 0.35})`,
          },
          accent: {
            core: (a) => `rgba(93, 234, 213, ${a})`,
            glow: (a) => `rgba(93, 234, 213, ${a * 0.45})`,
          },
          yellow: {
            core: (a) => `rgba(250, 204, 21, ${a})`,
            glow: (a) => `rgba(250, 204, 21, ${a * 0.4})`,
          },
        };
      }
      return {
        primary: {
          core: (a) => `rgba(15, 118, 110, ${a * 0.75})`,
          glow: (a) => `rgba(15, 118, 110, ${a * 0.22})`,
        },
        accent: {
          core: (a) => `rgba(85, 95, 135, ${a * 0.65})`,
          glow: (a) => `rgba(85, 95, 135, ${a * 0.2})`,
        },
        yellow: {
          core: (a) => `rgba(180, 115, 15, ${a * 0.8})`,
          glow: (a) => `rgba(250, 204, 21, ${a * 0.3})`,
        },
      };
    };

    // Initialize or resize star array
    const initStars = () => {
      // Scale star count based on screen area (smooth on mobile and desktop)
      const count = Math.min(
        90,
        Math.max(35, Math.floor((width * height) / 16000))
      );

      stars = [];
      for (let i = 0; i < count; i++) {
        // Distribute color roles: 60% primary, 25% accent (teal/slate), 15% yellow/amber
        const randColor = Math.random();
        let colorType = 'primary';
        if (randColor > 0.85) colorType = 'yellow';
        else if (randColor > 0.6) colorType = 'accent';

        // 80% circle stars, 20% 4-point sparkle cross stars
        const isSparkle = Math.random() < 0.2;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isSparkle
            ? 1.4 + Math.random() * 1.6
            : 0.75 + Math.random() * 1.5,
          type: isSparkle ? 'sparkle' : 'circle',
          colorType,
          phase: Math.random() * Math.PI * 2,
          speed: 0.012 + Math.random() * 0.025,
          minAlpha: 0.15 + Math.random() * 0.15,
          maxAlpha: 0.75 + Math.random() * 0.25,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initStars();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Draw 4-point sparkle star
    const drawSparkle = (x, y, size, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);

      // Glow halo
      ctx.beginPath();
      ctx.arc(0, 0, size * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = color.glow(alpha);
      ctx.fill();

      // 4-point diamond cross star
      ctx.fillStyle = color.core(alpha);
      ctx.beginPath();
      const spike = size * 2.1;
      const inner = size * 0.35;
      ctx.moveTo(0, -spike);
      ctx.quadraticCurveTo(0, -inner, inner, 0);
      ctx.quadraticCurveTo(0, inner, 0, spike);
      ctx.quadraticCurveTo(0, inner, -inner, 0);
      ctx.quadraticCurveTo(0, -inner, 0, -spike);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    // Draw circular star
    const drawCircleStar = (x, y, size, alpha, color) => {
      // Glow halo
      if (size > 1.2) {
        ctx.beginPath();
        ctx.arc(x, y, size * 2.0, 0, Math.PI * 2);
        ctx.fillStyle = color.glow(alpha);
        ctx.fill();
      }

      // Bright core
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color.core(alpha);
      ctx.fill();
    };

    // Spawn a shooting star periodically
    const maybeSpawnShootingStar = () => {
      const now = Date.now();
      if (!shootingStar && now >= nextShootingStarTime) {
        const startX = Math.random() * (width * 0.75) + width * 0.15;
        const startY = Math.random() * (height * 0.35);
        // Angle downwards-left roughly 35-50 degrees
        const angle = Math.PI * (0.7 + Math.random() * 0.15);
        const speed = 9 + Math.random() * 5;
        const length = 75 + Math.random() * 55;

        shootingStar = {
          x: startX,
          y: startY,
          angle,
          speed,
          length,
          alpha: 1.0,
          decay: 0.022 + Math.random() * 0.015,
        };

        // Next shooting star in 4 to 8 seconds
        nextShootingStarTime = now + 4000 + Math.random() * 4000;
      }
    };

    // Update and draw shooting star
    const updateAndDrawShootingStar = (isDark) => {
      if (!shootingStar) return;

      const { x, y, angle, length, alpha, speed, decay } = shootingStar;
      const tailX = x - Math.cos(angle) * length;
      const tailY = y - Math.sin(angle) * length;

      const grad = ctx.createLinearGradient(x, y, tailX, tailY);
      if (isDark) {
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        grad.addColorStop(0.35, `rgba(93, 234, 213, ${alpha * 0.8})`);
        grad.addColorStop(1, 'rgba(93, 234, 213, 0)');
      } else {
        grad.addColorStop(0, `rgba(15, 118, 110, ${alpha * 0.7})`);
        grad.addColorStop(0.4, `rgba(180, 115, 15, ${alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(15, 118, 110, 0)');
      }

      ctx.save();
      ctx.strokeStyle = grad;
      ctx.lineWidth = isDark ? 1.75 : 1.4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Head point
      ctx.fillStyle = isDark
        ? `rgba(255, 255, 255, ${alpha})`
        : `rgba(15, 118, 110, ${alpha * 0.85})`;
      ctx.beginPath();
      ctx.arc(x, y, isDark ? 1.6 : 1.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Move shooting star
      shootingStar.x += Math.cos(angle) * speed;
      shootingStar.y += Math.sin(angle) * speed;
      shootingStar.alpha -= decay;

      if (
        shootingStar.alpha <= 0 ||
        shootingStar.x < -100 ||
        shootingStar.y > height + 100
      ) {
        shootingStar = null;
      }
    };

    // Animation frame loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const colors = getColors(isDark);

      // Render static or animated stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Twinkle effect
          star.phase += star.speed;
          // Drift motion
          star.x += star.vx;
          star.y += star.vy;

          // Wrap edges
          if (star.x < 0) star.x = width;
          else if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          else if (star.y > height) star.y = 0;
        }

        const twinkleFactor = 0.5 + 0.5 * Math.sin(star.phase);
        const currentAlpha =
          star.minAlpha + (star.maxAlpha - star.minAlpha) * twinkleFactor;

        const starColor = colors[star.colorType] || colors.primary;

        if (star.type === 'sparkle') {
          drawSparkle(star.x, star.y, star.size, currentAlpha, starColor);
        } else {
          drawCircleStar(star.x, star.y, star.size, currentAlpha, starColor);
        }
      }

      // Shooting star (only when motion is not reduced)
      if (!prefersReducedMotion) {
        maybeSpawnShootingStar();
        updateAndDrawShootingStar(isDark);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Handle tab visibility to save CPU and battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial render
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="star-background-canvas"
      aria-hidden="true"
    />
  );
}
