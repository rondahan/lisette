
import React, { useState } from 'react';
import { NAV_ITEMS, NAV_ITEMS_HE } from '../constants';
import type { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = language === 'he' ? NAV_ITEMS_HE : NAV_ITEMS;

  const LangToggle = () => (
    <div className="flex items-center gap-2 text-[10px] tracking-[0.25em]">
      <button
        type="button"
        onClick={() => onLanguageChange('en')}
        className={`hover:opacity-60 transition-opacity ${language === 'en' ? 'font-semibold' : 'opacity-50'}`}
      >
        EN
      </button>
      <span className="opacity-40">/</span>
      <button
        type="button"
        onClick={() => onLanguageChange('he')}
        className={`hover:opacity-60 transition-opacity ${language === 'he' ? 'font-semibold' : 'opacity-50'}`}
      >
        HE
      </button>
    </div>
  );

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 flex justify-between items-center"
    >
      <div className="flex-1 hidden md:flex gap-8 items-center">
        {navItems.slice(0, 2).map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="text-[11px] uppercase tracking-[0.2em] font-medium hover:opacity-50 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </div>

      <a href="#" className="text-2xl md:text-3xl tracking-[0.3em] font-light uppercase serif text-center flex-1">
        Lisette
      </a>

      <div className="flex-1 hidden md:flex justify-end gap-8 items-center">
        {navItems.slice(2).map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="text-[11px] uppercase tracking-[0.2em] font-medium hover:opacity-50 transition-opacity"
          >
            {item.label}
          </a>
        ))}
        <LangToggle />
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className={`w-6 h-[1px] bg-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-[1px] bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-[1px] bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-in-out transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col items-center justify-center gap-8`}>
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl uppercase tracking-[0.3em] serif"
          >
            {item.label}
          </a>
        ))}
        <LangToggle />
      </div>
    </nav>
  );
};

export default Navbar;
