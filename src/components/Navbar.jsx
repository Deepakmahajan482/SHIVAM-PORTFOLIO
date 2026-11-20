import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';
import { IMAGES } from '../data/images';
import { Menu, X, ArrowRight, Instagram, MessageSquare, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "iPhone Specialist", href: "#iphone-specialist" },
    { label: "Accessories", href: "#accessories" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#E9E8F8] border-b border-[#8DB9F0]/30 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
      style={{ backgroundColor: (isScrolled || isMobileMenuOpen) ? '#E9E8F8' : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with User's Official Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-black border border-[#8DB9F0]/40 overflow-hidden flex items-center justify-center shadow-subtle group-hover:border-[#8DB9F0] group-hover:shadow-glow-blue transition-all duration-300">
              <img 
                src={IMAGES.logo} 
                alt="FIX BY SHIVAM" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width="44"
                height="44"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sora font-extrabold tracking-wider text-lg sm:text-xl text-[#1B1E2E] transition-colors">
                FIX BY <span className="text-[#8DB9F0]">SHIVAM</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#5C6079] uppercase -mt-1 font-mono font-semibold">
                Smartphone Repair & Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/75 border border-[#8DB9F0]/25 rounded-full px-4 py-1.5 shadow-subtle backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-[#5C6079] hover:text-[#1B1E2E] hover:bg-[#8DB9F0]/15 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1B1E2E] hover:text-[#8DB9F0] transition-colors bg-white/80 border border-[#8DB9F0]/30 hover:border-[#8DB9F0] px-3.5 py-2 rounded-full shadow-subtle"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5B69E]" />
              <span>{BRAND_CONFIG.phoneNumber}</span>
            </a>

            <a
              href={BRAND_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-full bg-white/80 border border-[#8DB9F0]/30 flex items-center justify-center text-[#5C6079] hover:text-[#8DB9F0] hover:border-[#8DB9F0] hover:bg-[#8DB9F0]/10 shadow-subtle transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all duration-200 group active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#1B1E2E]" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] shadow-sm flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-2xl bg-white/80 border border-[#8DB9F0]/30 flex items-center justify-center text-[#1B1E2E] hover:bg-[#8DB9F0]/10 transition-colors shadow-subtle"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#8DB9F0]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 h-[calc(100dvh-64px)] bg-[#E9E8F8] z-50 p-5 sm:p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
          style={{ backgroundColor: '#E9E8F8' }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold text-[#1B1E2E] bg-white border border-[#8DB9F0]/30 shadow-subtle hover:border-[#8DB9F0] hover:bg-[#8DB9F0]/10 transition-all active:scale-[0.98]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#8DB9F0]" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-[#8DB9F0]/30 flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] shadow-glow-blue transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 pb-6">
              <a
                href={BRAND_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5C6079] hover:text-[#8DB9F0] transition-colors font-medium"
              >
                <Instagram className="w-4 h-4 text-[#8DB9F0]" />
                <span>@fixbyshivam</span>
              </a>
              <span className="text-[#8DB9F0]/40">•</span>
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-[#5C6079] hover:text-[#F5B69E] transition-colors font-mono font-semibold"
              >
                <Phone className="w-4 h-4 text-[#F5B69E]" />
                <span>{BRAND_CONFIG.phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
