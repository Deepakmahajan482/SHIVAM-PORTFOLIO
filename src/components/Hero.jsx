import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Cpu, 
  BatteryCharging, 
  Activity,
  CheckCircle2,
  Zap
} from 'lucide-react';

export default function Hero({ onExploreAccessories }) {
  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-8 lg:pt-28 lg:pb-12 flex items-center overflow-hidden overflow-x-clip max-w-full w-full bg-[#E9E8F8]"
    >
      {/* Background Ambient Lighting in Powdered Blue & Sunset Peach */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] glow-spot-blue pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] glow-spot-peach pointer-events-none rounded-full" />
      
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1B1E2E 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headings, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Luxury Brand Label Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#8DB9F0]/40 shadow-subtle mb-4 hover:border-[#8DB9F0] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B69E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5B69E]"></span>
              </span>
              <span className="text-[11px] uppercase tracking-luxury font-mono font-bold text-[#1B1E2E]">
                SMARTPHONE REPAIR & ACCESSORIES
              </span>
            </motion.div>

            {/* Luxury Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-[72px] tracking-tight text-[#1B1E2E] leading-[1.04] mb-3"
            >
              <span className="font-display font-extrabold uppercase tracking-tight block">
                YOUR DEVICE.
              </span>
              <span className="font-luxury italic font-medium text-5xl sm:text-7xl xl:text-[84px] bg-gradient-to-r from-[#1B1E2E] via-[#8DB9F0] to-[#F5B69E] bg-clip-text text-transparent block -mt-1 sm:-mt-2">
                Our Expertise.
              </span>
            </motion.h1>

            {/* Supporting Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl font-medium text-[#5C6079] mb-3 flex items-center gap-2 font-display"
            >
              <Sparkles className="w-4 h-4 inline-block text-[#F5B69E]" />
              <span className="text-[#1B1E2E]">iPhone Repair.</span>
              <span className="text-[#8DB9F0]">Smart Solutions.</span>
              <span className="text-[#F5B69E]">Premium Accessories.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-[#5C6079] max-w-xl leading-relaxed mb-6"
            >
              From professional smartphone repairs to stylish mobile accessories, 
              <strong className="text-[#1B1E2E] font-bold"> FIX BY SHIVAM </strong> 
              brings expert care and luxury engineering for your everyday technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-wide text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-95"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onExploreAccessories}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-display font-bold text-sm tracking-wide text-[#1B1E2E] bg-white/80 hover:bg-white border border-[#8DB9F0]/40 hover:border-[#8DB9F0] shadow-subtle transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>EXPLORE ACCESSORIES</span>
              </button>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 pt-5 border-t border-[#8DB9F0]/25 flex flex-wrap items-center gap-5 text-xs text-[#5C6079] font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8DB9F0]" />
                <span className="text-[#1B1E2E] font-semibold">Component-Level Precision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#F5B69E]" />
                <span className="text-[#1B1E2E] font-semibold">Micro-Soldering Workstation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8DB9F0]" />
                <span className="text-[#1B1E2E] font-semibold">Transparent Diagnostics</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Realistic iPhone Mockup with Floating Mini-Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-2 lg:pt-0">
            
            {/* Dual Glow behind device */}
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full glow-spot-blue -z-10 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-52 sm:w-72 h-52 sm:h-72 rounded-full glow-spot-peach -z-10 pointer-events-none" />

            {/* Realistic iPhone Mockup Container (Sleek Compact Dimensions) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-[260px] xs:w-[280px] sm:w-[320px] md:w-[335px] h-[520px] sm:h-[600px] bg-[#D7E4F7] rounded-[44px] p-2.5 sm:p-3 shadow-phone-frame-soft phone-chassis-custom select-none mx-auto"
              style={{
                perspective: "1000px",
                transform: "rotateY(-3deg) rotateX(3deg)",
              }}
            >
              {/* Metallic Edge Highlight */}
              <div className="absolute inset-0 rounded-[44px] border border-white/80 pointer-events-none" />

              {/* Volume / Power Buttons */}
              <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#B5CDEB] rounded-l" />
              <div className="absolute -left-[3px] top-36 w-[3px] h-10 bg-[#B5CDEB] rounded-l" />
              <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#B5CDEB] rounded-r" />

              {/* Inner Phone Screen */}
              <div className="relative w-full h-full bg-[#0F1322] rounded-[34px] overflow-hidden border border-black/30 flex flex-col justify-between">
                
                {/* Diagonal Screen Reflection */}
                <div className="absolute inset-0 screen-reflection pointer-events-none z-20" />

                {/* Top Status Bar & Dynamic Island */}
                <div className="relative z-30 pt-2.5 px-4 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-white/90 font-mono">9:41</span>
                  
                  {/* Dynamic Island Component */}
                  <div className="h-6 px-3 bg-black rounded-full flex items-center gap-1.5 border border-[#8DB9F0]/40 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5B69E] animate-pulse" />
                    <span className="text-[9px] text-white/90 font-mono tracking-tight">Diagnostics: OK</span>
                    <Wrench className="w-2.5 h-2.5 text-[#8DB9F0]" />
                  </div>

                  <div className="flex items-center gap-1 text-white/80">
                    <Activity className="w-2.5 h-2.5 text-[#8DB9F0]" />
                    <span className="text-[9px] font-mono">100%</span>
                  </div>
                </div>

                {/* In-Screen Device Repair Visual Interface */}
                <div className="relative z-10 px-3.5 py-2 flex-1 flex flex-col justify-center space-y-3">
                  
                  {/* Central Repair Workstation Graphic */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#8DB9F0]/30 bg-[#161B2E] p-2.5 shadow-inner">
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#8DB9F0]" />
                        <span className="text-[11px] font-semibold text-white font-mono">A17 Pro / Snapdragon</span>
                      </div>
                      <span className="text-[9px] bg-[#F5B69E]/20 text-[#F5B69E] border border-[#F5B69E]/30 px-1.5 py-0.5 rounded-full font-mono font-bold">
                        Telemetry Active
                      </span>
                    </div>

                    {/* Circuit Schematic Mockup */}
                    <div className="h-24 rounded-xl bg-gradient-to-br from-[#0F1322] to-[#1A2035] relative overflow-hidden flex items-center justify-center p-2">
                      <div 
                        className="absolute inset-0 opacity-25" 
                        style={{
                          backgroundImage: 'radial-gradient(#8DB9F0 1px, transparent 1px)',
                          backgroundSize: '12px 12px'
                        }}
                      />
                      
                      {/* Microprocessor Core graphic */}
                      <div className="relative z-10 w-14 h-14 rounded-xl bg-[#202742] border border-[#8DB9F0]/60 flex flex-col items-center justify-center shadow-glow-blue">
                        <Wrench className="w-5 h-5 text-[#F5B69E]" />
                        <span className="text-[7px] font-mono font-bold text-white/80 mt-0.5">FIX LAB</span>
                      </div>

                      {/* Traces */}
                      <div className="absolute left-4 right-4 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8DB9F0]/80 to-transparent" />
                      <div className="absolute top-2 bottom-2 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#F5B69E]/80 to-transparent" />
                    </div>

                    {/* Diagnostics Metrics */}
                    <div className="grid grid-cols-3 gap-1.5 mt-1.5 pt-1.5 border-t border-white/5 text-center">
                      <div className="bg-white/[0.05] rounded-lg p-1">
                        <span className="text-[8px] text-[#8DB9F0] block font-mono">Logic Board</span>
                        <span className="text-[10px] font-bold text-white font-mono">Verified</span>
                      </div>
                      <div className="bg-white/[0.05] rounded-lg p-1">
                        <span className="text-[8px] text-[#8DB9F0] block font-mono">OLED Panel</span>
                        <span className="text-[10px] font-bold text-white font-mono">120Hz Cal</span>
                      </div>
                      <div className="bg-white/[0.05] rounded-lg p-1">
                        <span className="text-[8px] text-[#F5B69E] block font-mono">Health</span>
                        <span className="text-[10px] font-bold text-[#F5B69E] font-mono">100% Peak</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action inside Phone Screen */}
                  <div className="bg-[#1C223A] rounded-xl p-2.5 border border-[#8DB9F0]/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#8DB9F0]/20 flex items-center justify-center border border-[#8DB9F0]/40">
                        <Zap className="w-3.5 h-3.5 text-[#8DB9F0]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-white block">Fast Diagnosis</span>
                        <span className="text-[9px] text-white/70 font-mono">FIX BY SHIVAM</span>
                      </div>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] font-bold">
                      Ready
                    </span>
                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="relative z-30 pb-2 flex justify-center">
                  <div className="w-28 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Desktop Floating Mini-Card 1: iPhone Specialist (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex absolute -top-2 sm:-left-6 md:-left-10 bg-white/98 border border-[#8DB9F0]/40 rounded-2xl p-2.5 shadow-card-soft items-center gap-2.5 z-30 hover:border-[#8DB9F0] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0]">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1B1E2E] font-display">iPhone Specialist</span>
                  <CheckCircle2 className="w-3 h-3 text-[#F5B69E]" />
                </div>
                <span className="text-[9px] text-[#5C6079] block font-mono font-medium">Expert Hardware Care</span>
              </div>
            </motion.div>

            {/* Desktop Floating Mini-Card 2: Professional Repairs (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden sm:flex absolute bottom-12 sm:-left-6 md:-left-10 bg-white/98 border border-[#F5B69E]/50 rounded-2xl p-2.5 shadow-card-soft items-center gap-2.5 z-30 hover:border-[#F5B69E] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F5B69E]/20 border border-[#F5B69E]/40 flex items-center justify-center text-[#F5B69E]">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#1B1E2E] font-display block">Professional Repairs</span>
                <span className="text-[9px] text-[#5C6079] font-mono font-medium">Micro-Soldering & ICs</span>
              </div>
            </motion.div>

            {/* Desktop Floating Mini-Card 3: Premium Accessories (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden sm:flex absolute top-1/2 sm:-right-6 md:-right-8 -translate-y-1/2 bg-white/98 border border-[#8DB9F0]/40 rounded-2xl p-2.5 shadow-card-soft items-center gap-2.5 z-30 hover:border-[#8DB9F0] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0]">
                <BatteryCharging className="w-4 h-4 text-[#8DB9F0]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#1B1E2E] font-display block">Premium Accessories</span>
                <span className="text-[9px] text-[#5C6079] font-mono font-medium">Cases, Glass & GaN Power</span>
              </div>
            </motion.div>

            {/* Mobile Feature Badges (Contained, Zero Horizontal Overflow) */}
            <div className="sm:hidden flex flex-wrap items-center justify-center gap-2 mt-4 w-full px-1 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#8DB9F0]/30 shadow-subtle text-[11px] font-bold text-[#1B1E2E]">
                <Smartphone className="w-3.5 h-3.5 text-[#8DB9F0]" />
                <span>iPhone Specialist</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#F5B69E]/40 shadow-subtle text-[11px] font-bold text-[#1B1E2E]">
                <Cpu className="w-3.5 h-3.5 text-[#F5B69E]" />
                <span>Chip-Level Repair</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#8DB9F0]/30 shadow-subtle text-[11px] font-bold text-[#1B1E2E]">
                <BatteryCharging className="w-3.5 h-3.5 text-[#8DB9F0]" />
                <span>Accessories</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
