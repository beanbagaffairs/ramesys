import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex w-full flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
