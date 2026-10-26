export type Category = 'all' | 'coffee' | 'fashion' | 'gear';

export interface ProductVariant {
  id: string;
  name: string;
  inStock: boolean;
  priceModifier?: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'coffee' | 'fashion' | 'gear';
  tagline: string;
  price: number; // in INR
  originalPrice?: number;
  image: string;
  secondaryImages?: string[];
  badge?: string;
  description: string;
  details: {
    origin?: string;
    variety?: string;
    brewTime?: string;
    tastingNotes?: string[];
    scaScore?: string;
    volume?: string;
    fabricWeight?: string;
    composition?: string;
    fit?: string;
    fssai?: string;
  };
  variants: ProductVariant[];
  variantLabel: string; // e.g. "Size" or "Bottle Size" or "Volume"
  inStock: boolean;
}

export interface CartItem {
  id: string; // product.id + '-' + variant.id
  productId: string;
  name: string;
  price: number;
  image: string;
  variant: string;
  quantity: number;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  content: string[];
  quote?: string;
}

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: string;
  date: string;
}
