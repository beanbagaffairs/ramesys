'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="flex items-start gap-4"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </motion.div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export { FeatureCard };
