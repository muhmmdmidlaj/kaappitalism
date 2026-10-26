import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { X, Check, Plus, Minus, Shield, Sparkles, MapPin, Coffee, Shirt } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  const unitPrice = product.price + (selectedVariant?.priceModifier || 0);
  const totalPrice = unitPrice * quantity;

  const allImages = [product.image, ...(product.secondaryImages || [])];

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, selectedVariantId, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div className="relative bg-[#0F0F0F] border border-[#292929] w-full max-w-4xl text-[#E9E6DC] shadow-2xl my-auto overflow-hidden">
        
        {/* Top Bar with Close */}
        <div className="border-b border-[#292929] px-6 py-4 flex justify-between items-center bg-[#141414]">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#E9E6DC]/70">
            <span className="uppercase text-[#C92127] font-bold">KAAPPITALISM OBJECT</span>
            <span>//</span>
            <span className="uppercase">{product.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#292929]">
          
          {/* Left Column: Image Gallery */}
          <div className="p-6 bg-[#090909] flex flex-col justify-between space-y-4">
            <div className="relative aspect-[4/5] bg-black border border-[#292929] overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-sm border border-[#292929] px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#E9E6DC] uppercase">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail previews */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-1">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 border shrink-0 overflow-hidden ${
                      activeImage === img ? 'border-[#C92127]' : 'border-[#292929] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="text-[10px] font-mono text-[#E9E6DC]/50 uppercase tracking-widest flex items-center justify-between">
              <span>AUTHENTIC PRODUCT PHOTOGRAPHY</span>
              <span>CALICUT LAB</span>
            </div>
          </div>

          {/* Right Column: Product Specs, Variants, Quantity, Purchase */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-[#C92127] uppercase tracking-widest block mb-1">
                  {product.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {product.name}
                </h3>
              </div>

              {/* Price & Stock */}
              <div className="flex items-baseline space-x-3 border-b border-[#292929] pb-4">
                <span className="font-mono text-2xl font-bold text-white">
                  ₹{unitPrice.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-sm text-[#E9E6DC]/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs font-mono text-emerald-400 pl-2">
                  {product.inStock ? '● IN STOCK & READY FOR DISPATCH' : '● OUT OF STOCK'}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#E9E6DC]/85 font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Specific Attributes (Coffee / Fashion) */}
              <div className="bg-[#141414] border border-[#292929] p-4 text-xs font-mono space-y-2">
                {product.details.origin && (
                  <div className="flex items-center gap-2 text-[#E9E6DC]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#C92127] shrink-0" />
                    <span>ORIGIN: <strong className="text-white">{product.details.origin}</strong></span>
                  </div>
                )}
                {product.details.brewTime && (
                  <div className="flex items-center gap-2 text-[#E9E6DC]/80">
                    <Coffee className="w-3.5 h-3.5 text-[#C92127] shrink-0" />
                    <span>EXTRACTION: <strong className="text-white">{product.details.brewTime}</strong></span>
                  </div>
                )}
                {product.details.scaScore && (
                  <div className="flex items-center gap-2 text-[#E9E6DC]/80">
                    <Sparkles className="w-3.5 h-3.5 text-[#C92127] shrink-0" />
                    <span>SCORE: <strong className="text-white">{product.details.scaScore}</strong></span>
                  </div>
                )}
                {product.details.tastingNotes && (
                  <div className="pt-1">
                    <span className="text-[10px] text-[#E9E6DC]/60 block mb-1">TASTING NOTES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.details.tastingNotes.map((note, i) => (
                        <span key={i} className="bg-black border border-[#292929] text-white px-2 py-0.5 text-[10px]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.details.fabricWeight && (
                  <div className="flex items-center gap-2 text-[#E9E6DC]/80">
                    <Shirt className="w-3.5 h-3.5 text-[#C92127] shrink-0" />
                    <span>SPECIFICATION: <strong className="text-white">{product.details.fabricWeight}</strong></span>
                  </div>
                )}
                {product.details.composition && (
                  <div className="text-[11px] text-[#E9E6DC]/70">
                    COMPOSITION: <strong className="text-white">{product.details.composition}</strong>
                  </div>
                )}
                {product.details.fssai && (
                  <div className="text-[10px] text-[#E9E6DC]/40 pt-1 border-t border-[#292929]/50">
                    FSSAI LIC: {product.details.fssai}
                  </div>
                )}
              </div>

              {/* Variant Selector */}
              {product.variants.length > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white font-bold uppercase">{product.variantLabel}:</span>
                    <span className="text-[#C92127]">{selectedVariant?.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantId(v.id)}
                        disabled={!v.inStock}
                        className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider border transition-all ${
                          selectedVariantId === v.id
                            ? 'bg-[#E9E6DC] text-black border-[#E9E6DC] font-bold'
                            : 'bg-black text-[#E9E6DC]/80 border-[#292929] hover:border-[#E9E6DC]/50'
                        } ${!v.inStock ? 'opacity-40 line-through cursor-not-allowed' : ''}`}
                      >
                        {v.name} {v.priceModifier ? `(+₹${v.priceModifier})` : ''}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Picker */}
              <div className="flex items-center space-x-4 pt-2">
                <span className="text-xs font-mono text-white font-bold uppercase">QUANTITY:</span>
                <div className="flex items-center border border-[#292929] bg-black text-xs font-mono">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:text-[#C92127] px-3 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:text-[#C92127] px-3 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="font-mono text-xs text-[#E9E6DC]/70">
                  Total: ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#292929] space-y-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 px-6 font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : product.inStock
                    ? 'bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white'
                    : 'bg-[#1F1F1F] text-white/30 cursor-not-allowed'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG</span>
                  </>
                ) : product.inStock ? (
                  <span>ADD TO BAG (₹{totalPrice.toLocaleString('en-IN')})</span>
                ) : (
                  <span>OUT OF STOCK</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#E9E6DC]/50 uppercase">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>DIRECT FROM CALICUT ROASTERY • TEMPERATURE CONTROLLED</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
