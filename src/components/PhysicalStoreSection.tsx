import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check } from 'lucide-react';

interface PhysicalStoreSectionProps {
  onOpenDirections: () => void;
}

export const PhysicalStoreSection: React.FC<PhysicalStoreSectionProps> = ({ onOpenDirections }) => {
  const [copied, setCopied] = useState(false);

  const addressText = "KAAPPITALISM Lab, PT Usha Road, Kozhikode (Calicut), Kerala 673032";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="store" className="bg-[#090909] py-20 sm:py-28 border-b border-[#292929] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#292929] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C92127] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C92127]"></span>
              <span>FLAGSHIP LAB & BREW SPACE • MALABAR COAST</span>
            </div>
            <h2 className="font-display section-title text-[#E9E6DC] uppercase tracking-wide">
              THE PHYSICAL <span className="font-serif italic text-stroke">SPACE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono text-[#E9E6DC]/70 leading-relaxed">
            <p>
              An industrial laboratory for coffee experiments, raw garment previews, vinyl listening, and late-night discourse. Not a conventional cafe.
            </p>
          </div>
        </div>

        {/* 2-Column Store Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Gallery of Authentic Store Interiors & Brew Bar */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Primary Big Photo */}
            <div className="sm:col-span-2 relative aspect-[16/10] bg-[#141414] border border-[#292929] overflow-hidden group">
              <img
                src="/assets/snapgram.io_download-file-t4914qv7.jpg"
                alt="Kaappitalism Brew Bar & Baristas"
                loading="lazy"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-5">
                <div>
                  <span className="bg-[#C92127] text-white text-[10px] font-mono px-2 py-0.5 uppercase font-bold">
                    BREW LABORATORY
                  </span>
                  <p className="font-serif text-lg text-white mt-1">Manual Brew Station & Siphon Rigs</p>
                </div>
              </div>
            </div>

            {/* Sub Photo 1: Community Gathering */}
            <div className="relative aspect-square bg-[#141414] border border-[#292929] overflow-hidden group">
              <img
                src="/assets/community_celebration.jpg"
                alt="Community Gathered at Kaappitalism"
                loading="lazy"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[9px] font-mono text-[#E9E6DC]">
                COMMUNITY CLASH // 2026
              </div>
            </div>

            {/* Sub Photo 2: Customer with Branded Mug */}
            <div className="relative aspect-square bg-[#141414] border border-[#292929] overflow-hidden group">
              <img
                src="/assets/snapgram.io_download-file-azbnfyyj.jpg"
                alt="Tasting session inside Calicut store"
                loading="lazy"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[9px] font-mono text-[#E9E6DC]">
                TASTING FLIGHTS
              </div>
            </div>

          </div>

          {/* Right Column: Practical Details, Interactive Address, Timings */}
          <div className="lg:col-span-5 bg-[#121212] border border-[#292929] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              <div className="border-b border-[#292929] pb-4">
                <span className="text-[10px] font-mono text-[#C92127] uppercase tracking-widest block mb-1">
                  CALICUT LAB & HEADQUARTERS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  KAAPPITALISM FLAGSHIP
                </h3>
                <p className="text-xs font-mono text-[#E9E6DC]/60 mt-1">
                  11.2588° N, 75.7804° E • MALABAR
                </p>
              </div>

              {/* Address card */}
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start space-x-3 text-[#E9E6DC]/85">
                  <MapPin className="w-5 h-5 text-[#C92127] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-white">LOCATION</p>
                    <p className="leading-relaxed">
                      PT Usha Road, Near Beach Road, Kozhikode (Calicut), Kerala 673032, India
                    </p>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 text-[10px] text-[#C92127] hover:underline mt-1"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}</span>
                    </button>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start space-x-3 text-[#E9E6DC]/85 border-t border-[#292929] pt-4">
                  <Clock className="w-5 h-5 text-[#C92127] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">OPERATING HOURS</p>
                    <p className="leading-relaxed">MONDAY – SUNDAY: 10:00 AM – 11:30 PM</p>
                    <p className="text-[10px] text-[#E9E6DC]/50 mt-0.5">
                      Late-night cold brew sessions & manual pour bar open until midnight on weekends.
                    </p>
                  </div>
                </div>

                {/* Direct Connect */}
                <div className="flex items-start space-x-3 text-[#E9E6DC]/85 border-t border-[#292929] pt-4">
                  <Phone className="w-5 h-5 text-[#C92127] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">DIRECT LINE</p>
                    <a href="tel:+919496000000" className="hover:text-white transition-colors">
                      +91 94960 00000 (Editable)
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-3 text-[#E9E6DC]/85 border-t border-[#292929] pt-4">
                  <svg className="w-5 h-5 text-[#C92127] shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <p className="font-bold text-white">COMMUNITY DISPATCH</p>
                    <a
                      href="https://instagram.com/kaappitalism"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C92127] hover:underline"
                    >
                      @KAAPPITALISM ↗
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-[#292929] flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDirections}
                className="w-full bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all py-3 px-4 font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>FIND THE STORE</span>
              </button>

              <a
                href="https://maps.google.com/?q=Calicut+Kerala+PT+Usha+Road"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1F1F1F] hover:bg-white/10 text-white border border-[#292929] transition-all py-3 px-4 font-mono text-xs uppercase tracking-widest text-center"
              >
                OPEN MAPS ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
