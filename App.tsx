import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';
import { NAV_ITEMS, NAV_ITEMS_HE } from './constants';
import type { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHebrew = language === 'he';
  const navItems = isHebrew ? NAV_ITEMS_HE : NAV_ITEMS;

  return (
    <div className="min-h-screen bg-[#fafafa]" dir={isHebrew ? 'rtl' : 'ltr'}>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Mobile full-screen menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col justify-between px-8 pt-24 pb-10">
          <div className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl tracking-[0.25em] serif"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex justify-start text-[10px] tracking-[0.25em]">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`hover:opacity-60 transition-opacity ${language === 'en' ? 'font-semibold' : 'opacity-50'}`}
            >
              EN
            </button>
            <span className="mx-2 opacity-40">/</span>
            <button
              type="button"
              onClick={() => setLanguage('he')}
              className={`hover:opacity-60 transition-opacity ${language === 'he' ? 'font-semibold' : 'opacity-50'}`}
            >
              HE
            </button>
          </div>
        </div>
      )}

      <main className={isMobileMenuOpen ? 'hidden md:block' : ''}>
        <Hero language={language} />
        
        {/* Intro Section */}
        <section id="about" className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl serif leading-tight mb-8">
              {isHebrew
                ? '״אופנה איננה רק בגד – היא השקט שבין התפרים.״'
                : '"Fashion is not just about clothes, it is about the silence between the seams."'}
            </h2>
            <div className="w-12 h-[1px] bg-black mx-auto mb-8" />
            <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto uppercase text-[11px] tracking-[0.2em]">
              {isHebrew
                ? 'Lisette הוא סטודיו אופנה המבוסס בלונדון ותל אביב, שנולד מתוך עקרונות של מינימליזם אדריכלי ועבודת יד מוקפדת. אנו חוגגים את טוהר הצורה ואת הלוקסוס השקט של הבדים המשובחים בעולם.'
                : "Lisette is a London-based fashion studio founded on the principles of structural minimalism and artisanal craftsmanship. Our work celebrates the purity of form and the quiet luxury of the world's finest textiles."}
            </p>
          </div>
        </section>

        <CollectionGrid language={language} />
        
        {/* Mid-page Banner */}
        <section className="h-[70vh] w-full relative">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=75&w=1400" 
            className="w-full h-full object-cover" 
            alt={isHebrew ? 'אטלייה Lisette' : 'Atelier'}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h3 className="text-white text-3xl md:text-5xl serif text-center px-6">
              {isHebrew ? (
                <>
                  תפירה לפי מידה,<br /> בנוי לנצח.
                </>
              ) : (
                <>
                  Made to Measure, <br /> Built for Eternity.
                </>
              )}
            </h3>
          </div>
        </section>

      </main>
      <div className={isMobileMenuOpen ? 'hidden md:block' : ''}>
        <Footer language={language} />
      </div>
    </div>
  );
}

export default App;
