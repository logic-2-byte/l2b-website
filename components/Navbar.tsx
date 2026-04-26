'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Our Process', href: '/process' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-7xl">
        {/* Left Actions / Logo */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
            <div className="w-5 h-5 bg-[#d4c1ff] rounded-full" />
            <span className="font-semibold text-xl tracking-tight text-[#5f6368]">Logic2byte</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#5f6368]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="https://app.logic2byte.com" 
            className="hidden sm:inline-flex bg-black text-white hover:bg-zinc-800 transition-colors px-6 py-2 rounded-full text-[14px] font-bold"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 md:hidden overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center justify-between py-3 text-lg font-semibold text-[#5f6368] hover:text-black border-b border-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-zinc-300" />
                </Link>
              ))}
              <div className="pt-4">
                <Link 
                  href="https://app.logic2byte.com" 
                  className="flex items-center justify-center w-full bg-[#d4c1ff] text-black py-4 rounded-full font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
