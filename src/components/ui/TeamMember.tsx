'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string;
  alt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, alt }) => {
  return (
    <motion.div 
      className="group w-full max-w-[280px] text-center"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-6 mx-auto size-48 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        {imageUrl ? (
          <>
            <Image
              alt={alt}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={imageUrl}
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        ) : (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-purple-500/20 to-blue-500/20">
            <span className="text-4xl font-bold text-white/20">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold gradient-text">{name}</h3>
      <p className="text-sm font-medium text-primary uppercase tracking-wider">{role}</p>
    </motion.div>
  );
};

export { TeamMember };
