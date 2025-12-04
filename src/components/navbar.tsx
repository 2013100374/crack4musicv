'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Timeline', href: '#timeline' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
  { name: 'Newsletter', href: '#newsletter' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-neon-green transition-colors font-bebas tracking-widest">
          Crack4Music
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://music.apple.com/us/artist/julius-c/1799356379"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Escucha en Apple Music
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 flex flex-col items-center space-y-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://music.apple.com/us/artist/julius-c/1799356379"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black font-bold rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Escucha en Apple Music
          </a>
        </div>
      )}
    </nav>
  );
};
