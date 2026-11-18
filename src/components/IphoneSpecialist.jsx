import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Cpu,
  Battery,
  Zap,
  Camera,
  Check,
  ArrowRight,
  Info
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';
import { IMAGES } from '../data/images';

export default function IphoneSpecialist() {
  const [activeTab, setActiveTab] = useState("display");

  const highlights = [
    {
      id: "display",
      title: "iPhone Display Repair",
      icon: Smartphone,
      accent: "#8DB9F0",
      points: [
        "OLED & Super Retina XDR precision installations",
        "TrueTone programming & ambient sensor transfer",
        "120Hz ProMotion fluid response check",
        "Oleophobic fingerprint-resistant glass coating"
      ],
      detail: "Restoring edge-to-edge brilliant color accuracy, deep blacks, and instant touch responsiveness."
    },
    {
      id: "battery",
      title: "Battery Replacement",
      icon: Battery,
      accent: "#F5B69E",
      points: [
        "Premium high-capacity lithium-ion replacement cells",
        "Elimination of unexpected throttling and random shutdowns",
        "Cold & hot thermal cycle testing",
        "Clean adhesive pull-tab factory-style placement"
      ],
      detail: "Eliminating battery degradation so your iPhone lasts throughout your demanding day."
    },
    {
      id: "charging",
      title: "Charging & Lightning / Type-C Issues",
      icon: Zap,
      accent: "#8DB9F0",
      points: [
        "Micro-inspection of corroded or collapsed connector pins",
        "Tristar / Hydra charging IC logic board repair",
        "MagSafe wireless coil alignment and thermal paste application",
        "Quick fast-charge protocol verification"
      ],
      detail: "Reliable power restoration whether your device uses Lightning or USB-C interfaces."
    },
    {
      id: "camera",
      title: "Camera & Speaker Repair",
      icon: Camera,
      accent: "#F5B69E",
      points: [
        "Micro-polishing and sapphire rear lens glass restoration",
        "Optical Image Stabilization (OIS) jitter correction",
        "TrueDepth & Face ID non-invasive preservation",
        "Ear speaker mesh acoustic ultrasonic de-clogging"
      ],
      detail: "Crystal-clear photography and studio-grade stereo sound reproduction."
    },
    {
      id: "logicboard",
      title: "Advanced Hardware Troubleshooting",
      icon: Cpu,
      accent: "#8DB9F0",
      points: [
        "Stereomicroscope diagnostics for short circuits",
        "NAND storage and BGA power management IC fixes",
        "Liquid / water damage corrosion treatment",
        "Baseband 'No Service' / 'Searching' signal troubleshooting"
      ],
      detail: "Deep component-level micro-soldering solutions for complex non-powering iPhones."
    }
  ];

  return (
    <section id="iphone-specialist" className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] glow-spot-blue pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 glow-spot-peach pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#8DB9F0]" />
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#8DB9F0] font-bold">
              Dedicated iPhone Lab
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-2.5">
            <span className="font-display font-extrabold block">Your iPhone Deserves</span>
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0] block -mt-1">
              Expert Care.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] leading-relaxed">
            Focused smartphone repair solutions designed to help restore your device's
            performance and functionality with microscope-level precision.
          </p>
        </div>

        {/* Main Grid: Interactive Feature Tabs + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column: Interactive Feature Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            {highlights.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isPeach = item.accent === "#F5B69E";
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 ${isActive
                    ? 'bg-white border-[#8DB9F0] shadow-card-soft ring-2 ring-[#8DB9F0]/40'
                    : 'bg-white/80 border-[#8DB9F0]/30 hover:border-[#8DB9F0] hover:bg-white'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors border ${isActive
                        ? 'bg-[#8DB9F0] text-[#1B1E2E] border-[#8DB9F0]'
                        : isPeach
                          ? 'bg-[#F5B69E]/20 text-[#F5B69E] border-[#F5B69E]/40'
                          : 'bg-[#8DB9F0]/20 text-[#8DB9F0] border-[#8DB9F0]/40'
                        }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold text-[#1B1E2E]">
                        {item.title}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#8DB9F0]' : 'text-[#888CA3]'}`}>
                      {isActive ? 'Active' : 'View'}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-2.5 pt-2.5 border-t border-[#8DB9F0]/20"
                    >
                      <p className="text-xs text-[#5C6079] mb-2.5">
                        {item.detail}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {item.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#F5B69E] shrink-0 mt-0.5" />
                            <span className="text-[11px] text-[#1B1E2E] font-medium">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Independent Specialist Transparency Note */}
            <div className="mt-2 p-3.5 rounded-2xl bg-white/80 border border-[#8DB9F0]/30 shadow-subtle flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#8DB9F0] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#5C6079] leading-relaxed">
                <strong className="text-[#1B1E2E]">Notice:</strong> FIX BY SHIVAM is an independent professional mobile repair and accessories provider.
                We use premium compatible and OEM-grade parts. All registered trademarks belong to their respective owners.
              </p>
            </div>
          </div>

          {/* Right Column: Visual iPhone Mockup & Tech Photography */}
          <div className="lg:col-span-6 relative">

            {/* Background Studio Frame */}
            <div className="relative rounded-[32px] overflow-hidden bg-white/95 border border-[#8DB9F0]/35 p-5 sm:p-6 shadow-card-soft">

              {/* Inner Photographic Collage */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 border border-[#8DB9F0]/30 group shadow-sm">
                <img
                  src={IMAGES.iphoneSpecialist}
                  alt="Precision iPhone Repair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Floating telemetry on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-black/90 px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#F5B69E] animate-pulse"></span>
                    <span className="text-[11px] font-mono font-medium text-white">
                      Microscope Bench Active
                    </span>
                  </div>

                  <span className="text-[10px] font-mono bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                    FIX BY SHIVAM
                  </span>
                </div>
              </div>

              {/* Technical Benchmarks Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                <div className="p-2.5 rounded-xl bg-[#E9E8F8] border border-[#8DB9F0]/25">
                  <span className="block text-[11px] font-mono text-[#5C6079] mb-0.5">TrueTone</span>
                  <span className="block text-xs sm:text-sm font-bold text-[#1B1E2E] font-display">Calibrated</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#E9E8F8] border border-[#8DB9F0]/25">
                  <span className="block text-[11px] font-mono text-[#5C6079] mb-0.5">Face ID</span>
                  <span className="block text-xs sm:text-sm font-bold text-[#1B1E2E] font-display">Preserved</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#E9E8F8] border border-[#8DB9F0]/25">
                  <span className="block text-[11px] font-mono text-[#5C6079] mb-0.5">BGA Soldering</span>
                  <span className="block text-xs sm:text-sm font-bold text-[#F5B69E] font-display">Micron Precision</span>
                </div>
              </div>

              {/* Direct WhatsApp Enquiry CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppLink("Hello FIX BY SHIVAM, I want to enquire about iPhone repair.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-full font-display font-bold text-xs sm:text-sm text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
