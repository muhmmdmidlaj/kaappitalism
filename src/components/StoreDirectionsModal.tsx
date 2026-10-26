import React from 'react';
import { X, MapPin, Clock, Phone, Navigation, Train, Plane, Compass } from 'lucide-react';

interface StoreDirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreDirectionsModal: React.FC<StoreDirectionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative bg-[#0F0F0F] border border-[#292929] w-full max-w-2xl text-[#E9E6DC] shadow-2xl my-auto overflow-hidden">
        
        {/* Header */}
        <div className="border-b border-[#292929] px-6 py-4 flex justify-between items-center bg-[#141414]">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-[#C92127] font-bold">CALICUT LAB VISIT GUIDE</span>
            <span>//</span>
            <span className="uppercase text-white/70">MALABAR COAST • 11.2588° N</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#C92127] uppercase tracking-widest">
              NATIVE COFFEE CULTURE • PHYSICAL SPACE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              KAAPPITALISM FLAGSHIP & ROASTERY
            </h3>
            <p className="font-mono text-xs text-[#E9E6DC]/70">
              PT Usha Road, Kozhikode (Calicut), Kerala 673032
            </p>
          </div>

          {/* Quick details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#141414] border border-[#292929] p-4 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Clock className="w-4 h-4 text-[#C92127]" />
                <span>DAILY HOURS</span>
              </div>
              <p className="text-[#E9E6DC]/70">10:00 AM – 11:30 PM (Mon - Sun)</p>
              <p className="text-[10px] text-white/40">Late night manual brew till midnight on weekends.</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <Phone className="w-4 h-4 text-[#C92127]" />
                <span>LAB CONCIERGE</span>
              </div>
              <p className="text-[#E9E6DC]/70">+91 94960 00000</p>
              <p className="text-[10px] text-white/40">Available during store opening hours.</p>
            </div>
          </div>

          {/* Transit & Landmarks */}
          <div className="space-y-3 text-xs font-mono text-[#E9E6DC]/80">
            <p className="text-white font-bold uppercase tracking-wider text-[11px]">
              HOW TO REACH US
            </p>

            <div className="flex items-start space-x-3 p-3 bg-[#121212] border border-[#292929]">
              <Compass className="w-4 h-4 text-[#C92127] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold">LANDMARK</p>
                <p className="text-[11px] text-[#E9E6DC]/70">
                  Located off PT Usha Road, a two-minute walk from the historic Calicut Beach promenade and Corporation Stadium.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-[#121212] border border-[#292929]">
              <Train className="w-4 h-4 text-[#C92127] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold">BY TRAIN</p>
                <p className="text-[11px] text-[#E9E6DC]/70">
                  Kozhikode Main Railway Station (CLT) is approximately 1.5 km (5 minutes by auto-rickshaw or taxi).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-[#121212] border border-[#292929]">
              <Plane className="w-4 h-4 text-[#C92127] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold">BY AIR</p>
                <p className="text-[11px] text-[#E9E6DC]/70">
                  Calicut International Airport (CCJ) is 28 km away (approx. 45-50 minutes drive via NH 66).
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/?q=Calicut+Kerala+PT+Usha+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>OPEN GOOGLE MAPS NAVIGATION</span>
            </a>

            <button
              onClick={onClose}
              className="bg-[#1C1C1C] hover:bg-[#292929] text-white border border-[#292929] py-3.5 px-6 font-mono text-xs uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
