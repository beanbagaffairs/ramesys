import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'service' | 'feature' | 'team';
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'rounded-xl border border-primary/30 bg-white/5 p-6 transition-all duration-300',
      service: 'rounded-xl border border-primary/30 bg-white/5 p-6 transition-all duration-500 ease-out hover:border-primary hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/20',
      feature: 'rounded-lg border border-primary/30 bg-[#211c27] p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10',
      team: 'group text-center transition-all duration-300'
    };

    return (
      <div
        className={cn(variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
