import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotationX?: number; // Maximum rotation along X-axis
  maxRotationY?: number; // Maximum rotation along Y-axis
  depth?: number; // Depth for inner content
}

export default function ThreeDCard({
  children,
  className = '',
  maxRotationX = 17.5,
  maxRotationY = 17.5,
  depth = 50,
}: ThreeDCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxRotationX}deg`, `-${maxRotationX}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxRotationY}deg`, `${maxRotationY}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: `translateZ(${depth}px)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}