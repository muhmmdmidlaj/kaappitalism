import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id);
  const [isAdded, setIsAdded] = useState(false);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  const currentPrice = product.price + (selectedVariant?.priceModifier || 0);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart(product, selectedVariantId, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#111111] border border-[#292929] hover:border-[#E9E6DC]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Area */}
      <div className="relative w-full aspect-[4/5] bg-[#0A0A0A] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-sm border border-[#292929] px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#E9E6DC] uppercase">
            {product.badge}
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-3 right-3 text-[10px] font-mono tracking-widest uppercase bg-[#C92127] text-white px-2 py-0.5 font-bold">
          {product.category}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-[#E9E6DC] text-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#C92127] hover:text-white transition-colors shadow-lg"
          >
            <Eye className="w-4 h-4" />
            <span>QUICK VIEW</span>
          </button>
        </div>

        {/* Tasting Notes / Specs Micro Pills along bottom of image */}
        {product.details.tastingNotes && (
          <div className="absolute bottom-2 inset-x-2 flex flex-wrap gap-1 pointer-events-none">
            {product.details.tastingNotes.slice(0, 2).map((note, idx) => (
              <span
                key={idx}
                className="bg-[#0B0B0B]/85 backdrop-blur-sm border border-[#292929] text-[9px] font-mono text-[#E9E6DC]/90 px-1.5 py-0.5"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        {product.details.fabricWeight && (
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <span className="bg-[#0B0B0B]/85 backdrop-blur-sm border border-[#292929] text-[9px] font-mono text-[#E9E6DC]/90 px-1.5 py-0.5">
              {product.details.fabricWeight}
            </span>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <div className="text-[10px] font-mono text-[#E9E6DC]/50 uppercase tracking-widest">
            {product.tagline}
          </div>
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#E9E6DC] group-hover:text-white transition-colors line-clamp-1 mt-0.5">
            {product.name}
          </h4>
        </div>

        {/* Price & Variant Bar */}
        <div className="space-y-3 pt-1 border-t border-[#292929]/50">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base sm:text-lg font-bold text-[#E9E6DC]">
                ₹{currentPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="font-mono text-xs text-[#E9E6DC]/40 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="text-[10px] font-mono text-[#E9E6DC]/70">
              {product.inStock ? (
                <span className="text-emerald-400">IN STOCK</span>
              ) : (
                <span className="text-[#C92127]">SOLD OUT</span>
              )}
            </div>
          </div>

          {/* Inline Variant Selector */}
          {product.variants.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariantId(v.id);
                  }}
                  disabled={!v.inStock}
                  className={`px-2 py-0.5 text-[10px] font-mono uppercase transition-colors border ${
                    selectedVariantId === v.id
                      ? 'bg-[#E9E6DC] text-black border-[#E9E6DC] font-bold'
                      : 'bg-transparent text-[#E9E6DC]/70 border-[#292929] hover:border-[#E9E6DC]/40'
                  } ${!v.inStock ? 'opacity-40 cursor-not-allowed line-through' : ''}`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}

          {/* Add to Cart button */}
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`w-full py-2.5 px-3 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-200 border ${
              isAdded
                ? 'bg-emerald-600 text-white border-emerald-600'
                : product.inStock
                ? 'bg-[#1C1C1C] hover:bg-[#C92127] text-white border-[#292929] hover:border-[#C92127]'
                : 'bg-[#1C1C1C] text-white/30 border-[#292929] cursor-not-allowed'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>ADDED TO CART</span>
              </>
            ) : product.inStock ? (
              <>
                <Plus className="w-4 h-4" />
                <span>ADD TO CART</span>
              </>
            ) : (
              <span>UNAVAILABLE</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
