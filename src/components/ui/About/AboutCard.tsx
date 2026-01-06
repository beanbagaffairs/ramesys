'use client';

import { cn } from '@/lib/utils';
import { Card } from '../Card';
import { motion } from 'motion/react';

interface AboutCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  description: string;
}

export function AboutCard({ icon, title, description, className, ...props }: AboutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        variant="service"
        className={cn(
          'flex h-full flex-col justify-between gap-6 bg-linear-to-br from-[#140A28] via-[#090313] to-[#000101] p-8',
          'shadow-[0_18px_38px_-20px_rgba(20,10,40,0.45)] backdrop-blur-sm',
          'hover:shadow-[0_32px_50px_-22px_rgba(124,58,237,0.35)]',
          className
        )}
        {...props}
      >
        <motion.div 
          className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_center,rgba(20,10,40,0)_0%,rgba(20,10,40,0.55)_70%,rgba(20,10,40,0.85)_100%)] ring-1 ring-inset ring-[#140A28]/80 text-[#8C5CF6]"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </motion.div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-gray-300">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
