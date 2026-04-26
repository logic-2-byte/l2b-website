'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Our Process', href: '/process' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`sticky top-0 z-[100] w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-100' : 'bg-white'}`}>
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between max-w-7xl">
        {/* Left Actions / Logo */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className="w-5 h-5 bg-[#d4c1ff] rounded-full shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl tracking-tight text-black">Logic2byte</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[15px] font-semibold text-zinc-600 hover:text-black transition-all tracking-tight relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4c1ff] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="https://app.logic2byte.com" 
            className="hidden sm:inline-flex bg-black text-white hover:bg-[#c4afff] hover:text-black transition-all px-8 py-2.5 rounded-full text-[14px] font-bold shadow-xl shadow-black/5"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-black bg-zinc-50 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 md:hidden overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-8 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center justify-between py-4 text-xl font-bold text-black border-b border-zinc-50 tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-zinc-400" />
                  </div>
                </Link>
              ))}
              <div className="pt-8">
                <Link 
                  href="https://app.logic2byte.com" 
                  className="flex items-center justify-center w-full bg-black text-white py-5 rounded-full font-bold text-lg shadow-xl"
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
