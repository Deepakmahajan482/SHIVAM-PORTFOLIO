import React from 'react';
import { 
  HeartHandshake, 
  MessageSquare, 
  Instagram, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  ThumbsUp 
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden">
      {/* Background ambient lighting in Powdered Blue & Sunset Peach */}
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#8DB9F0]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#F5B69E]/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F5B69E]" />
            <span className="text-[11px] uppercase font-mono tracking-luxury text-[#5C6079] font-semibold">
              Customer Experience
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1E2E] tracking-tight mb-3">
            YOUR DEVICE. <span className="font-luxury italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E]">Matters.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] font-light max-w-xl mx-auto">
            We value genuine client satisfaction, precision standards, and authentic relationships over simulated reviews.
          </p>
        </div>

        {/* Customer Experience Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          <div className="bg-white/95 rounded-[28px] p-7 border border-[#8DB9F0]/30 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1B1E2E] mb-2 tracking-wide">
                Pre & Post Inspection
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed">
                Before any screw is opened, all functions—touch, cameras, speakers, sensors, and charging—are thoroughly checked alongside the client.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#8DB9F0]/20 flex items-center gap-2 text-xs font-mono text-[#8DB9F0] font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full Diagnostic Transparency</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F5B69E]/20 border border-[#F5B69E]/40 flex items-center justify-center text-[#F5B69E] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1B1E2E] mb-2 tracking-wide">
                Live Status Updates
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed">
                Receive direct WhatsApp progress photos and diagnostic explanations so you always know what stage of service your device is in.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#8DB9F0]/20 flex items-center gap-2 text-xs font-mono text-[#F5B69E] font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Direct Technician Touchpoint</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0] mb-4">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1B1E2E] mb-2 tracking-wide">
                Zero Compromise Standard
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed">
                We take pride in every repair. If any component does not perform to high benchmarks, we adjust and recalibrate immediately.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#8DB9F0]/20 flex items-center gap-2 text-xs font-mono text-[#8DB9F0] font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Tested Before Handover</span>
            </div>
          </div>

        </div>

        {/* Clean Testimonial Placeholder & Direct Feedback Callout */}
        <div className="rounded-[30px] bg-white/95 border border-[#8DB9F0]/30 shadow-card-soft p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#E9E8F8] border border-[#8DB9F0]/30 flex items-center justify-center mx-auto mb-3 text-[#8DB9F0] shadow-sm">
            <Instagram className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono text-[#F5B69E] uppercase tracking-luxury block mb-1.5 font-bold">
            Community & Real Stories
          </span>

          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1B1E2E] mb-2 tracking-tight">
            Follow Our Latest Fixes on <span className="font-luxury italic font-normal text-[#8DB9F0]">Instagram</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#5C6079] max-w-xl mx-auto leading-relaxed mb-6 font-light">
            As a policy of honesty, we do not host fabricated star ratings or fake testimonials. 
            View our daily repair transformations, micro-soldering videos, and client stories directly on our Instagram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BRAND_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-display font-bold text-xs uppercase tracking-wider text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @fixbyshivam</span>
            </a>

            <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-mono text-[#5C6079] bg-[#E9E8F8] border border-[#8DB9F0]/30 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B69E]" />
              <span>Verified Client Stories</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
