import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-[#E9E8F8] relative">
      {/* Background glow in Powdered Blue & Sunset Peach */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8DB9F0]/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5B69E]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <Camera className="w-3.5 h-3.5 text-[#8DB9F0]" />
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#5C6079] font-bold">
              Workstation & Studio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-2.5">
            <span className="font-display font-extrabold uppercase">Inside The</span>{" "}
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0]">
              Repair Studio.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] max-w-2xl mx-auto">
            A glimpse into our precision micro-soldering bench, screen separation tools, and quality accessory stock.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] shadow-glow-blue'
                    : 'bg-white/80 text-[#5C6079] hover:text-[#1B1E2E] border border-[#8DB9F0]/30 hover:border-[#8DB9F0] shadow-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-[22px] overflow-hidden bg-white border border-[#8DB9F0]/30 hover:border-[#8DB9F0] cursor-pointer shadow-card-soft hover:shadow-card-hover"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for photo captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-2.5 left-2.5 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[#F5B69E] border border-[#F5B69E]/40 font-bold shadow-sm">
                  {item.categoryLabel}
                </span>

                {/* Expand Icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" />
                </div>

                {/* Caption / Description at Bottom */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <h3 className="font-display text-xs sm:text-sm font-bold text-white transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-white/85 line-clamp-1 mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Image Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-[28px] overflow-hidden border border-white/20 shadow-2xl flex flex-col"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 bg-white border-t border-[#8DB9F0]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#F5B69E] uppercase tracking-wider block mb-0.5 font-bold">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#1B1E2E]">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6079] mt-0.5 max-w-xl">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              </div>

              <span className="text-xs font-mono text-[#5C6079] bg-[#E9E8F8] border border-[#8DB9F0]/30 px-3 py-1 rounded-full shrink-0 font-bold">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
