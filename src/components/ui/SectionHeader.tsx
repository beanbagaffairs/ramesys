'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonShootingStarBorder } from './ShinyButton';
import { FadeIn } from './FadeIn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  badgeText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  className,
  badgeText,
}) => {
  return (
    <div
      className={cn(
        'mb-8 flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <div
        className={cn(
          'flex w-full max-w-3xl flex-col gap-5',
          centered ? 'mx-auto' : 'mx-0'
        )}
      >
        {badgeText && (
          <FadeIn delay={0} duration={0.5} direction="down" distance={15}>
            <div className={cn('w-fit', centered ? 'mx-auto' : '')}>
              <ButtonShootingStarBorder text={badgeText} />
            </div>
          </FadeIn>
        )}
        <FadeIn delay={0.2} duration={0.6}>
          <h2 className="gradient-text text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.4} duration={0.5}>
            <p className="text-base font-normal leading-normal text-gray-300 sm:text-lg">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export { SectionHeader };
