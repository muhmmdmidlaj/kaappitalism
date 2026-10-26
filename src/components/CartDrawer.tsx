import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CartDrawerProps {
  onProceedCheckout: () => void;
  onExploreProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  onProceedCheckout,
  onExploreProducts,
}) => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    discountCode,
    applyCoupon,
    removeCoupon,
    shipping,
    total,
    itemCount,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyCoupon(inputCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError(null);
      setInputCode('');
    }
  };

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0D0D] border-l border-[#292929] flex flex-col justify-between shadow-2xl relative z-10 text-[#E9E6DC]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#292929] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase">
                YOUR BAG
              </span>
              <span className="bg-[#1F1F1F] text-[#E9E6DC] text-xs font-mono px-2 py-0.5 border border-[#292929]">
                {itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#141414] px-6 py-3 border-b border-[#292929] text-[11px] font-mono">
            {subtotal >= freeShippingThreshold || discountCode === 'FREESHIP' ? (
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>FREE STANDARD DELIVERY UNLOCKED</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#E9E6DC]/70">
                  <span>ADD ₹{freeShippingThreshold - subtotal} MORE FOR FREE SHIPPING</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#292929] h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C92127] h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full border border-[#292929] flex items-center justify-center text-[#E9E6DC]/30">
                  <Tag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-xl font-bold text-white">YOUR BAG IS EMPTY</p>
                  <p className="text-xs font-mono text-[#E9E6DC]/50 max-w-xs">
                    Explore our cold brew bottles, competition brew gear, and alternative streetwear drops.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    onExploreProducts();
                  }}
                  className="bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-colors px-6 py-3 font-mono text-xs uppercase font-bold tracking-widest mt-2"
                >
                  START EXPLORING
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141414] border border-[#292929] p-3 sm:p-4 flex gap-4 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover bg-black border border-[#292929] shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h5 className="font-serif text-sm font-bold text-white truncate">
                      {item.name}
                    </h5>
                    <div className="text-[10px] font-mono text-[#E9E6DC]/60 uppercase">
                      Variant: <span className="text-[#C92127] font-bold">{item.variant}</span>
                    </div>
                    <div className="font-mono text-xs text-[#E9E6DC] font-bold">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 pt-1">
                      <div className="flex items-center border border-[#292929] bg-black text-xs font-mono">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:text-[#C92127] px-2 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:text-[#C92127] px-2 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#E9E6DC]/40 hover:text-[#C92127] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Calculation */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#292929] bg-[#111111] space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="PROMO CODE (e.g. CULTURE10)"
                    className="flex-1 bg-black border border-[#292929] px-3 py-2 text-xs font-mono text-white placeholder-white/30 uppercase focus:outline-none focus:border-[#C92127]"
                  />
                  <button
                    type="submit"
                    className="bg-[#292929] hover:bg-[#C92127] text-white px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {couponError && (
                  <p className="text-[10px] font-mono text-[#C92127]">{couponError}</p>
                )}
                {discountCode && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-1">
                    <span>CODE APPLIED: {discountCode}</span>
                    <button onClick={removeCoupon} className="hover:underline text-white/70">REMOVE</button>
                  </div>
                )}
              </form>

              {/* Price Calculation breakdown */}
              <div className="space-y-1.5 text-xs font-mono border-t border-[#292929] pt-3 text-[#E9E6DC]/75">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>DISCOUNT</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>SHIPPING</span>
                  <span className="text-white">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white border-t border-[#292929] pt-2">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-[#C92127]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  closeCart();
                  onProceedCheckout();
                }}
                className="w-full bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 shadow-xl"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] font-mono text-[#E9E6DC]/40 uppercase tracking-wider">
                SECURE 256-BIT ENCRYPTION • RAZORPAY COMPLIANT
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
