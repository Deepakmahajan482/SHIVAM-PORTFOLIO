import { IMAGES } from './images';

/**
 * Comprehensive Repair Services Data for FIX BY SHIVAM
 */

export const REPAIR_SERVICES = [
  {
    id: "iphone-repair",
    title: "iPhone Repair",
    subtitle: "Specialist Care for Apple Devices",
    description: "Comprehensive hardware and diagnostic repairs tailored specifically for all iPhone generations, preserving sleek finish and high performance.",
    icon: "Apple",
    highlights: [
      "TrueTone & ambient light calibration support",
      "Face ID & TrueDepth sensor diagnostics",
      "OEM-grade fitment & sealing",
      "Accurate micro-soldering & logic board fixes"
    ],
    commonIssues: ["Cracked Screen", "Battery Drain", "No Power", "Ghost Touch", "Camera Blur"],
    image: IMAGES.services.iphone,
    badge: "Specialist Service",
    whatsappPreset: "Hello FIX BY SHIVAM, I want to enquire about iPhone repair."
  },
  {
    id: "android-repair",
    title: "Android Mobile Repair",
    subtitle: "Multi-Brand Hardware Solutions",
    description: "Expert troubleshooting and component replacements across premium Android flagships including Samsung Galaxy, Google Pixel, OnePlus, and more.",
    icon: "Smartphone",
    highlights: [
      "AMOLED & OLED curved panel expertise",
      "In-display fingerprint sensor recalibration",
      "Thermal paste & heat dissipation renewal",
      "Multi-brand genuine parts sourcing"
    ],
    commonIssues: ["Green Line Issue", "Flickering Screen", "Bootloop", "Port Damage"],
    image: IMAGES.services.android,
    badge: "All Flagships",
    whatsappPreset: "Hello FIX BY SHIVAM, I want to enquire about Android smartphone repair."
  },
  {
    id: "display-replacement",
    title: "Display Replacement",
    subtitle: "Flawless Visual Restoration",
    description: "Precision screen installations for cracked glass, unresponsive touch digitizers, broken OLED panels, and discolored lines.",
    icon: "MonitorSmartphone",
    highlights: [
      "Zero dead pixel guarantee check",
      "High refresh rate (120Hz ProMotion/Smooth Display) retention",
      "Dust-free clean room installation",
      "Oleophobic coating protection"
    ],
    commonIssues: ["Shattered Outer Glass", "Black Screen", "Touch Lag", "Color Bleed"],
    image: IMAGES.services.display,
    badge: "Precision Fit",
    whatsappPreset: "Hello FIX BY SHIVAM, I need a display replacement quote for my smartphone."
  },
  {
    id: "battery-replacement",
    title: "Battery Replacement",
    subtitle: "Restore All-Day Battery Life",
    description: "Revitalize sluggish phones suffering from rapid drainage, unexpected shutdowns, battery bulging, or degraded battery health percentage.",
    icon: "BatteryCharging",
    highlights: [
      "Grade-A high capacity battery cells",
      "Battery health indicator compatibility",
      "Safe disposal of degraded lithium-ion packs",
      "Thermal expansion & safety testing"
    ],
    commonIssues: ["Rapid Drain", "Swollen Back Cover", "Shuts Down at 30%", "Overheating"],
    image: IMAGES.services.battery,
    badge: "Quick Turnaround",
    whatsappPreset: "Hello FIX BY SHIVAM, I would like to check battery replacement options for my phone."
  },
  {
    id: "charging-port-repair",
    title: "Charging Port Repair",
    subtitle: "Lightning & USB-C Restoration",
    description: "Fix loose connections, slow charging speeds, moisture detection warnings, and damaged pins with microsurgical port repairs or sub-board replacement.",
    icon: "Zap",
    highlights: [
      "Microscopic lint & debris ultrasonic cleaning",
      "Type-C & Lightning pin reconstruction",
      "Fast charging protocol verification (PD / QC / SuperVOOC)",
      "OTG & Data transfer signal verification"
    ],
    commonIssues: ["Loose Cable", "Slow Charging", "Moisture Error", "Headphone Adapter Fails"],
    image: IMAGES.services.charging,
    badge: "Microsoldering",
    whatsappPreset: "Hello FIX BY SHIVAM, my smartphone charging port is loose or not charging properly."
  },
  {
    id: "motherboard-repair",
    title: "Chip-Level & Motherboard Repair",
    subtitle: "Advanced Micro-Soldering",
    description: "Component-level micro-soldering for water damage, short circuits, dead motherboard power ICs, audio IC issues, and baseband network faults.",
    icon: "Cpu",
    highlights: [
      "High-magnification stereomicroscope inspection",
      "BGA reballing & IC chip replacement",
      "Short-circuit tracing with thermal imaging",
      "Water & liquid damage corrosion recovery"
    ],
    commonIssues: ["Dead / Won't Turn On", "No Network / Baseband", "Audio IC Failure", "Water Damage"],
    image: IMAGES.services.motherboard,
    badge: "Advanced Tech",
    whatsappPreset: "Hello FIX BY SHIVAM, I need motherboard or chip-level repair diagnosis."
  },
  {
    id: "camera-repair",
    title: "Camera & Lens Repair",
    subtitle: "Ultra-Sharp Optics",
    description: "Restore crystal-clear photos and videos. We replace shattered camera glass lenses, repair autofocus motor jitter, and replace faulty camera modules.",
    icon: "Camera",
    highlights: [
      "Shattered camera sapphire/glass replacement",
      "Optical Image Stabilization (OIS) fix",
      "Sensor cleaning to remove dark spots",
      "Front TrueDepth and selfie camera alignment"
    ],
    commonIssues: ["Cracked Glass", "Shaking / Buzzing Focus", "Black Screen in Camera App", "Blurry Photos"],
    image: IMAGES.services.camera,
    badge: "Optics Care",
    whatsappPreset: "Hello FIX BY SHIVAM, I want to enquire about smartphone camera repair."
  },
  {
    id: "software-troubleshooting",
    title: "Software & Diagnostics",
    subtitle: "Operating System Optimization",
    description: "Resolve persistent boot loops, operating system crashes, stuck Apple logo, recovery mode issues, and secure system resets.",
    icon: "Terminal",
    highlights: [
      "Recovery from bootloop & spinning wheel",
      "Official firmware flashing & clean restore",
      "Data-preserving system rescue attempts",
      "Performance throttling diagnosis"
    ],
    commonIssues: ["Stuck on Logo", "Storage Full Bootloop", "Update Failure", "App Freezing"],
    image: IMAGES.services.software,
    badge: "System Fix",
    whatsappPreset: "Hello FIX BY SHIVAM, I need help with smartphone software troubleshooting."
  }
];
