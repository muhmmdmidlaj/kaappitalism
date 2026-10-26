import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { ARTICLES } from './data/articles';
import { Product, Article } from './types';
import { useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandFilmSection } from './components/BrandFilmSection';
import { CategorySplit } from './components/CategorySplit';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ManifestoSection } from './components/ManifestoSection';
import { PhysicalStoreSection } from './components/PhysicalStoreSection';
import { JournalSection } from './components/JournalSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { StoreDirectionsModal } from './components/StoreDirectionsModal';
import { PolicyModal } from './components/PolicyModal';
import { Check } from 'lucide-react';

export const App: React.FC = () => {
  const { toastMessage } = useCart();

  // Navigation & Category states
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'shipping' | 'privacy' | 'terms' | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'shop') {
      setActiveCategory('all');
      const el = document.getElementById('shop');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'fashion') {
      setActiveCategory('fashion');
      const el = document.getElementById('shop');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'coffee') {
      setActiveCategory('coffee');
      const el = document.getElementById('shop');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSplitCategorySelect = (category: 'fashion' | 'coffee') => {
    setActiveCategory(category);
    const el = document.getElementById('shop');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E9E6DC] flex flex-col font-sans selection:bg-[#C92127] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141414] border border-[#C92127] text-white px-4 py-3 shadow-2xl flex items-center space-x-3 text-xs font-mono animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#C92127] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header Bar */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Monumental Hero Section */}
        <Hero
          onExploreDrop={() => scrollToSection('shop')}
          onExploreCulture={() => scrollToSection('manifesto')}
        />

        {/* 2. Cinematic 98-second Black-and-White Coffee Film */}
        <BrandFilmSection />

        {/* 3. Category Split Editorial: Fashion vs. Coffee */}
        <CategorySplit
          onSelectCategory={handleSplitCategorySelect}
        />

        {/* 4. Complete Featured Products Catalogue */}
        <FeaturedProducts
          products={PRODUCTS}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onQuickView={(prod) => setSelectedProduct(prod)}
        />

        {/* 5. Brand Manifesto: "Not Just What You Wear..." */}
        <ManifestoSection />

        {/* 6. Physical Calicut Flagship & Lab Space */}
        <PhysicalStoreSection
          onOpenDirections={() => setIsDirectionsOpen(true)}
        />

        {/* 7. The Culture / Journal Essays & Competition Dispatches */}
        <JournalSection
          articles={ARTICLES}
          onReadArticle={(art) => setSelectedArticle(art)}
        />

        {/* 8. Cultural Newsletter & Private Batch Alerts */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenPolicy={(type) => setActivePolicy(type)}
        onOpenDirections={() => setIsDirectionsOpen(true)}
      />

      {/* Modals & Drawers */}
      <CartDrawer
        onProceedCheckout={() => setIsCheckoutOpen(true)}
        onExploreProducts={() => scrollToSection('shop')}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        articles={ARTICLES}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <StoreDirectionsModal
        isOpen={isDirectionsOpen}
        onClose={() => setIsDirectionsOpen(false)}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

    </div>
  );
};
