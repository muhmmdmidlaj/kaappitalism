import React from 'react';
import { Article } from '../types';
import { X, ArrowLeft, Clock, Quote, Share2 } from 'lucide-react';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Magazine Reader Modal Container */}
      <div className="relative bg-[#0D0D0D] border border-[#292929] w-full max-w-3xl text-[#E9E6DC] shadow-2xl my-auto overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="border-b border-[#292929] px-6 py-4 flex justify-between items-center bg-[#141414] sticky top-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-[#E9E6DC]/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase">BACK TO THE CULTURE</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Share essay"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-12 space-y-8 max-h-[85vh] overflow-y-auto">
          
          {/* Metadata & Category */}
          <div className="space-y-3 border-b border-[#292929] pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#E9E6DC]/60">
              <span className="bg-[#C92127] text-white px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="text-white/80">BY {article.author}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#E9E6DC]/80">
              {article.subtitle}
            </p>
          </div>

          {/* Hero Featured Photograph */}
          <div className="relative aspect-[16/10] bg-black border border-[#292929] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[9px] font-mono text-[#E9E6DC]/60">
              PHOTOGRAPHY // KAAPPITALISM ARCHIVES
            </div>
          </div>

          {/* Pull quote if available */}
          {article.quote && (
            <div className="bg-[#181818] border-l-2 border-[#C92127] p-6 relative">
              <Quote className="w-8 h-8 text-[#C92127]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed">
                “{article.quote}”
              </p>
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-[#E9E6DC]/90 font-sans leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:text-[#C92127] first-letter:font-bold first-letter:mr-1">
                {p}
              </p>
            ))}
          </div>

          {/* Bottom Author Stamp */}
          <div className="border-t border-[#292929] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-[#E9E6DC]/60 gap-4">
            <div>
              <p className="text-white font-bold uppercase">KAAPPITALISM EDITORIAL COLLECTIVE</p>
              <p>Published from the Calicut Lab & Roastery</p>
            </div>
            <button
              onClick={onClose}
              className="bg-[#222222] hover:bg-[#C92127] text-white px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
            >
              CLOSE ESSAY
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
