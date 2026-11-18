import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  ShoppingBag
} from 'lucide-react';
import { ACCESSORY_CATEGORIES, ACCESSORIES_ITEMS } from '../data/accessories';
import { getWhatsAppLink } from '../data/config';

export default function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = ACCESSORIES_ITEMS.filter(item => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="accessories" className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden overflow-x-clip max-w-full">
      {/* Background glow accents in Powdered Blue & Sunset Peach */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#8DB9F0]/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#F5B69E]/20 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B69E]" />
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#5C6079] font-bold">
              Curated Accessories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-2.5">
            <span className="font-display font-extrabold uppercase">Upgrade Your</span>{" "}
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0]">
              Everyday Tech.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] max-w-2xl mx-auto">
            Discover accessories that complement your smartphone with premium materials and dependable performance.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {ACCESSORY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] shadow-glow-blue'
                    : 'bg-white/80 text-[#5C6079] hover:text-[#1B1E2E] border border-[#8DB9F0]/30 hover:border-[#8DB9F0] shadow-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group bg-white/95 rounded-[24px] border border-[#8DB9F0]/30 hover:border-[#8DB9F0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 shadow-card-soft"
              >
                {/* Product Image with Hover Zoom */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#E9E8F8]/60 p-5 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-108 transition-transform duration-500 shadow-sm"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#1B1E2E] border border-[#8DB9F0]/30 font-bold shadow-subtle">
                    {item.categoryLabel}
                  </span>

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F5B69E]/25 text-[#1B1E2E] border border-[#F5B69E]/50 font-bold shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#1B1E2E] mb-1.5 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5C6079] leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1 mb-4">
                      {item.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-[#1B1E2E]">
                          <Check className="w-3 h-3 text-[#F5B69E] shrink-0 font-bold" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="pt-3 border-t border-[#8DB9F0]/20">
                    <a
                      href={getWhatsAppLink(`Hello FIX BY SHIVAM, I want to enquire about ${item.name} (${item.categoryLabel}). Is it available for my device model?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-full font-display font-bold text-xs text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1B1E2E]" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Catalog Callout */}
        <div className="mt-8 p-5 sm:p-6 rounded-[24px] bg-white/90 border border-[#8DB9F0]/30 shadow-card-soft flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0] shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-sm sm:text-base font-bold text-[#1B1E2E] mb-0.5">
                Looking for a Specific Model or Custom Accessory?
              </h4>
              <p className="text-xs text-[#5C6079]">
                Share your device brand and model on WhatsApp to check available cases, glass, and charging adapters.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Hello FIX BY SHIVAM, I am looking for smartphone accessories for my device model.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all shrink-0 flex items-center justify-center gap-1.5"
          >
            <span>Ask for Your Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
