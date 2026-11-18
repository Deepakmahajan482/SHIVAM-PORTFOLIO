import { IMAGES } from './images';

/**
 * Curated Premium Smartphone Accessories Data for FIX BY SHIVAM
 * Pulled dynamically from .env configuration
 */

export const ACCESSORY_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "covers", label: "Covers & Cases" },
  { id: "protection", label: "Screen Protection" },
  { id: "chargers", label: "Chargers & Cables" },
  { id: "audio", label: "Audio & Earbuds" },
  { id: "other", label: "Stands & Accessories" }
];

export const ACCESSORIES_ITEMS = [
  {
    id: "acc-1",
    name: "Aerospace Matte Titanium Phone Case",
    category: "covers",
    categoryLabel: "iPhone Cases",
    image: IMAGES.accessories.caseTitanium,
    description: "Ultra-slim matte finish shockproof case with reinforced camera island protection and MagSafe compatible magnetic ring.",
    features: ["MagSafe Alignment", "Metallic Button Accents", "Drop Shock Absorption", "Fingerprint-Resistant"],
    badge: "Best Seller"
  },
  {
    id: "acc-2",
    name: "Crystal Clear Armor Case with Anti-Yellowing",
    category: "covers",
    categoryLabel: "Phone Covers",
    image: IMAGES.accessories.caseClear,
    description: "Optical-grade Bayer polymer bumper with scratch-resistant back plate that reveals the natural design of your device.",
    features: ["UV Anti-Yellow Coating", "Raised Bezel Lips", "Corner Air-Cushion", "Tactile Buttons"],
    badge: "Ultra Clear"
  },
  {
    id: "acc-3",
    name: "9H Edge-to-Edge Privacy Tempered Glass",
    category: "protection",
    categoryLabel: "Tempered Glass",
    image: IMAGES.accessories.glassPrivacy,
    description: "Two-way anti-spy privacy filter with electroplated oleophobic coating for silky smooth touch response and smudge protection.",
    features: ["28° Privacy Viewing Angle", "9H Surface Hardness", "High-Definition Clarity", "Bubble-Free Adhesion"],
    badge: "Privacy Tech"
  },
  {
    id: "acc-4",
    name: "Sapphire-Strength Full Coverage Screen Protector",
    category: "protection",
    categoryLabel: "Screen Protectors",
    image: IMAGES.accessories.glassFull,
    description: "Multi-layered shatterproof tempered membrane designed for curved and flat flagship screens with precise speaker cutout.",
    features: ["High Transparency", "Zero Touch Latency", "Curved Edge Arc", "Oleophobic Surface"],
    badge: "Maximum Impact"
  },
  {
    id: "acc-5",
    name: "Ultra-Compact GaN 65W Fast Charger",
    category: "chargers",
    categoryLabel: "Fast Chargers",
    image: IMAGES.accessories.chargerGan,
    description: "Gallium Nitride (GaN) rapid power adapter supporting USB Power Delivery 3.0, PPS, and QC protocols for fast, cool charging.",
    features: ["Dual Port (Type-C + USB-A)", "Foldable Pins", "Active Heat Dissipation", "Universal Fast Charging"],
    badge: "GaN Fast Charge"
  },
  {
    id: "acc-6",
    name: "Braided Armor USB-C to Lightning / Type-C Cable",
    category: "chargers",
    categoryLabel: "USB Cables",
    image: IMAGES.accessories.cableBraided,
    description: "Double-braided nylon weave cable rated for 20,000+ bends with alloy connectors and fast charging power transmission.",
    features: ["Reinforced Strain Relief", "Up to 100W PD Power", "480Mbps Data Sync", "Tangle-Free Design"],
    badge: "Durable Nylon"
  },
  {
    id: "acc-7",
    name: "Studio-Grade Active Noise Cancelling Earbuds",
    category: "audio",
    categoryLabel: "Wireless Earbuds",
    image: IMAGES.accessories.audioEarbuds,
    description: "Ergonomic wireless earbuds featuring low-latency Bluetooth connectivity, deep bass drivers, and transparency listening mode.",
    features: ["ENC Call Noise Reduction", "IPX5 Sweat Resistance", "Instant Auto-Pairing", "Touch Gesture Controls"],
    badge: "Premium Audio"
  },
  {
    id: "acc-8",
    name: "High-Fidelity Wired Earphones with DAC",
    category: "audio",
    categoryLabel: "Earphones",
    image: IMAGES.accessories.audioWired,
    description: "Type-C and 3.5mm acoustic in-ear earphones with digital-to-analog converter for lossless HD studio clarity and in-line microphone.",
    features: ["Built-in 24-bit DAC", "In-Line Controller", "Noise Isolating Tips", "Tangle-Resistant Cord"],
    badge: "Lossless Audio"
  },
  {
    id: "acc-9",
    name: "CNC Anodized Aluminum Desktop Phone Stand",
    category: "other",
    categoryLabel: "Mobile Stands",
    image: IMAGES.accessories.standAluminum,
    description: "Multi-angle adjustable desktop pedestal with silicone anti-slip pads, cable routing channel, and solid weighted base.",
    features: ["Dual 270° Hinges", "Anti-Scratch Silicone", "Cable Pass-Through", "Foldable Travel Design"],
    badge: "Aluminum Alloy"
  },
  {
    id: "acc-10",
    name: "Magnetic Car Mount with 15W Qi Charging",
    category: "other",
    categoryLabel: "Other Accessories",
    image: IMAGES.accessories.carMount,
    description: "Air-vent and dashboard magnetic smartphone cradle with intelligent inductive Qi charging coil and 360-degree ball joint.",
    features: ["Strong Neodymium Magnets", "Over-Heat Protection", "One-Hand Mount & Release", "360° Rotation"],
    badge: "Car Accessory"
  }
];
