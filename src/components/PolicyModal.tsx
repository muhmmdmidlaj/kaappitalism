import React from 'react';
import { X, ShieldCheck, Truck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'shipping' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    shipping: {
      title: 'SHIPPING & RETURNS POLICY',
      icon: <Truck className="w-5 h-5 text-[#C92127]" />,
      sections: [
        {
          heading: 'COFFEE DISPATCH & COLD-CHAIN INTEGRITY',
          body: 'All cold brew bottles are prepared fresh in sterile glass flasks at our Calicut facility and packaged in thermal insulated sleeves with non-toxic gel refrigerant packs. Cold brew orders placed before 2:00 PM IST Monday through Thursday are dispatched same day to prevent weekend courier transit holds.'
        },
        {
          heading: 'SHIPPING RATES & TIMELINES',
          body: 'Orders over ₹999 qualify for Free Standard Nationwide Courier. For orders under ₹999, a flat shipping fee of ₹99 applies. Express Cold-Chain air delivery (24-48 hours) is available at checkout for an additional ₹120. Standard deliveries take 3 to 5 business days depending on location.'
        },
        {
          heading: 'FASHION & APPAREL RETURNS',
          body: 'Streetwear items (tees, vests, trousers) may be returned or exchanged within 7 days of delivery provided garments are unwashed, unworn, and retain all original KAAPPITALISM tags and packaging. Return shipping pickups are arranged free of charge for defective or incorrectly sized apparel.'
        },
        {
          heading: 'PERISHABLE COLD BREW POLICY',
          body: 'Due to temperature-sensitive brewing standards, cold brew bottles cannot be returned once delivered. If your glass bottle arrives broken or damaged during transit, take a photograph within 12 hours of delivery and contact concierge@kaappitalism.in for an immediate free reshipment or full refund.'
        }
      ]
    },
    privacy: {
      title: 'PRIVACY & DATA POLICY',
      icon: <ShieldCheck className="w-5 h-5 text-[#C92127]" />,
      sections: [
        {
          heading: 'REBEL PRIVACY PROTOCOL',
          body: 'KAAPPITALISM respects intellectual autonomy and customer privacy. We do not sell, rent, or trade your personal data to ad brokers, tracking networks, or third-party behavioral analytics firms. Your email and phone are used strictly for order logistics, delivery status updates, and opt-in batch dispatches.'
        },
        {
          heading: 'PAYMENT DATA SECURITY',
          body: 'All digital payments are processed through RBI-approved Indian payment aggregators (such as Razorpay). KAAPPITALISM servers never store your credit/debit card CVV, net-banking passwords, or UPI PINs. Transactions are encrypted with TLS 1.3 256-bit protocols.'
        },
        {
          heading: 'LOCAL STORAGE USAGE',
          body: 'We utilize standard client-side browser storage (localStorage) exclusively to persist your shopping bag items and preferred regional delivery address between visits. No tracking cookies follow you across external websites.'
        }
      ]
    },
    terms: {
      title: 'TERMS & CONDITIONS',
      icon: <FileText className="w-5 h-5 text-[#C92127]" />,
      sections: [
        {
          heading: 'BRAND IDENTITY & INTELLECTUAL PROPERTY',
          body: 'The wordmark KAAPPITALISM™, the Malayalam mark "നാടൻ കാപ്പി സംസ്കാരം", garment patterns, bottle label typography, photographic assets, and brand films are the exclusive intellectual property of Kaappitalism Atelier & Roastery (Calicut, Kerala). Unauthorized commercial reproduction is strictly prohibited.'
        },
        {
          heading: 'PRODUCT SPECIFICATIONS & VOLUMES',
          body: 'Our cold brew is hand-steeped in small seasonal micro-batches. While we maintain rigorous SCA 87+ cupping standards and FSSAI license compliance (Lic. No. 21325242000014), slight batch-to-batch flavor nuances occur naturally due to seasonal rainfall and harvest variations at Terra Vagamon.'
        },
        {
          heading: 'JURISDICTION',
          body: 'Any claims or disputes arising from transactions conducted on this website shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Kozhikode (Calicut), Kerala.'
        }
      ]
    }
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative bg-[#0F0F0F] border border-[#292929] w-full max-w-2xl text-[#E9E6DC] shadow-2xl my-auto overflow-hidden">
        
        {/* Header */}
        <div className="border-b border-[#292929] px-6 py-4 flex justify-between items-center bg-[#141414]">
          <div className="flex items-center space-x-2 text-xs font-mono">
            {current.icon}
            <span className="text-white font-bold uppercase tracking-wider">{current.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-[#292929]/50 pb-4 last:border-b-0">
              <h4 className="font-mono text-xs font-bold text-[#C92127] uppercase tracking-wider">
                {sec.heading}
              </h4>
              <p className="text-xs sm:text-sm text-[#E9E6DC]/80 font-sans leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="bg-[#1C1C1C] hover:bg-[#C92127] text-white border border-[#292929] px-6 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors"
            >
              ACKNOWLEDGE & CLOSE
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
