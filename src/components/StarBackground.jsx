import React, { useEffect, useRef } from 'react';
import '../styles/StarBackground.css';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId;
    let elapsed = 0;
    let previousTime = 0;
    let stars = [];
    let canvasHeight = 0;
    const pointer = { x: 0.5, y: 0.5, active: false };
    const rotation = { x: -0.35, y: 0 };
    const targetRotation = { x: -0.35, y: 0 };
    const projected = [];

    const createStars = () => {
      const area = width * height;
      const count = Math.min(
        width < 760 ? 1200 : 2400,
        Math.max(700, Math.round(area / 1300))
      );
      stars = Array.from({ length: count }, () => {
        const radialY = 2 * Math.random() - 1;
        const angle = Math.random() * Math.PI * 2;
        const diskRadius = Math.sqrt(1 - radialY * radialY);
        const radius = Math.cbrt(Math.random());
        return {
          x: diskRadius * Math.cos(angle) * radius,
          y: radialY * radius,
          z: diskRadius * Math.sin(angle) * radius,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasHeight = height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
    };

    const render = (timestamp = 0) => {
      if (!previousTime) previousTime = timestamp || 16.67;
      const delta = Math.min((timestamp - previousTime) / 1000 || 0.016, 0.05);
      previousTime = timestamp;
      const compact = width < 760;
      const { cx, cy, radius } = {
        cx: compact ? 0.5 * width : 0.66 * width,
        cy: compact ? 0.4 * height : 0.5 * height,
        radius: Math.min(width, height) * (compact ? 0.42 : 0.46),
      };

      if (!reducedMotion) {
        elapsed += 0.13 * delta;
        if (pointer.active) {
          targetRotation.x = -0.35 + (pointer.y - 0.5) * 0.7;
          targetRotation.y = (pointer.x - 0.5) * 0.7;
        }
        rotation.x += (targetRotation.x - rotation.x) * 0.05;
        rotation.y += (targetRotation.y - rotation.y) * 0.05;
      }

      const yaw = elapsed + rotation.y;
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const cosPitch = Math.cos(rotation.x);
      const sinPitch = Math.sin(rotation.x);
      if (projected.length !== stars.length) projected.length = stars.length;

      stars.forEach((star, index) => {
        const horizontal = star.x * cosYaw + star.z * sinYaw;
        const depthHorizontal = -star.x * sinYaw + star.z * cosYaw;
        const vertical = star.y * cosPitch - depthHorizontal * sinPitch;
        const depth = star.y * sinPitch + depthHorizontal * cosPitch;
        projected[index] = {
          sx: cx + horizontal * radius,
          sy: cy + vertical * radius,
          depth,
        };
      });
      projected.sort((a, b) => a.depth - b.depth);
      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(cx, cy, 0.2 * radius, cx, cy, 1.25 * radius);
      glow.addColorStop(0, 'rgba(94,234,212,0.10)');
      glow.addColorStop(0.6, 'rgba(56,189,248,0.04)');
      glow.addColorStop(1, 'rgba(8,9,12,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(cx - 1.3 * radius, cy - 1.3 * radius, 2.6 * radius, 2.6 * radius);

      projected.forEach((star) => {
        const depth = (star.depth + 1) * 0.5;
        const size = 0.35 + 1.45 * depth;
        const alpha = 0.05 + 0.85 * Math.pow(depth, 1.35);
        const red = Math.round(94 + 143 * depth);
        const green = Math.round(234 + 6 * depth);
        const blue = Math.round(212 + 33 * depth);
        ctx.fillStyle = `rgba(${red},${green},${blue},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(star.sx, star.sy, size, 0, Math.PI * 2);
        ctx.fill();
      });
      if (!reducedMotion) animationFrameId = requestAnimationFrame(render);
    };

    const handlePointer = (event) => {
      pointer.x = event.clientX / Math.max(width, 1);
      pointer.y = event.clientY / Math.max(height, 1);
      pointer.active = true;
    };

    resize();
    render();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-background-canvas" aria-hidden="true" />;
}
