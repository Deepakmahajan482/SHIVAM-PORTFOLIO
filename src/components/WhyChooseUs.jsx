import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cpu, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: "iphone-expertise",
      title: "iPhone Repair Expertise",
      subtitle: "Specialized Engineering",
      description: "Dedicated focus on Apple iPhone architecture, TrueTone calibration, Face ID non-invasive preservation, and micro-soldering precision.",
      icon: Smartphone,
      accent: "01",
      color: "#8DB9F0",
      badges: ["Curated Components", "TrueTone Calibration", "Board Diagnostics"]
    },
    {
      id: "professional-approach",
      title: "Professional Repair Approach",
      subtitle: "Transparent Testing",
      description: "Every smartphone undergoes systematic pre-inspection, ESD-safe workbench handling, thermal imaging short-circuit tracing, and multi-point post-repair verification.",
      icon: Cpu,
      accent: "02",
      color: "#F5B69E",
      badges: ["ESD-Safe Station", "Stereomicroscope Inspection", "Clean Assembly"]
    },
    {
      id: "quality-accessories",
      title: "Quality Mobile Accessories",
      subtitle: "Handpicked Tech",
      description: "Selected phone covers, 9H tempered glass, GaN rapid chargers, and audio gear tested for durability, tactile feel, and real-world device protection.",
      icon: Sparkles,
      accent: "03",
      color: "#8DB9F0",
      badges: ["Drop-Tested Cases", "9H Privacy Glass", "GaN Power Protocol"]
    },
    {
      id: "customer-service",
      title: "Customer-Focused Service",
      subtitle: "Direct Communication",
      description: "Clear explanations of hardware issues, no hidden terms, direct WhatsApp support, and honest diagnostic assessments tailored to your device.",
      icon: HeartHandshake,
      accent: "04",
      color: "#F5B69E",
      badges: ["Direct WhatsApp Updates", "Pre-Repair Quotes", "Careful Handling"]
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot-blue pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] glow-spot-peach pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8DB9F0]" />
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#5C6079] font-bold">
              The Shivam Standard
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-2.5">
            <span className="font-display font-extrabold uppercase">Why FIX BY</span>{" "}
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0]">
              SHIVAM?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] max-w-2xl mx-auto">
            Engineered with a commitment to device safety, meticulous hardware workmanship, and reliable technology solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isPeach = card.color === "#F5B69E";
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/95 rounded-[28px] p-6 sm:p-7 border border-[#8DB9F0]/30 hover:border-[#8DB9F0] transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover"
              >
                {/* Top Subtle Metallic Edge */}
                <div 
                  className="absolute top-0 inset-x-10 h-[2px] transition-all"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`
                  }}
                />

                <div>
                  {/* Top Bar with Icon & Accent Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className={`w-11 h-11 p-2.5 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                        isPeach 
                          ? 'bg-[#F5B69E]/20 border-[#F5B69E]/40 text-[#F5B69E] group-hover:bg-[#F5B69E]/30' 
                          : 'bg-[#8DB9F0]/20 border-[#8DB9F0]/40 text-[#8DB9F0] group-hover:bg-[#8DB9F0]/30'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span 
                      className="font-mono text-2xl font-extrabold transition-colors"
                      style={{ color: card.color, opacity: 0.5 }}
                    >
                      {card.accent}
                    </span>
                  </div>

                  {/* Subtitle & Title */}
                  <span 
                    className="text-[11px] font-mono uppercase tracking-luxury block mb-1 font-bold"
                    style={{ color: card.color }}
                  >
                    {card.subtitle}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1B1E2E] mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-3.5 border-t border-[#8DB9F0]/20 flex flex-wrap gap-1.5">
                  {card.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#1B1E2E] bg-[#E9E8F8] border border-[#8DB9F0]/25 px-2.5 py-1 rounded-full font-mono font-semibold"
                    >
                      <CheckCircle2 
                        className="w-3 h-3" 
                        style={{ color: card.color }}
                      />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
