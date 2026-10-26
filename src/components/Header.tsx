import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string) => void;
  currentSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onNavigateSection }) => {
  const { itemCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'SHOP ALL', target: 'shop' },
    { label: 'FASHION', target: 'fashion' },
    { label: 'COFFEE', target: 'coffee' },
    { label: 'THE FILM', target: 'brand-film' },
    { label: 'THE CULTURE', target: 'culture' },
    { label: 'STORE', target: 'store' },
    { label: 'MANIFESTO', target: 'manifesto' },
  ];

  const handleNavClick = (target: string) => {
    onNavigateSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Brutalist Metadata Bar */}
      <div className="bg-[#0B0B0B] border-b border-[#292929] text-[11px] font-mono tracking-widest text-[#E9E6DC]/70 py-1.5 px-4 sm:px-8 flex justify-between items-center z-50">
        <div className="flex items-center space-x-3 overflow-hidden whitespace-nowrap">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C92127] animate-pulse"></span>
          <span className="font-bold text-[#E9E6DC]">KAAPPITALISM LAB</span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline">CALICUT, KERALA [ 11.2588° N, 75.7804° E ]</span>
          <span className="hidden lg:inline text-white/30">•</span>
          <span className="hidden lg:inline text-[#C92127]">INDIAN AEROPRESS CHAMPIONSHIP 2026 REGIONAL WINNER</span>
        </div>
        <div className="flex items-center space-x-4 text-[10px] uppercase font-mono tracking-wider shrink-0">
          <span className="hidden sm:inline text-emerald-400">FREE SHIPPING OVER ₹999</span>
          <a
            href="https://instagram.com/kaappitalism"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            @KAAPPITALISM <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#292929] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Left: Mobile hamburger & Desktop Nav Links */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#E9E6DC] p-1.5 hover:text-[#C92127] transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.slice(0, 4).map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-xs font-mono tracking-widest text-[#E9E6DC]/80 hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center cursor-pointer group py-1" onClick={() => handleNavClick('hero')}>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-widest font-bold uppercase text-[#E9E6DC] group-hover:text-white transition-all transform group-hover:scale-[1.01]">
              KAAPPITALISM
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-widest text-[#E9E6DC]/60 uppercase font-sans -mt-1 group-hover:text-[#C92127] transition-colors">
              നാടൻ കാപ്പി സംസ്കാരം
            </p>
          </div>

          {/* Right: Desktop Links + Search + Cart */}
          <div className="flex items-center space-x-5 sm:space-x-7">
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.slice(4).map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-xs font-mono tracking-widest text-[#E9E6DC]/80 hover:text-white hover:underline underline-offset-8 transition-colors cursor-pointer uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="text-[#E9E6DC] hover:text-[#C92127] transition-colors p-1.5 relative flex items-center gap-1.5 text-xs font-mono"
              aria-label="Search products and journal"
            >
              <Search className="w-5 h-5" />
              <span className="hidden md:inline tracking-wider">SEARCH</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative text-[#E9E6DC] hover:text-[#C92127] transition-colors p-1.5 flex items-center gap-1.5 text-xs font-mono"
              aria-label={`Shopping Cart with ${itemCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#C92127] text-white text-[10px] font-bold font-mono w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline tracking-wider">
                CART {itemCount > 0 ? `(${itemCount})` : ''}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          {/* Top Bar inside mobile menu */}
          <div className="flex items-center justify-between border-b border-[#292929] pb-6">
            <div>
              <div className="font-serif text-2xl font-bold tracking-widest uppercase text-[#E9E6DC]">
                KAAPPITALISM
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#C92127]">
                നാടൻ കാപ്പി സംസ്കാരം • CALICUT
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-[#292929] text-[#E9E6DC] hover:border-[#C92127] hover:text-[#C92127] transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex flex-col space-y-4 my-auto py-8">
            {navLinks.map((link, idx) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="group text-left flex items-center justify-between py-2 border-b border-[#292929]/50 hover:border-[#C92127] transition-all"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-xs font-mono text-[#C92127]">0{idx + 1}</span>
                  <span className="font-display text-4xl sm:text-5xl text-[#E9E6DC] group-hover:text-white tracking-wider">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#E9E6DC]/30 group-hover:text-[#C92127] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            ))}
          </div>

          {/* Bottom Footer in Mobile Menu */}
          <div className="pt-6 border-t border-[#292929] flex flex-col sm:flex-row justify-between text-xs font-mono text-[#E9E6DC]/60 gap-4">
            <div>
              <p className="text-white font-bold mb-1">FLAGSHIP STORE & LAB</p>
              <p>PT Usha Road, Calicut, Kerala</p>
              <p>Daily 10:00 AM – 11:30 PM</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/kaappitalism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C92127] hover:underline"
              >
                INSTAGRAM ↗
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="text-white hover:underline"
              >
                SEARCH SITE ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
