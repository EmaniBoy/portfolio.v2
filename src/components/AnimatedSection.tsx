import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  className = '',
  ...props 
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    fallbackInView: true
  });

  const defaultVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={defaultVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}