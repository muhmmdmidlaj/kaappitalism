import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variantId?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  discount: number;
  discountCode: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  shipping: number;
  total: number;
  itemCount: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'kaappitalism_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountRate, setDiscountRate] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product: Product, variantId?: string, quantity: number = 1) => {
    const activeVariant = product.variants.find(v => v.id === variantId) || product.variants[0];
    const unitPrice = product.price + (activeVariant?.priceModifier || 0);
    const cartItemId = `${product.id}-${activeVariant?.id || 'default'}`;

    setItems(prevItems => {
      const existing = prevItems.find(item => item.id === cartItemId);
      if (existing) {
        return prevItems.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            price: unitPrice,
            image: product.image,
            variant: activeVariant ? activeVariant.name : 'Standard',
            quantity,
            category: product.category
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Item removed from cart.');
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems(prev => {
      return prev
        .map(item => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode(null);
    setDiscountRate(0);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'CULTURE10') {
      setDiscountCode('CULTURE10');
      setDiscountRate(0.10);
      showToast('10% Cultural Rebel discount applied.');
      return { success: true, message: '10% discount applied!' };
    } else if (clean === 'CALICUT' || clean === 'MALABAR') {
      setDiscountCode('CALICUT');
      setDiscountRate(0.15);
      showToast('15% Regional Heritage discount applied.');
      return { success: true, message: '15% regional discount applied!' };
    } else if (clean === 'FREESHIP') {
      setDiscountCode('FREESHIP');
      setDiscountRate(0);
      showToast('Free Express Shipping code applied.');
      return { success: true, message: 'Free Shipping unlocked!' };
    }
    return { success: false, message: 'Invalid or expired code. Try "CULTURE10" or "CALICUT"' };
  };

  const removeCoupon = () => {
    setDiscountCode(null);
    setDiscountRate(0);
    showToast('Promo code removed.');
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * discountRate);
  const shipping = subtotal >= 999 || discountCode === 'FREESHIP' || subtotal === 0 ? 0 : 99;
  const total = Math.max(0, subtotal - discount + shipping);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        subtotal,
        discount,
        discountCode,
        applyCoupon,
        removeCoupon,
        shipping,
        total,
        itemCount,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
