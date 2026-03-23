'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    // Create particles - reduced count for better performance
    const particles: Particle[] = [];
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let lastTime = Date.now();
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    // Optimized animation loop for 60fps
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameTime) {
        lastTime = currentTime - (deltaTime % frameTime);

        // Clear with reduced opacity for trail effect
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        particles.forEach((particle) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off walls
          if (particle.x - particle.radius < 0 || particle.x + particle.radius > window.innerWidth) {
            particle.vx *= -1;
          }
          if (particle.y - particle.radius < 0 || particle.y + particle.radius > window.innerHeight) {
            particle.vy *= -1;
          }

          // Keep in bounds
          particle.x = Math.max(particle.radius, Math.min(window.innerWidth - particle.radius, particle.x));
          particle.y = Math.max(particle.radius, Math.min(window.innerHeight - particle.radius, particle.y));

          // Draw particle
          ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw connections - only for nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
