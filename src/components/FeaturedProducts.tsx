import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onQuickView: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  onQuickView
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = [
    { id: 'all', label: 'ALL RELEASES' },
    { id: 'coffee', label: 'ARTISANAL COFFEE' },
    { id: 'fashion', label: 'STREETWEAR' },
    { id: 'gear', label: 'BREW LAB GEAR' },
  ];

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <section id="shop" className="bg-[#0B0B0B] py-16 sm:py-24 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#292929] pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C92127] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C92127]"></span>
              <span>CATALOGUE & DROPS • CALICUT, KERALA</span>
            </div>
            <h2 className="font-display section-title text-[#E9E6DC] uppercase tracking-wide">
              AUTHENTIC <span className="font-serif italic text-stroke">CATALOGUE.</span>
            </h2>
          </div>

          {/* Filter & Sort Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1 bg-[#141414] p-1 border border-[#292929]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#E9E6DC] text-black font-bold shadow'
                      : 'text-[#E9E6DC]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#141414] border border-[#292929] px-3 py-1.5 text-xs font-mono text-[#E9E6DC]/80">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C92127]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-[#E9E6DC] focus:outline-none cursor-pointer text-xs uppercase"
              >
                <option value="featured" className="bg-[#141414]">SORT: FEATURED</option>
                <option value="price-low" className="bg-[#141414]">PRICE: LOW TO HIGH</option>
                <option value="price-high" className="bg-[#141414]">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Count & Meta Tag */}
        <div className="flex justify-between items-center text-xs font-mono text-[#E9E6DC]/50 mb-6">
          <span>SHOWING {sortedProducts.length} OBJECTS</span>
          <span className="hidden sm:inline">AUTHENTIC BATCHES • NO PRESERVATIVES • HEAVYWEIGHT COTTON</span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
