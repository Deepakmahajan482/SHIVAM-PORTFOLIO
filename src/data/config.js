/**
 * Brand & Business Configuration for FIX BY SHIVAM
 * All contact details, locations, and social profiles are centralized here.
 * As requested, no fake contact numbers, locations, or ratings are hardcoded.
 */

export const BRAND_CONFIG = {
  name: "FIX BY SHIVAM",
  shortName: "FIX BY SHIVAM",
  tagline: "iPhone Repair. Smart Solutions. Premium Accessories.",
  subTagline: "Precision Meets Technology. Expert Care For Your Everyday Device.",
  description: "From professional smartphone repairs to stylish mobile accessories, FIX BY SHIVAM brings expert care and premium solutions for your everyday technology.",

  // Social Links
  instagram: "https://www.instagram.com/fixbyshivam/",
  instagramHandle: "@fixbyshivam",

  // Business Contact
  whatsappNumber: "919779505101", // Active WhatsApp number with country code
  whatsappDisplayNumber: "+91 97795 05101",
  phoneNumber: "+91 97795 05101",
  phoneRaw: "+919779505101",
  email: "Shibhu.aggarwal@gmail.com",

  // Location & Working Hours (Configurable placeholders)
  address: {
    line1: "Studio / Store Location",
    line2: "Available upon appointment & direct enquiry",
    city: "Kalanaur,Punjab",
    pincode: "",
    mapQuery: "FIX BY SHIVAM"
  },

  hours: {
    weekdays: "Mon - Sun: 8:30 AM - 8:30 PM",
    sunday: "8:30AM - 8:30AM",
    statusNote: "Quick Turnaround Available"
  },

  // Service highlights
  badges: [
    "iPhone Specialist",
    "Android Repair",
    "Chip-Level Diagnostics",
    "Premium Accessories"
  ]
};

/**
 * Generate a prefilled WhatsApp link with a custom message
 */
export const getWhatsAppLink = (message) => {
  const cleanNumber = (BRAND_CONFIG.whatsappNumber || "").replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message || "Hello FIX BY SHIVAM, I want to enquire about smartphone repair.");
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Common WhatsApp message presets
 */
export const WHATSAPP_PRESETS = {
  general: "Hello FIX BY SHIVAM, I would like to enquire about your repair services.",
  iphone: "Hello FIX BY SHIVAM, I want to enquire about iPhone repair.",
  android: "Hello FIX BY SHIVAM, I want to enquire about Android smartphone repair.",
  display: "Hello FIX BY SHIVAM, I need a display replacement quote for my smartphone.",
  battery: "Hello FIX BY SHIVAM, I would like to check battery replacement options for my phone.",
  accessories: "Hello FIX BY SHIVAM, I want to enquire about mobile accessories.",
  custom: (device, model, issue) =>
    `Hello FIX BY SHIVAM,\nI need repair assistance for:\n• Device: ${device || 'Not specified'}\n• Model: ${model || 'Not specified'}\n• Issue: ${issue || 'General inspection'}\nPlease let me know the diagnosis and turnaround time.`
};
