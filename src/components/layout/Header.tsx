'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-8 md:px-10">
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center text-white">
          <div className="relative flex h-14 w-auto items-center justify-center">
            {/* Prominent Shiny/Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-purple-500/60 blur-2xl group-hover:bg-purple-500/80 transition-all duration-500 rounded-full scale-150 animate-pulse" />
            <div className="absolute inset-0 -z-10 bg-white/20 blur-xl group-hover:bg-white/40 transition-all duration-500 rounded-full scale-110" />
            <img 
              src="/logo.png" 
              alt="Ramesys Logo" 
              className="relative z-10 h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="/quote">
            <Button variant="purple" size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-white">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-background-dark/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
              <Button variant="purple" size="sm" className="mt-2 w-full">Get a Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export { Header };
