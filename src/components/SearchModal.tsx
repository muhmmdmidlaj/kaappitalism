import React, { useState, useEffect } from 'react';
import { Product, Article } from '../types';
import { Search, X, ArrowRight, Coffee, Shirt, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  articles: Article[];
  onSelectProduct: (product: Product) => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  articles,
  onSelectProduct,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredProducts = cleanQuery
    ? products.filter(
        p =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.tagline.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery) ||
          p.details.tastingNotes?.some(n => n.toLowerCase().includes(cleanQuery)) ||
          p.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredArticles = cleanQuery
    ? articles.filter(
        a =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.subtitle.toLowerCase().includes(cleanQuery) ||
          a.excerpt.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-8 animate-fadeIn">
      
      <div className="relative bg-[#111111] border border-[#292929] w-full max-w-2xl text-[#E9E6DC] shadow-2xl mt-12 overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-[#292929] flex items-center gap-3 bg-[#161616]">
          <Search className="w-5 h-5 text-[#C92127] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH PRODUCTS, TASTING NOTES, ARTICLES (e.g. Barrel, 36 Hours, Tee, Calicut)..."
            className="flex-1 bg-transparent text-sm sm:text-base font-mono text-white placeholder-white/40 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-white/40 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-[#292929] hover:bg-[#C92127] text-white px-2.5 py-1 text-xs font-mono uppercase transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!cleanQuery ? (
            <div className="py-8 text-center space-y-3 font-mono text-xs text-[#E9E6DC]/50">
              <p className="uppercase tracking-wider">SUGGESTED DISCOVERIES</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Cold Brew', 'Barrel Aged', 'AeroPress', 'Heavyweight Tee', 'Terra Vagamon', 'Tactical Vest'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-[#1C1C1C] hover:bg-[#C92127] hover:text-white border border-[#292929] px-3 py-1.5 transition-colors text-[11px]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 && filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-[#E9E6DC]/50">
              NO OBJECTS FOUND MATCHING "{query.toUpperCase()}". TRY ANOTHER KEYWORD.
            </div>
          ) : (
            <>
              {/* Product Matches */}
              {filteredProducts.length > 0 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#C92127] uppercase tracking-widest font-bold">
                    PRODUCTS & GEAR ({filteredProducts.length})
                  </div>
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(p);
                        }}
                        className="p-3 bg-[#161616] border border-[#292929] hover:border-[#C92127] flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-14 object-cover bg-black border border-[#292929] shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="font-serif text-sm font-bold text-white group-hover:text-[#C92127] transition-colors truncate">
                              {p.name}
                            </p>
                            <p className="text-[10px] font-mono text-[#E9E6DC]/60 uppercase">
                              {p.category} • ₹{p.price}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#C92127] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Matches */}
              {filteredArticles.length > 0 && (
                <div className="space-y-3 border-t border-[#292929] pt-4">
                  <div className="text-[11px] font-mono text-[#C92127] uppercase tracking-widest font-bold">
                    THE CULTURE ARTICLES ({filteredArticles.length})
                  </div>
                  <div className="space-y-2">
                    {filteredArticles.map((a) => (
                      <div
                        key={a.id}
                        onClick={() => {
                          onClose();
                          onSelectArticle(a);
                        }}
                        className="p-3 bg-[#161616] border border-[#292929] hover:border-[#C92127] flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <BookOpen className="w-5 h-5 text-[#C92127] shrink-0" />
                          <div className="min-w-0">
                            <p className="font-serif text-sm font-bold text-white group-hover:text-[#C92127] transition-colors truncate">
                              {a.title}
                            </p>
                            <p className="text-[10px] font-mono text-[#E9E6DC]/60 uppercase">
                              {a.category} • {a.readTime}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#C92127] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>

    </div>
  );
};
