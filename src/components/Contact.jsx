import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Wrench,
  Phone,
  ArrowRight
} from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';

export default function Contact({ initialSelectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deviceBrand: "Apple",
    deviceModel: "",
    repairIssue: initialSelectedService ? initialSelectedService.title : "Display Replacement",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deviceBrands = [
    "Apple (iPhone)",
    "Samsung Galaxy",
    "Google Pixel",
    "OnePlus",
    "Xiaomi / Redmi / POCO",
    "Realme",
    "Vivo / iQOO",
    "Oppo",
    "Motorola",
    "Other Device"
  ];

  const repairIssues = [
    "Display / Screen Replacement",
    "Battery Replacement / Fast Drain",
    "Charging Port / Slow Charge",
    "Motherboard / Chip-Level / Dead Phone",
    "Camera Lens / Focus Shaking",
    "Speaker / Microphone / Audio IC",
    "Water / Liquid Damage",
    "Software / Bootloop / Apple Logo",
    "Accessories Enquiry",
    "General Diagnostics"
  ];

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your contact phone number.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!formData.deviceModel.trim()) errors.deviceModel = "Please specify your device model (e.g. iPhone 14 Pro, Galaxy S23).";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const waText = `Hello FIX BY SHIVAM,
I would like to enquire about smartphone repair:
• Customer: ${formData.name}
• Phone: ${formData.phone}
• Device: ${formData.deviceBrand} - ${formData.deviceModel}
• Repair Issue: ${formData.repairIssue}
• Notes: ${formData.message || "Please share turnaround time and quote."}`;

    window.open(getWhatsAppLink(waText), '_blank');
    setIsSubmitted(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-[#E9E8F8] relative overflow-hidden overflow-x-clip max-w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#8DB9F0]/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#F5B69E]/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#8DB9F0]" />
            <span className="text-[11px] uppercase font-mono tracking-luxury text-[#5C6079] font-semibold">
              Device Repair Enquiry
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1E2E] tracking-tight mb-3">
            LET'S FIX <span className="font-luxury italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E]">Your Device.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] font-light">
            Have an issue with your smartphone? Get in touch with FIX BY SHIVAM for quick advice, transparent diagnostics, and expert repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white/95 rounded-[32px] p-6 sm:p-10 border border-[#8DB9F0]/30 shadow-card-soft relative">

            {/* Top Gradient Accent */}
            <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#8DB9F0] to-[#F5B69E]" />

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-3xl bg-[#8DB9F0]/20 border border-[#8DB9F0] flex items-center justify-center text-[#8DB9F0] mb-5 shadow-glow-blue">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-[#1B1E2E] mb-2">
                  Request Initiated!
                </h3>
                <p className="text-sm text-[#5C6079] max-w-md mb-8">
                  Thank you, <strong className="text-[#1B1E2E]">{formData.name}</strong>. Your enquiry for {formData.deviceBrand} ({formData.deviceModel}) has been prepared. For instant response, continue to WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="px-6 py-3.5 rounded-full font-sora font-bold text-sm text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] flex items-center justify-center gap-2 shadow-glow-blue transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        deviceBrand: "Apple",
                        deviceModel: "",
                        repairIssue: "Display Replacement",
                        message: ""
                      });
                    }}
                    className="px-6 py-3.5 rounded-full font-sora font-semibold text-sm text-[#1B1E2E] bg-[#E9E8F8] hover:bg-white border border-[#8DB9F0]/30 transition-colors"
                  >
                    Submit Another Device
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border text-sm text-[#1B1E2E] placeholder-[#5C6079]/60 focus:bg-white focus:outline-none transition-colors ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#8DB9F0]/30 focus:border-[#8DB9F0]'
                        }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border text-sm text-[#1B1E2E] placeholder-[#5C6079]/60 focus:bg-white focus:outline-none transition-colors ${formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#8DB9F0]/30 focus:border-[#8DB9F0]'
                        }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Device Brand & Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                      Device Brand
                    </label>
                    <select
                      name="deviceBrand"
                      value={formData.deviceBrand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border border-[#8DB9F0]/30 text-sm text-[#1B1E2E] focus:bg-white focus:outline-none focus:border-[#8DB9F0] transition-colors"
                    >
                      {deviceBrands.map(brand => (
                        <option key={brand} value={brand} className="bg-white text-[#1B1E2E]">
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                      Device Model *
                    </label>
                    <input
                      type="text"
                      name="deviceModel"
                      value={formData.deviceModel}
                      onChange={handleInputChange}
                      placeholder="e.g. iPhone 14 Pro / Pixel 7"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border text-sm text-[#1B1E2E] placeholder-[#5C6079]/60 focus:bg-white focus:outline-none transition-colors ${formErrors.deviceModel ? 'border-red-500 focus:border-red-500' : 'border-[#8DB9F0]/30 focus:border-[#8DB9F0]'
                        }`}
                    />
                    {formErrors.deviceModel && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.deviceModel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Repair Issue */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                    Repair Issue / Service Required
                  </label>
                  <select
                    name="repairIssue"
                    value={formData.repairIssue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border border-[#8DB9F0]/30 text-sm text-[#1B1E2E] focus:bg-white focus:outline-none focus:border-[#8DB9F0] transition-colors"
                  >
                    {repairIssues.map(issue => (
                      <option key={issue} value={issue} className="bg-white text-[#1B1E2E]">
                        {issue}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#5C6079] font-bold mb-2">
                    Additional Symptoms / Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe how the issue started (e.g. dropped in water, touch unresponsive on left side)..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#E9E8F8]/60 border border-[#8DB9F0]/30 text-sm text-[#1B1E2E] placeholder-[#5C6079]/60 focus:bg-white focus:outline-none focus:border-[#8DB9F0] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-full font-display font-bold text-xs uppercase tracking-wider text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 text-[#1B1E2E]" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="py-3.5 px-6 rounded-full font-display font-semibold text-xs uppercase tracking-wider text-[#1B1E2E] bg-[#E9E8F8] hover:bg-white border border-[#8DB9F0]/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#5C6079]" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#5C6079] pt-1">
                  We reply promptly with diagnosis steps and estimates. No spam.
                </p>

              </form>
            )}

          </div>

          {/* Right Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 shadow-card-soft flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#8DB9F0]/20 border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-luxury text-[#8DB9F0] block font-bold">
                      Direct Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${BRAND_CONFIG.phoneRaw}`}
                      className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[#1B1E2E] hover:text-[#8DB9F0] transition-colors block whitespace-nowrap"
                    >
                      {BRAND_CONFIG.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-[#8DB9F0]/15">
                <span className="text-xs text-[#5C6079]">
                  Call or message for instant quote
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${BRAND_CONFIG.phoneRaw}`}
                    className="px-4 py-2 rounded-full bg-[#E9E8F8] hover:bg-[#8DB9F0]/20 text-[#1B1E2E] text-xs font-display font-bold uppercase tracking-wider border border-[#8DB9F0]/30 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F5B69E]" />
                    <span>Call</span>
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] text-xs font-display font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Spotlight Card */}
            <a
              href={BRAND_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 hover:border-[#8DB9F0] transition-all duration-300 shadow-card-soft flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8DB9F0] via-[#E9E8F8] to-[#F5B69E] p-0.5 shadow-sm">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#1B1E2E]">
                    <Instagram className="w-6 h-6 text-[#8DB9F0]" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-[#F5B69E] block font-bold">
                    Official Instagram
                  </span>
                  <h4 className="font-display text-base font-bold text-[#1B1E2E] transition-colors">
                    {BRAND_CONFIG.instagramHandle}
                  </h4>
                  <span className="text-xs text-[#5C6079]">
                    Watch repair reels & DM us
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#888CA3] group-hover:text-[#8DB9F0] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Operating Hours Card */}
            <div className="bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 shadow-card-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8F8] border border-[#8DB9F0]/30 flex items-center justify-center text-[#8DB9F0]">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-[#1B1E2E]">
                  Studio Hours
                </h4>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#5C6079]">
                  <span>Monday - Saturday:</span>
                  <span className="text-[#1B1E2E] font-bold">{BRAND_CONFIG.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-[#5C6079]">
                  <span>Sunday:</span>
                  <span className="text-[#1B1E2E] font-bold">{BRAND_CONFIG.hours.sunday}</span>
                </div>
                <div className="pt-2 border-t border-[#8DB9F0]/20 flex items-center gap-2 text-[#8DB9F0] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B69E]" />
                  <span>{BRAND_CONFIG.hours.statusNote}</span>
                </div>
              </div>
            </div>

            {/* Configurable Location Placeholder */}
            <div className="bg-white/95 rounded-[28px] p-6 border border-[#8DB9F0]/30 shadow-card-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8F8] border border-[#8DB9F0]/30 flex items-center justify-center text-[#F5B69E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sora text-base font-bold text-[#1B1E2E]">
                    Repair Studio Location
                  </h4>
                  <span className="text-[11px] text-[#8DB9F0] font-mono font-bold">
                    (Configurable Address)
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5C6079] leading-relaxed">
                {BRAND_CONFIG.address.line1} • {BRAND_CONFIG.address.line2}
              </p>
              <p className="text-xs text-[#1B1E2E] mt-1 font-mono font-bold">
                {BRAND_CONFIG.address.city}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
