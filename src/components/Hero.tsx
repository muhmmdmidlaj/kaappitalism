import React from 'react';
import { ArrowDownRight, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreDrop: () => void;
  onExploreCulture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDrop, onExploreCulture }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between border-b border-[#292929] bg-[#0B0B0B] overflow-hidden">
      
      {/* Background Subtle Grid & Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-80" />

      {/* Top Hero Editorial Subheading & Index */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 flex flex-wrap justify-between items-start text-xs font-mono tracking-widest text-[#E9E6DC]/70 border-b border-[#292929]/40 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-[#481A20] text-[#E9E6DC] px-2 py-0.5 border border-[#C92127]/40 text-[10px]">
            VOL. 01 / SS-26
          </span>
          <span className="uppercase text-[#E9E6DC]/80 font-bold">THE CONTROVERSIAL ISSUE</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[11px]">
          <span>NATIVE COFFEE CULTURE • 1,100M ELEVATION</span>
          <span className="text-[#C92127]">SCA 87+ RATED</span>
          <span>CALICUT REGIONAL WINNER</span>
        </div>
      </div>

      {/* Main Asymmetrical Split: Editorial Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* Left Column (7 cols): Monumental Typography & Manifesto Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-[#C92127] font-mono text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#C92127]"></span>
            <span>UNCONVENTIONAL FASHION × ARTISANAL COLD BREW</span>
          </div>

          <h2 className="font-display hero-title tracking-tight text-[#E9E6DC] uppercase">
            CULTURE IS <br />
            <span className="text-stroke hover:text-[#E9E6DC] transition-colors duration-300">NOT A</span> <br />
            <span className="text-[#C92127] italic font-serif tracking-normal">COMMODITY.</span>
          </h2>

          <div className="max-w-xl text-[#E9E6DC]/85 text-base sm:text-lg font-sans leading-relaxed pt-2">
            <p>
              Born in Calicut, Kerala. We unite heavy-weight raw streetwear with 36-hour barrel-conditioned native cold brew from the misty rainforests of Terra Vagamon.
            </p>
            <p className="text-xs font-mono tracking-wider text-[#E9E6DC]/50 mt-2 uppercase">
              // NO PRESERVATIVES. NO DILUTED ETHICS. DRESS LIKE YOU THINK.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreDrop}
              className="bg-[#E9E6DC] text-[#0B0B0B] hover:bg-[#C92127] hover:text-white transition-all duration-300 px-8 py-4 font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-3 border border-[#E9E6DC] hover:border-[#C92127] shadow-xl group"
            >
              <span>EXPLORE THE DROP</span>
              <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreCulture}
              className="bg-transparent hover:bg-[#292929]/50 text-[#E9E6DC] px-8 py-4 font-mono text-xs uppercase tracking-widest border border-[#292929] hover:border-[#E9E6DC]/50 transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C92127]" />
              <span>THE BRAND MANIFESTO</span>
            </button>
          </div>

          {/* Micro badges below CTA */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#292929]/60 max-w-lg text-[11px] font-mono text-[#E9E6DC]/60">
            <div>
              <div className="text-white font-bold text-sm">36 HOURS</div>
              <div className="text-[10px] uppercase">Barrel Extraction</div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">280+ GSM</div>
              <div className="text-[10px] uppercase">Heavyweight Knit</div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">100% NATIVE</div>
              <div className="text-[10px] uppercase">Terra Vagamon</div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Striking Authentic Editorial Photography Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Decorative backdrop box with burgundy accent */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-[#171717] border border-[#292929] shadow-2xl p-2 group overflow-hidden">
            
            {/* The Authentic Editorial Photograph */}
            <div className="relative w-full h-full overflow-hidden bg-[#0B0B0B]">
              <img
                src="/assets/snapgram.io_download-file-99ufn5au.webp"
                alt="KAAPPITALISM Streetwear and Barrel Aged Cold Brew Editorial"
                fetchPriority="high"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlaid Badges and Labels */}
              <div className="absolute top-3 left-3 bg-[#0B0B0B]/85 backdrop-blur-sm border border-[#292929] px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#E9E6DC]">
                BARREL AGED // 180 ML
              </div>

              <div className="absolute bottom-3 right-3 bg-[#C92127] text-white px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest shadow-md">
                CALICUT ED.
              </div>

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent flex items-end p-4">
                <div className="text-left">
                  <p className="font-serif italic text-lg sm:text-xl text-[#E9E6DC]">“Controversial 36 Hours”</p>
                  <p className="text-[10px] font-mono text-[#E9E6DC]/70 uppercase tracking-widest">
                    Oak conditioned • Rum & Raisin profile
                  </p>
                </div>
              </div>
            </div>

            {/* Scalloped Postage / Ticket Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0B0B0B] border-r border-b border-[#292929]"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0B0B0B] border-l border-b border-[#292929]"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0B0B0B] border-r border-t border-[#292929]"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0B0B0B] border-l border-t border-[#292929]"></div>
          </div>

          {/* Float Badge */}
          <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#481A20] border border-[#C92127]/60 p-3 shadow-2xl items-center gap-3 max-w-[220px]">
            <ShieldCheck className="w-5 h-5 text-[#C92127] shrink-0" />
            <div className="text-[10px] font-mono leading-tight">
              <span className="text-white font-bold block">SCA 87+ VERIFIED</span>
              <span className="text-[#E9E6DC]/70">Forest grown in Idukki</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monumental Marquee Ticker along bottom of Hero */}
      <div className="relative z-10 w-full overflow-hidden bg-[#181818] border-t border-[#292929] py-3 text-xs font-mono uppercase tracking-[0.25em] text-[#E9E6DC]/80">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center">
          <span>COFFEE IS A RITUAL</span>
          <span className="text-[#C92127]">•</span>
          <span>WEAR YOUR POINT OF VIEW</span>
          <span className="text-[#C92127]">•</span>
          <span>NOT JUST YOUR DAILY FIX</span>
          <span className="text-[#C92127]">•</span>
          <span>CONTROVERSIAL 36 HOURS</span>
          <span className="text-[#C92127]">•</span>
          <span>TERRA VAGAMON SINGLE ESTATE</span>
          <span className="text-[#C92127]">•</span>
          <span>DRESS LIKE YOU THINK</span>
          <span className="text-[#C92127]">•</span>
          <span>നാടൻ കാപ്പി സംസ്കാരം</span>
          <span className="text-[#C92127]">•</span>
          <span>INDIAN AEROPRESS CHAMPIONSHIP 2026</span>
          <span className="text-[#C92127]">•</span>
          <span>CULTURE IS NOT A COMMODITY</span>
          <span className="text-[#C92127]">•</span>
        </div>
      </div>

    </section>
  );
};
