import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, Send } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_PRESETS } from '../data/config';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: "iPhone Repair", msg: WHATSAPP_PRESETS.iphone },
    { label: "Display Replacement", msg: WHATSAPP_PRESETS.display },
    { label: "Battery Replacement", msg: WHATSAPP_PRESETS.battery },
    { label: "Mobile Accessories", msg: WHATSAPP_PRESETS.accessories },
  ];

  const handleLaunch = (msg) => {
    window.open(getWhatsAppLink(msg), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 max-w-[calc(100vw-2rem)]">
      
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 rounded-[28px] bg-white/98 border border-[#8DB9F0]/40 p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#8DB9F0]/25 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#8DB9F0] to-[#F5B69E] flex items-center justify-center text-[#1B1E2E] shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
              <div>
                <span className="text-xs font-bold text-[#1B1E2E] block">FIX BY SHIVAM</span>
                <span className="text-[10px] text-emerald-600 font-mono font-bold">Online for Enquiries</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-[#E9E8F8] hover:bg-[#8DB9F0]/20 flex items-center justify-center text-[#5C6079] hover:text-[#1B1E2E] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Chat bubble preview */}
          <div className="bg-[#E9E8F8] rounded-2xl p-3 mb-3 border border-[#8DB9F0]/25">
            <p className="text-xs text-[#1B1E2E] leading-relaxed">
              👋 Hi! Welcome to <strong className="text-[#1B1E2E]">FIX BY SHIVAM</strong>. 
              How can we assist your smartphone today?
            </p>
            <span className="text-[9px] text-[#5C6079] block text-right mt-1 font-mono">
              Just now
            </span>
          </div>

          {/* Quick Action Options */}
          <div className="space-y-1.5 mb-3">
            <span className="text-[10px] font-mono uppercase text-[#5C6079] px-1 font-bold">
              Select Quick Enquiry:
            </span>
            {quickPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleLaunch(item.msg)}
                className="w-full text-left px-3.5 py-2 rounded-xl bg-[#E9E8F8]/60 hover:bg-gradient-to-r hover:from-[#8DB9F0]/20 hover:to-[#F5B69E]/20 border border-transparent hover:border-[#8DB9F0]/40 text-xs text-[#1B1E2E] flex items-center justify-between transition-colors group"
              >
                <span className="font-medium">{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5C6079] group-hover:text-[#8DB9F0] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          {/* Direct Start Button */}
          <button
            onClick={() => handleLaunch(WHATSAPP_PRESETS.general)}
            className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] flex items-center justify-center gap-2 shadow-glow-blue transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open Direct WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulsing beacon glow in Powdered Blue */}
        <span className="absolute -inset-1 rounded-full bg-[#8DB9F0] opacity-40 group-hover:opacity-75 blur-md animate-pulse"></span>
        
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageSquare className="w-6 h-6 relative z-10" />
        )}
      </button>

    </div>
  );
}
