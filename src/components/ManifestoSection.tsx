import React from 'react';
import { Quote, Flame, Target, Sparkles } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="relative bg-[#0E0E0E] py-20 sm:py-28 border-b border-[#292929] overflow-hidden">
      
      {/* Background oversized watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none opacity-[0.03] text-white font-display text-[25vw] leading-none whitespace-nowrap">
        KAAPPI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#C92127] uppercase mb-4">
          <span className="w-2 h-2 bg-[#C92127]"></span>
          <span>THE KAAPPITALISM MANIFESTO // 001</span>
        </div>

        {/* Monumental Headline */}
        <div className="border-b border-[#292929] pb-10 mb-12">
          <h2 className="font-display section-title text-[#E9E6DC] uppercase tracking-tight max-w-5xl">
            NOT JUST WHAT YOU WEAR. <br />
            NOT JUST WHAT YOU DRINK. <br />
            <span className="text-[#C92127] font-serif italic text-stroke">WHAT YOU STAND FOR.</span>
          </h2>
        </div>

        {/* Editorial 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Physical Exhibition Poster from Calicut Store */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#161616] border border-[#292929] p-4 sm:p-6 shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden bg-black mb-4 relative">
                <img
                  src="/assets/snapgram.io_download-file-t4914qv7.jpg"
                  alt="Kaappitalism Calicut Lab & Native Coffee Culture Wall"
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
                <div className="absolute bottom-3 left-3 bg-[#0B0B0B]/90 border border-[#292929] px-3 py-1 font-mono text-[10px] text-[#E9E6DC]">
                  CALICUT LAB // EXHIBITION WALL
                </div>
              </div>

              <div className="font-mono text-xs text-[#E9E6DC]/70 space-y-1.5 border-t border-[#292929] pt-3">
                <div className="flex justify-between">
                  <span className="text-white font-bold">FOUNDED:</span>
                  <span>CALICUT, KERALA (2023)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-bold">HERITAGE:</span>
                  <span className="text-[#C92127]">നാടൻ കാപ്പി സംസ്കാരം</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-bold">ETHOS:</span>
                  <span>NO CONVENTIONAL TEMPLATES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Text Spread */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="relative">
              <Quote className="w-12 h-12 text-[#C92127]/20 absolute -top-6 -left-6 pointer-events-none" />
              <p className="font-serif italic text-2xl sm:text-3xl text-[#E9E6DC] leading-snug">
                “It is the conversations that begin over a glass of kaappi, driven by deep passion for specialty coffee and alternative thinking.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#E9E6DC]/80 font-sans leading-relaxed border-t border-[#292929] pt-8">
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#C92127]" />
                  <span>01. THE COUNTER-CULTURE</span>
                </h4>
                <p>
                  We reject the sterile, formulaic retail spaces that treat customers like statistical consumers. KAAPPITALISM is an underground sanctuary where streetwear is tactile, imperfect, and rebellious, and coffee is treated as a cultural catalyst.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-[#C92127]" />
                  <span>02. REGIONAL INTEGRITY</span>
                </h4>
                <p>
                  Rather than copying European or American lifestyle playbooks, we look to the soil of Kerala. High-elevation shade Robusta from Terra Vagamon, steeped with mountain water, roasted in small batches, honoring local agricultural mastery.
                </p>
              </div>
            </div>

            {/* Cultural Banner Box */}
            <div className="bg-[#481A20]/40 border border-[#C92127]/50 p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C92127] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>DECLARATION OF INDEPENDENCE</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-white">
                “Made for those who know their beans and their worth.”
              </p>
              <p className="font-mono text-xs text-[#E9E6DC]/70">
                You do not buy KAAPPITALISM to blend in. You drink it to think clearly. You wear it to stand apart.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
