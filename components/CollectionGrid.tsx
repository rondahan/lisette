
import React from 'react';
import { PRODUCTS, PRODUCTS_HE } from '../constants';
import type { Language } from '../types';

interface CollectionGridProps {
  language: Language;
}

const CollectionGrid: React.FC<CollectionGridProps> = ({ language }) => {
  const isHebrew = language === 'he';
  const products = isHebrew ? PRODUCTS_HE : PRODUCTS;

  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2 block">
              {isHebrew ? 'סדרת קוטור' : 'Couture Series'}
            </span>
            <h2 className="text-4xl md:text-5xl serif">
              {isHebrew ? 'המינימליזם החדש' : 'The New Minimal'}
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-500 leading-relaxed">
            {isHebrew
              ? 'חקר המפגש בין חייטות אדריכלית לרכות זורמת. כל פריט נתפר בסטודיו שלנו בקפדנות אובססיבית לפרטים.'
              : 'Exploring the intersection of structural tailoring and soft fluidity. Each piece is crafted in our atelier with obsessive attention to detail.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg serif tracking-wide">{product.name}</h3>
                <span className="text-xs font-light">{product.price}</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">{product.category}</p>
              <p className="text-sm text-gray-600 line-clamp-2 font-light">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
