import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowUpRight, Cpu, Sparkles } from 'lucide-react';

export function About({ onExploreAccessories }) {
  const features = [
    {
      id: "iphone-expertise",
      title: "iPhone Expertise",
      tagline: "Specialized Hardware Care",
      description: "Dedicated diagnostics and precision component servicing crafted specifically for Apple iPhone models. From OLED TrueTone matching to clean glass restorations.",
      icon: Smartphone,
      accentColor: "#8DB9F0",
      cta: "Learn More",
      action: () => {
        const el = document.querySelector('#iphone-specialist');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      stats: "Specialist Standards"
    },
    {
      id: "repair-solutions",
      title: "Professional Repair Solutions",
      tagline: "Chip-Level & Component Fixes",
      description: "Comprehensive multi-brand support covering motherboard trace repairs, charging port restorations, battery replacements, and camera lens renewals.",
      icon: Cpu,
      accentColor: "#F5B69E",
      cta: "View Services",
      action: () => {
        const el = document.querySelector('#services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      stats: "Advanced Lab Tools"
    },
    {
      id: "mobile-accessories",
      title: "Premium Mobile Accessories",
      tagline: "Everyday Tech Enhancements",
      description: "Carefully curated collection of shockproof titanium cases, 9H privacy tempered glass, high-speed GaN chargers, and studio acoustic earphones.",
      icon: Sparkles,
      accentColor: "#8DB9F0",
      cta: "Explore Catalog",
      action: onExploreAccessories,
      stats: "Curated Selection"
    }
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8DB9F0]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F5B69E]/20 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B69E]"></span>
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#5C6079] font-bold">
              About Fix By Shivam
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-3"
          >
            <span className="font-display font-extrabold block">More Than Just</span>
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0] block -mt-1">
              Mobile Repair.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#5C6079] leading-relaxed max-w-2xl mx-auto"
          >
            Your smartphone is part of your everyday life. At <strong className="text-[#1B1E2E]">FIX BY SHIVAM</strong>, 
            we focus on professional repair solutions and smartphone accessories to help keep your device working 
            and looking its best.
          </motion.p>
        </div>

        {/* 3 Smartphone-Inspired Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            const isPeach = feat.accentColor === "#F5B69E";
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-7 border border-[#8DB9F0]/30 hover:border-[#8DB9F0] transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover"
              >
                {/* Top Subtle Metallic Edge */}
                <div 
                  className="absolute top-0 inset-x-8 h-[2px] transition-all"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feat.accentColor}, transparent)`
                  }}
                />

                <div>
                  {/* Top Bar with Icon & Stat */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                        isPeach 
                          ? 'bg-[#F5B69E]/20 border-[#F5B69E]/40 text-[#F5B69E] group-hover:bg-[#F5B69E]/30' 
                          : 'bg-[#8DB9F0]/20 border-[#8DB9F0]/40 text-[#8DB9F0] group-hover:bg-[#8DB9F0]/30'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5C6079] bg-[#E9E8F8] border border-[#8DB9F0]/20 px-2.5 py-1 rounded-full font-bold">
                      {feat.stats}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span 
                    className="text-[11px] font-mono uppercase tracking-luxury block mb-1 font-bold"
                    style={{ color: feat.accentColor }}
                  >
                    {feat.tagline}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1B1E2E] mb-2.5 transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed mb-5">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Interactive CTA Button */}
                <div className="pt-3.5 border-t border-[#8DB9F0]/20 flex items-center justify-between">
                  <button
                    onClick={feat.action}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B1E2E] group-hover:text-[#8DB9F0] transition-colors"
                  >
                    <span>{feat.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span 
                    className="w-2 h-2 rounded-full transition-colors"
                    style={{ backgroundColor: feat.accentColor }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;
