import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold leading-normal tracking-[0.015em] transition-all';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 ring-2 ring-primary ring-offset-2 ring-offset-background-dark hover:scale-105 duration-200',
      secondary: 'bg-white/10 text-white hover:bg-white/20 ring-2 ring-white/20 ring-offset-2 ring-offset-background-dark duration-200',
      outline: 'border border-primary/50 bg-white/5 text-white hover:border-primary hover:bg-primary/10 duration-200',
      purple: 'bg-gradient-to-b from-[#1a0640] to-[#28095A] text-zinc-300 border-2 border-[#2b0f57] hover:from-[#28095A] hover:to-[#4c1d95] active:scale-95 shadow-2xl shadow-purple-900/40 hover:shadow-purple-900/60 ease-out duration-900 !font-semibold'
    };
    
    const sizes = {
      sm: 'h-10 px-4 text-sm min-w-[84px]',
      md: 'h-12 px-5 text-base min-w-[84px]',
      lg: 'h-14 px-6 text-lg min-w-[100px]'
    };

    return (
      <button
        className={cn(
          'flex',
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="truncate">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
