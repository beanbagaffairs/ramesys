'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  viewport?: { once?: boolean; amount?: number };
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  stagger = 0.1,
  viewport = { once: true, amount: 0.2 },
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  viewport?: { once?: boolean; amount?: number };
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  className,
  stagger = 0.1,
  viewport = { once: true, amount: 0.1 },
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, viewport);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref} className={cn(className)}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            delay: index * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
