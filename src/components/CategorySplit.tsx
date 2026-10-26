import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategorySplitProps {
  onSelectCategory: (cat: 'fashion' | 'coffee') => void;
}

export const CategorySplit: React.FC<CategorySplitProps> = ({ onSelectCategory }) => {
  return (
    <section className="relative bg-[#0B0B0B] border-b border-[#292929] overflow-hidden">
      
      {/* Grid: 2 Asymmetrical Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#292929]">
        
        {/* FASHION COLUMN */}
        <div
          id="fashion"
          className="relative group min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-12 overflow-hidden bg-[#0F0F0F] transition-colors hover:bg-[#141414] cursor-pointer"
          onClick={() => onSelectCategory('fashion')}
        >
          {/* Background Image with subtle zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/assets/snapgram.io_download-file-it32j1in.webp"
              alt="KAAPPITALISM Streetwear Fashion"
              loading="lazy"
              className="w-full h-full object-cover object-top opacity-35 filter grayscale contrast-125 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          </div>

          {/* Top Metadata */}
          <div className="relative z-10 flex justify-between items-start text-xs font-mono tracking-widest text-[#E9E6DC]/70">
            <span className="bg-[#1C1C1C] border border-[#292929] px-2.5 py-1 text-white">
              01 // APPAREL & GEAR
            </span>
            <span className="text-[#C92127]">280 - 340 GSM</span>
          </div>

          {/* Center / Bottom Editorial Content */}
          <div className="relative z-10 space-y-4 pt-32 sm:pt-48">
            <div className="text-xs font-mono tracking-widest text-[#C92127] uppercase">
              // ALTERNATIVE STREETWEAR
            </div>
            <h3 className="font-display text-4xl sm:text-6xl text-[#E9E6DC] uppercase tracking-tight leading-none group-hover:text-white transition-colors">
              WEAR YOUR <br />
              <span className="font-serif italic text-stroke group-hover:text-[#E9E6DC] transition-colors">POINT OF VIEW.</span>
            </h3>
            <p className="max-w-md text-sm text-[#E9E6DC]/80 font-sans leading-relaxed">
              Industrial silhouettes, drop-shoulder heavy cottons, articulated cargo pocketing, and Malayalam cultural insignia. Unconventional pieces for independent minds.
            </p>

            <div className="pt-2">
              <button
                className="inline-flex items-center space-x-3 bg-white text-[#0B0B0B] group-hover:bg-[#C92127] group-hover:text-white px-6 py-3 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                <span>EXPLORE FASHION</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* COFFEE COLUMN */}
        <div
          id="coffee"
          className="relative group min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-12 overflow-hidden bg-[#0C0B0A] transition-colors hover:bg-[#12110F] cursor-pointer"
          onClick={() => onSelectCategory('coffee')}
        >
          {/* Background Image with subtle zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/assets/snapgram.io_download-file-b041j2ts.jpg"
              alt="KAAPPITALISM Native Cold Brew Bottles"
              loading="lazy"
              className="w-full h-full object-cover object-center opacity-30 filter contrast-110 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          </div>

          {/* Top Metadata */}
          <div className="relative z-10 flex justify-between items-start text-xs font-mono tracking-widest text-[#E9E6DC]/70">
            <span className="bg-[#481A20] border border-[#C92127]/40 px-2.5 py-1 text-white">
              02 // ARTISANAL COLD BREW
            </span>
            <span className="text-emerald-400">TERRA VAGAMON • SCA 87+</span>
          </div>

          {/* Center / Bottom Editorial Content */}
          <div className="relative z-10 space-y-4 pt-32 sm:pt-48">
            <div className="text-xs font-mono tracking-widest text-[#C92127] uppercase">
              // NATIVE EXTRACTIONS
            </div>
            <h3 className="font-display text-4xl sm:text-6xl text-[#E9E6DC] uppercase tracking-tight leading-none group-hover:text-white transition-colors">
              NOT JUST YOUR <br />
              <span className="font-serif italic text-stroke group-hover:text-[#E9E6DC] transition-colors">DAILY FIX.</span>
            </h3>
            <p className="max-w-md text-sm text-[#E9E6DC]/80 font-sans leading-relaxed">
              Wild forest canopy Robusta-Excelsa harvested at 1,100m. 18-hour slow steepings, 36-hour oak barrel conditioning, and pocket apothecary shot vials.
            </p>

            <div className="pt-2">
              <button
                className="inline-flex items-center space-x-3 bg-white text-[#0B0B0B] group-hover:bg-[#C92127] group-hover:text-white px-6 py-3 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                <span>EXPLORE COFFEE</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
