import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'forest-grown-coldbrew-180',
    name: 'Forest Grown Hand Crafted Cold Brew',
    category: 'coffee',
    tagline: '18-Hour Slow Steeped • Terra Vagamon Blend',
    price: 280,
    originalPrice: 320,
    image: '/assets/snapgram.io_download-file-tu4i96v7.webp',
    secondaryImages: [
      '/assets/snapgram.io_download-file-b041j2ts.jpg',
      '/assets/snapgram.io_download-file-sd1sr5wx.webp',
    ],
    badge: 'SIGNATURE BREW',
    description: 'Slow-steeped for 18 hours using 100% pure high-elevation forest grown coffee and mountain spring water. Bottled in heavy amber glass hip-flask with black twist closure and authentic vintage apothecary label.',
    details: {
      origin: 'Terra Vagamon, Idukki, Kerala (1,100m MSL)',
      variety: 'Robusta - Excelsa Canopy Blend',
      brewTime: '18 Hours Slow Cold Steep',
      tastingNotes: ['Dark Cocoa', 'Toasted Sugarcane', 'Wild Honey', 'Nutmeg'],
      scaScore: '87+ Points',
      volume: '180 ml',
      fssai: '21325242000014'
    },
    variantLabel: 'Pack Size',
    variants: [
      { id: 'single', name: 'Single Flask (180ml)', inStock: true, priceModifier: 0 },
      { id: 'pack-3', name: 'Tri-Pack (3 × 180ml)', inStock: true, priceModifier: 520 },
      { id: 'pack-6', name: 'Weekly Case (6 × 180ml)', inStock: true, priceModifier: 1200 },
    ],
    inStock: true
  },
  {
    id: 'barrel-aged-36hrs',
    name: 'Barrel Aged Cold Brew "Controversial 36 Hours"',
    category: 'coffee',
    tagline: 'Seasoned Oak Barrel Aged • Rum & Raisin Infused',
    price: 360,
    originalPrice: 420,
    image: '/assets/snapgram.io_download-file-sd1sr5wx.webp',
    secondaryImages: [
      '/assets/snapgram.io_download-file-99ufn5au.webp',
      '/assets/snapgram.io_download-file-tu4i96v7.webp',
    ],
    badge: 'LIMITED ARCHIVE',
    description: 'Our beans gracefully and delicately aged in seasoned oak barrels over time, creating a truly unique cold brew experience. Infused with distinct notes of rum and raisin, crafted to evolve and extract rich, complex profiles.',
    details: {
      origin: 'Terra Vagamon & Calicut Barrel Cellar',
      variety: 'Barrel Conditioned High-Grown Excelsa',
      brewTime: '36 Hours Low-Temperature Extraction',
      tastingNotes: ['Aged Rum', 'Dark Raisin', 'Oak Tannins', 'Black Cherry'],
      scaScore: '88+ Points',
      volume: '180 ml',
      fssai: '21325242000014'
    },
    variantLabel: 'Edition',
    variants: [
      { id: 'single-flask', name: 'Aged Flask (180ml)', inStock: true, priceModifier: 0 },
      { id: 'reserve-duo', name: 'Cellar Reserve Duo (2 × 180ml)', inStock: true, priceModifier: 320 },
    ],
    inStock: true
  },
  {
    id: 'terra-vagamon-shotpack',
    name: 'Terra Vagamon Apothecary Shot Pack',
    category: 'coffee',
    tagline: '4 × 60ml Pocket Apothecary • Perforated Stamp Labels',
    price: 480,
    originalPrice: 550,
    image: '/assets/snapgram.io_download-file-b041j2ts.jpg',
    secondaryImages: [
      '/assets/snapgram.io_download-file-tu4i96v7.webp',
    ],
    badge: 'TASTING FLIGHT',
    description: 'Set of four 60ml travel-ready glass apothecary vials wrapped in custom postage-stamp perforated labels. Two varieties in one brew, engineered for concentrated on-the-go shots or chilled tonic pours.',
    details: {
      origin: 'Terra Vagamon Estate, Kerala',
      variety: 'Two Variety One Brew (Robusta & Excelsa)',
      brewTime: '24 Hours Immersion',
      tastingNotes: ['Raw Cane Molasses', 'Bittersweet Cocoa', 'Cedarwood'],
      scaScore: '87+ Points',
      volume: '4 × 60 ml (240ml Total)',
      fssai: '21325242000014'
    },
    variantLabel: 'Format',
    variants: [
      { id: 'pack-4', name: 'Box of 4 Vials (60ml each)', inStock: true, priceModifier: 0 },
      { id: 'pack-8', name: 'Collector Box of 8 (60ml each)', inStock: true, priceModifier: 420 },
    ],
    inStock: true
  },
  {
    id: 'champion-tee-white',
    name: 'Kaappitalism Boxy Heavyweight Tee — Chalk White',
    category: 'fashion',
    tagline: '280 GSM French Terry • Drop-Shoulder Relaxed Fit',
    price: 2490,
    image: '/assets/snapgram.io_download-file-it32j1in.webp',
    secondaryImages: [
      '/assets/snapgram.io_download-file-te5lpup6.webp',
      '/assets/community_celebration.jpg'
    ],
    badge: 'CHAMPION EDITION',
    description: 'Cut from heavyweight 280 GSM combed organic French Terry cotton. Features an architectural drop shoulder, high rib collar, and minimalist micro-embroidered KAAPPITALISM wordmark on the chest. The exact uniform worn by Fardhan Sabir at the Indian AeroPress Championship 2026.',
    details: {
      fabricWeight: '280 GSM Heavyweight French Terry',
      composition: '100% Combed Organic Cotton',
      fit: 'Relaxed Boxy Streetwear Silhouette',
      origin: 'Knitted & Crafted in India'
    },
    variantLabel: 'Size',
    variants: [
      { id: 's', name: 'Small', inStock: true },
      { id: 'm', name: 'Medium', inStock: true },
      { id: 'l', name: 'Large', inStock: true },
      { id: 'xl', name: 'X-Large', inStock: false },
    ],
    inStock: true
  },
  {
    id: 'tactical-utility-vest',
    name: 'Tactical Utility Zip Vest — Washed Charcoal',
    category: 'fashion',
    tagline: 'Modular Pockets • Industrial Matte Hardware',
    price: 4200,
    image: '/assets/snapgram.io_download-file-99ufn5au.webp',
    secondaryImages: [
      '/assets/snapgram.io_download-file-t4914qv7.jpg'
    ],
    badge: 'AVANT-GARDE',
    description: 'An aggressive industrial layer designed for the urban workspace. Features four angled bellows cargo pockets, reinforced bar-tack stitching, heavy two-way matte black zippers, and internal flask harness suited for our 180ml cold brew bottles.',
    details: {
      fabricWeight: '340 GSM Heavy Cotton Canvas',
      composition: '100% Canvas Twill with Pigment Wash',
      fit: 'Structured Boxy Layering Cut',
      origin: 'Hand-assembled in limited runs'
    },
    variantLabel: 'Size',
    variants: [
      { id: 'm', name: 'Medium (Chest 42")', inStock: true },
      { id: 'l', name: 'Large (Chest 45")', inStock: true },
    ],
    inStock: true
  },
  {
    id: 'asymmetric-cargo-trouser',
    name: 'Asymmetric Tailored Street Trouser — Midnight Black',
    category: 'fashion',
    tagline: 'Articulated Paneling • Chain Anchor D-Rings',
    price: 4800,
    image: '/assets/snapgram.io_download-file-99ufn5au.webp',
    secondaryImages: [
      '/assets/snapgram.io_download-file-it32j1in.webp'
    ],
    badge: 'NEW DROP',
    description: 'Engineered with deep front pleats, raw edge accents, heavy-gauge steel chain attachment rings, and ergonomic knee articulation. Built from dense matte cotton twill with an intentional slouch and adjustable ankle tabs.',
    details: {
      fabricWeight: '310 GSM Cotton Twill',
      composition: '98% Cotton, 2% Elastane for structured drape',
      fit: 'Wide Tapered with Low Drop Crotch',
      origin: 'Calicut Atelier Series'
    },
    variantLabel: 'Waist Size',
    variants: [
      { id: 'w30', name: '30 Waist', inStock: true },
      { id: 'w32', name: '32 Waist', inStock: true },
      { id: 'w34', name: '34 Waist', inStock: true },
      { id: 'w36', name: '36 Waist', inStock: false },
    ],
    inStock: true
  },
  {
    id: 'naadan-kaappi-tee-black',
    name: 'Naadan Kaappi Typographic Heavy Tee — Pitch Black',
    category: 'fashion',
    tagline: '280 GSM Cotton • Malayalam Cultural Typography',
    price: 2490,
    image: '/assets/snapgram.io_download-file-t4914qv7.jpg',
    secondaryImages: [
      '/assets/snapgram.io_download-file-te5lpup6.webp'
    ],
    badge: 'CULTURAL ICON',
    description: 'Deep pitch black heavy tee celebrating Kerala coffee heritage. Minimal chest branding with a monumental silkscreen typography on the back: "നാടൻ കാപ്പി സംസ്കാരം — WHERE NATIVE COFFEE CULTURE MEETS ARTISANAL REBELLION".',
    details: {
      fabricWeight: '280 GSM Heavy Combed Cotton',
      composition: '100% Pre-Shrunk Bio-Washed Cotton',
      fit: 'Oversized Boxy Cut',
      origin: 'Knitted & Hand-Printed in Kerala'
    },
    variantLabel: 'Size',
    variants: [
      { id: 's', name: 'Small', inStock: true },
      { id: 'm', name: 'Medium', inStock: true },
      { id: 'l', name: 'Large', inStock: true },
      { id: 'xl', name: 'X-Large', inStock: true },
    ],
    inStock: true
  },
  {
    id: 'artisanal-ceramic-mug',
    name: 'Kaappitalism Ceramic Tasting Mug — Lab Edition',
    category: 'gear',
    tagline: 'Hand-Thrown Stoneware • Stamped Branding & Red Decal',
    price: 950,
    originalPrice: 1100,
    image: '/assets/snapgram.io_download-file-azbnfyyj.jpg',
    secondaryImages: [
      '/assets/snapgram.io_download-file-t4914qv7.jpg'
    ],
    badge: 'HANDCRAFTED',
    description: 'Individually thrown stoneware ceramic mug with an ergonomic weighted base, comfortable two-finger grip, and matte reactive glaze. Finished with the Kaappitalism wordmark and our iconic red "ALL AGAINST..." brand insignia.',
    details: {
      volume: '300 ml capacity',
      composition: 'High-fire stoneware ceramic, food-grade reactive glaze',
      origin: 'Hand-thrown in South India'
    },
    variantLabel: 'Finish',
    variants: [
      { id: 'matte-black', name: 'Matte Charcoal & Red', inStock: true },
      { id: 'raw-bone', name: 'Raw Bone & Burgundy', inStock: true },
    ],
    inStock: true
  },
  {
    id: 'kaappitalism-aeropress-kit',
    name: 'Championship Inverted AeroPress Kit',
    category: 'gear',
    tagline: 'Custom Decal AeroPress • Metal Mesh Filter • 250g Beans',
    price: 3850,
    image: '/assets/still_02.jpg',
    secondaryImages: [
      '/assets/snapgram.io_download-file-t4914qv7.jpg',
      '/assets/still_04.jpg'
    ],
    badge: 'COMPETITION SPEC',
    description: 'The exact equipment kit used to secure the Calicut Regional Championship at the Indian AeroPress Championship 2026. Includes the AeroPress chamber with custom laser-etched Kaappitalism livery, stainless steel micro-filter disc, precision dosing funnel, and a freshly roasted 250g bag of Terra Vagamon whole beans.',
    details: {
      origin: 'Official AeroPress with Calicut Custom Tuning',
      volume: '1 to 3 cups extraction chamber',
      variety: 'Includes 250g Whole Bean Coffee Bag',
      tastingNotes: ['SCA 87+ Roast Profile', 'Optimized for Inverted Method']
    },
    variantLabel: 'Configuration',
    variants: [
      { id: 'standard', name: 'Standard Kit + 250g Beans', inStock: true, priceModifier: 0 },
      { id: 'pro', name: 'Pro Kit + Beans + Ceramic Mug', inStock: true, priceModifier: 750 },
    ],
    inStock: true
  }
];
