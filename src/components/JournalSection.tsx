import React from 'react';
import { Article } from '../types';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface JournalSectionProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ articles, onReadArticle }) => {
  return (
    <section id="culture" className="bg-[#0B0B0B] py-20 sm:py-28 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#292929] pb-6 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C92127] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C92127]"></span>
              <span>EDITORIAL JOURNAL • FIELD NOTES & ESSAYS</span>
            </div>
            <h2 className="font-display section-title text-[#E9E6DC] uppercase tracking-wide">
              THE <span className="font-serif italic text-stroke">CULTURE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono text-[#E9E6DC]/70 leading-relaxed">
            <p>
              Critical dispatches on South Indian terroir, competition brewing chemistry, brutalist design aesthetics, and counter-culture fashion.
            </p>
          </div>
        </div>

        {/* Magazine-style Grid (1 Hero Feature Article + 3 Secondary Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Hero Article (7 Cols) */}
          {articles[0] && (
            <div
              onClick={() => onReadArticle(articles[0])}
              className="lg:col-span-7 group bg-[#111111] border border-[#292929] hover:border-[#E9E6DC]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-black overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#C92127] text-white px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase font-bold">
                  {articles[0].category}
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-[#E9E6DC] px-2.5 py-1 text-[10px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{articles[0].readTime}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-[10px] font-mono text-[#E9E6DC]/50 uppercase tracking-widest">
                  {articles[0].date} // BY {articles[0].author}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#C92127] transition-colors leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-sm text-[#E9E6DC]/80 font-sans leading-relaxed line-clamp-3">
                  {articles[0].excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:text-[#C92127] transition-colors">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* Secondary Column: 3 Stacked Article Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {articles.slice(1, 4).map((art) => (
              <div
                key={art.id}
                onClick={() => onReadArticle(art)}
                className="group bg-[#111111] border border-[#292929] hover:border-[#E9E6DC]/40 transition-all p-5 flex flex-col sm:flex-row gap-5 cursor-pointer"
              >
                <div className="sm:w-36 aspect-square bg-black shrink-0 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 left-1 bg-black/80 text-[9px] font-mono text-[#C92127] px-1.5 py-0.5">
                    {art.category}
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-2 flex-1">
                  <div>
                    <div className="text-[9px] font-mono text-[#E9E6DC]/50 uppercase tracking-wider">
                      {art.date} • {art.readTime}
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#C92127] transition-colors line-clamp-2 mt-1">
                      {art.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#E9E6DC]/70 font-sans line-clamp-2">
                    {art.excerpt}
                  </p>
                  <div className="text-[11px] font-mono text-[#C92127] font-bold flex items-center gap-1 pt-1">
                    <span>READ DISPATCH</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
