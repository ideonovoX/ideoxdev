
import { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient = ({ className }: AnimatedGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let circles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }[] = [];
    
    const colors = [
      'rgba(97, 31, 105, 0.6)',   // slack-purple
      'rgba(18, 100, 163, 0.6)',  // slack-blue
      'rgba(43, 172, 118, 0.6)',  // slack-green
      'rgba(236, 178, 46, 0.6)',  // slack-yellow
    ];
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      
      if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        
        // Reinitialize circles when canvas resizes
        initCircles();
      }
    };
    
    const initCircles = () => {
      circles = [];
      const numCircles = 5;
      const maxRadius = Math.min(canvas.width, canvas.height) / 3;
      
      for (let i = 0; i < numCircles; i++) {
        const radius = maxRadius * (0.3 + Math.random() * 0.7);
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: colors[i % colors.length],
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };
    
    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Bounce off walls
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
        
        // Draw circle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          circle.x, 
          circle.y, 
          0, 
          circle.x, 
          circle.y, 
          circle.radius
        );
        gradient.addColorStop(0, circle.color.replace('0.6', '0.6'));
        gradient.addColorStop(1, circle.color.replace('0.6', '0'));
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(drawCircles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawCircles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={className || "absolute inset-0 w-full h-full -z-10 opacity-70"}
    />
  );
};

export default AnimatedGradient;
