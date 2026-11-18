import { IMAGES } from './images';

/**
 * Repair Studio & Accessories Gallery Data for FIX BY SHIVAM
 * Pulled dynamically from .env configuration
 */

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "iphone", label: "iPhone Repairs" },
  { id: "motherboard", label: "Motherboard & Chip-Level" },
  { id: "display", label: "Display Replacements" },
  { id: "tools", label: "Repair Tools & Workstation" },
  { id: "accessories", label: "Covers & Accessories" }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "iPhone Logic Board Inspection",
    category: "motherboard",
    categoryLabel: "Motherboard Repair",
    image: IMAGES.gallery[0].image,
    description: "High-precision micro-soldering and trace repair on a smartphone PCB under stereo microscope illumination."
  },
  {
    id: "gal-2",
    title: "Precision Screen & Digitizer Assembly",
    category: "display",
    categoryLabel: "Display Replacement",
    image: IMAGES.gallery[1].image,
    description: "Clean separation and dust-free lamination of an OLED panel with accurate adhesive bezel sealing."
  },
  {
    id: "gal-3",
    title: "Flagship iPhone Internal Diagnostics",
    category: "iphone",
    categoryLabel: "iPhone Repairs",
    image: IMAGES.gallery[2].image,
    description: "Diagnostic verification of battery health sensors, Taptic engine alignment, and internal shielding plates."
  },
  {
    id: "gal-4",
    title: "Precision Torx & Magnetic Repair Tools",
    category: "tools",
    categoryLabel: "Smartphone Repair Tools",
    image: IMAGES.gallery[3].image,
    description: "Specialized ESD-safe screwdrivers, suction separators, and non-marring spudgers used for delicate chassis work."
  },
  {
    id: "gal-5",
    title: "Microscope BGA Chip Reballing",
    category: "motherboard",
    categoryLabel: "Motherboard Repair",
    image: IMAGES.gallery[4].image,
    description: "Ultrasonic flux application and hot air rework station calibration for high-density IC replacement."
  },
  {
    id: "gal-6",
    title: "Premium Matte Titanium Smartphone Covers",
    category: "accessories",
    categoryLabel: "Mobile Covers",
    image: IMAGES.gallery[5].image,
    description: "Curated display of shock-absorbing polycarbonate and tactile metal button smartphone protection cases."
  },
  {
    id: "gal-7",
    title: "OLED Panel Testing & Touch Calibration",
    category: "display",
    categoryLabel: "Display Replacement",
    image: IMAGES.gallery[6].image,
    description: "Multi-touch responsiveness, color temperature balancing, and refresh rate stress testing before final reassembly."
  },
  {
    id: "gal-8",
    title: "Rapid GaN Charging Accessories Showcase",
    category: "accessories",
    categoryLabel: "Mobile Accessories",
    image: IMAGES.gallery[7].image,
    description: "Next-generation compact charging adapters, braided cables, and ergonomic phone support accessories."
  }
];
