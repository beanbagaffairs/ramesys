'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  viewport?: { once?: boolean; amount?: number };
}

const directionOffset = {
  up: { x: 0, y: 20 },
  down: { x: 0, y: -20 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
};

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 20,
  viewport = { once: true, amount: 0.3 },
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, viewport);

  const offset = directionOffset[direction];
  const initialX = (offset.x / 20) * distance;
  const initialY = (offset.y / 20) * distance;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: initialX, y: initialY }
      }
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
