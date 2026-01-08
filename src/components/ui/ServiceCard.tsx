'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  subServiceCount?: number;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  subServiceCount,
  href,
}) => {
  const content = (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <Card
        variant="service"
        className="relative flex h-[320px] flex-col justify-between gap-3 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] py-8 px-6 cursor-pointer"
      >
        {typeof subServiceCount === "number" && subServiceCount >= 0 && (
          <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-glow-pulse" />
            <span>{subServiceCount} services</span>
          </div>
        )}
        <motion.div 
          className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_center,rgba(20,10,40,0)_0%,rgba(20,10,40,0.55)_70%,rgba(20,10,40,0.85)_100%)] ring-1 ring-inset ring-[#140A28]/80 shadow-[0_18px_38px_-18px_rgba(20,10,40,0.9)] shadow-[#140A28]/30 text-[#8C5CF6]"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </motion.div>
        <div className="flex flex-col gap-3 pb-2">
          <h3 className="gradient-text text-3xl font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="text-sm font-normal leading-normal text-gray-400">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export { ServiceCard };
