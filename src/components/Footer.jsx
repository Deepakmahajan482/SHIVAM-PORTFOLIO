import React from 'react';
import { Smartphone, Instagram, MessageSquare, ArrowUp, ArrowRight, Phone, Heart, Globe, Shield } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';
import { REPAIR_SERVICES } from '../data/services';
import { IMAGES } from '../data/images';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Repair Services", href: "#services" },
    { label: "iPhone Specialist", href: "#iphone-specialist" },
    { label: "Accessories Collection", href: "#accessories" },
    { label: "Repair Studio Gallery", href: "#gallery" },
    { label: "Contact & Enquiries", href: "#contact" }
  ];

  return (
    <footer className="bg-[#E9E8F8] border-t border-[#8DB9F0]/30 relative overflow-hidden overflow-x-clip max-w-full">
      {/* Ambient background glow in Powdered Blue & Sunset Peach */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] glow-spot-blue pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] glow-spot-peach pointer-events-none rounded-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-[#8DB9F0]/25">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo with User's Uploaded Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-black border border-[#8DB9F0]/40 overflow-hidden flex items-center justify-center shadow-subtle">
                  <img 
                    src={IMAGES.logo} 
                    alt="FIX BY SHIVAM" 
                    className="w-full h-full object-cover"
                    width="44"
                    height="44"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold tracking-wider text-xl text-[#1B1E2E]">
                    FIX BY <span className="text-[#8DB9F0]">SHIVAM</span>
                  </span>
                  <span className="text-[10px] tracking-luxury text-[#5C6079] uppercase -mt-0.5 font-mono font-semibold">
                    Smart Repair & Accessories
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5C6079] leading-relaxed mb-5 font-light">
                Specialized smartphone repair and curated mobile accessories. 
                Bringing precision engineering, chip-level diagnostics, and aesthetic device protection to everyday smartphone users.
              </p>

              {/* Contact Actions */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={`tel:${BRAND_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#1B1E2E] hover:text-[#8DB9F0] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#F5B69E]" />
                  <span>{BRAND_CONFIG.phoneNumber}</span>
                </a>

                {/* Social Buttons */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={BRAND_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/80 border border-[#8DB9F0]/30 flex items-center justify-center text-[#5C6079] hover:text-[#8DB9F0] hover:border-[#8DB9F0] shadow-sm transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/80 border border-[#8DB9F0]/30 flex items-center justify-center text-[#5C6079] hover:text-[#25D366] hover:border-[#25D366] shadow-sm transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Rights Notice */}
            <div className="mt-5 pt-3.5 border-t border-[#8DB9F0]/20 text-[11px] font-mono text-[#5C6079] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#8DB9F0]" />
              <span>Independent Repair Specialist • All Brand Rights with FIX BY SHIVAM</span>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold text-[#1B1E2E] uppercase tracking-luxury mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#5C6079]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-[#8DB9F0] font-medium transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Repair Services (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold text-[#1B1E2E] uppercase tracking-luxury mb-3.5">
              Repair Services
            </h4>
            <ul className="space-y-2 text-xs text-[#5C6079]">
              {REPAIR_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a 
                    href="#services" 
                    className="hover:text-[#8DB9F0] transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DB9F0]"></span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accessories & Quick Action (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-xs font-bold text-[#1B1E2E] uppercase tracking-luxury mb-3.5">
                Accessories
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C6079] mb-5 font-medium">
                <li>• Premium iPhone & Android Cases</li>
                <li>• 9H Edge-to-Edge Tempered Glass</li>
                <li>• GaN 65W Rapid Power Adapters</li>
                <li>• Braided Heavy-Duty Cables</li>
                <li>• Studio Noise-Cancelling Earbuds</li>
                <li>• Aluminum Desktop Stands</li>
              </ul>
            </div>

            <div className="bg-white/95 p-3.5 rounded-2xl border border-[#8DB9F0]/30 shadow-card-soft">
              <span className="text-xs font-bold text-[#1B1E2E] block mb-1">
                Have a broken smartphone?
              </span>
              <p className="text-[11px] text-[#5C6079] mb-2.5">
                Get an instant estimate on WhatsApp.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-full text-xs font-display font-bold uppercase tracking-wider text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution to aarvexo.site with Rights to FIX BY SHIVAM */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5C6079]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} <strong className="text-[#1B1E2E]">FIX BY SHIVAM</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-[#8DB9F0]">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span>Managed & Developed by</span>
              <a 
                href="https://aarvexo.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-[#1B1E2E] hover:text-[#8DB9F0] underline decoration-[#8DB9F0] underline-offset-4 transition-colors"
              >
                aarvexo.site
              </a>
              <span className="text-[11px] text-[#5C6079]">(All Rights & Ownership belong to FIX BY SHIVAM)</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={BRAND_CONFIG.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#8DB9F0] font-medium transition-colors"
            >
              Instagram @fixbyshivam
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white border border-[#8DB9F0]/30 text-[#1B1E2E] shadow-subtle transition-colors font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8DB9F0]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
