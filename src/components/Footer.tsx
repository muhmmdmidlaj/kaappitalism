import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPolicy: (type: 'shipping' | 'privacy' | 'terms') => void;
  onOpenDirections: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenPolicy,
  onOpenDirections,
}) => {
  return (
    <footer className="bg-[#070707] text-[#E9E6DC] border-t border-[#292929] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Massive Brand Statement */}
        <div className="border-b border-[#292929] pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest text-[#E9E6DC] uppercase block">
                KAAPPITALISM
              </span>
              <span className="text-xs sm:text-sm font-sans tracking-widest text-[#C92127] uppercase block mt-1">
                നാടൻ കാപ്പി സംസ്കാരം // CALICUT, KERALA • EST. 2023
              </span>
            </div>

            <div className="max-w-sm text-xs font-mono text-[#E9E6DC]/60 leading-relaxed">
              <p>
                An independent cultural identity connecting alternative streetwear with native artisanal cold brew extractions.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation & Information Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          
          {/* Col 1: Shop */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-widest uppercase border-b border-[#292929] pb-2 text-[11px]">
              01 // SHOPPING
            </h4>
            <ul className="space-y-2 text-[#E9E6DC]/70">
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#C92127] transition-colors">
                  ALL RELEASES
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('coffee')} className="hover:text-[#C92127] transition-colors">
                  ARTISANAL COLD BREW
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('fashion')} className="hover:text-[#C92127] transition-colors">
                  STREETWEAR & APPAREL
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('shop')} className="hover:text-[#C92127] transition-colors">
                  BREW LAB GEAR
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: The Project */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-widest uppercase border-b border-[#292929] pb-2 text-[11px]">
              02 // UNIVERSE
            </h4>
            <ul className="space-y-2 text-[#E9E6DC]/70">
              <li>
                <button onClick={() => onNavigateSection('brand-film')} className="hover:text-[#C92127] transition-colors">
                  THE BRAND FILM (98S)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('culture')} className="hover:text-[#C92127] transition-colors">
                  THE CULTURE JOURNAL
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('manifesto')} className="hover:text-[#C92127] transition-colors">
                  BRAND MANIFESTO
                </button>
              </li>
              <li>
                <button onClick={onOpenDirections} className="hover:text-[#C92127] transition-colors">
                  VISIT CALICUT LAB
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Calicut Flagship */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-widest uppercase border-b border-[#292929] pb-2 text-[11px]">
              03 // PHYSICAL LAB
            </h4>
            <div className="space-y-1.5 text-[#E9E6DC]/70 text-[11px]">
              <p className="text-white font-bold">PT USHA ROAD</p>
              <p>Kozhikode (Calicut), Kerala 673032</p>
              <p className="text-[#C92127]">Daily 10:00 AM – 11:30 PM</p>
              <p className="pt-2">
                <a href="tel:+919496000000" className="hover:underline">
                  +91 94960 00000
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Legal & Policies */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-widest uppercase border-b border-[#292929] pb-2 text-[11px]">
              04 // POLICIES & CONNECT
            </h4>
            <ul className="space-y-2 text-[#E9E6DC]/70">
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#C92127] transition-colors">
                  SHIPPING & RETURNS
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-[#C92127] transition-colors">
                  PRIVACY POLICY
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-[#C92127] transition-colors">
                  TERMS & CONDITIONS
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://instagram.com/kaappitalism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C92127] transition-colors flex items-center gap-1 font-bold"
                >
                  INSTAGRAM @KAAPPITALISM <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Cultural Stamp */}
        <div className="border-t border-[#292929] pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#E9E6DC]/50 gap-4">
          <div>
            © {new Date().getFullYear()} KAAPPITALISM COLD BREW & ATELIER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span>FSSAI LIC: 21325242000014</span>
            <span>•</span>
            <span className="text-[#C92127]">100% INDEPENDENT IDENTITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
