/**
 * Centralized Image Asset Configuration
 * Pulls image links from .env (VITE_IMG_*) with robust defaults.
 */

const env = import.meta.env || {};

export const IMAGES = {
  logo: env.VITE_IMG_LOGO || "/logo.png",

  // Services
  services: {
    iphone: env.VITE_IMG_SERVICE_IPHONE || "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=70",
    android: env.VITE_IMG_SERVICE_ANDROID || "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=70",
    display: env.VITE_IMG_SERVICE_DISPLAY || "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=70",
    battery: env.VITE_IMG_SERVICE_BATTERY || "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=500&q=70",
    charging: env.VITE_IMG_SERVICE_CHARGING || "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=70",
    motherboard: env.VITE_IMG_SERVICE_MOTHERBOARD || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=70",
    camera: env.VITE_IMG_SERVICE_CAMERA || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=70",
    software: env.VITE_IMG_SERVICE_SOFTWARE || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=70",
  },

  // iPhone Specialist
  iphoneSpecialist: env.VITE_IMG_IPHONE_SPECIALIST || "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=75",

  // Accessories
  accessories: {
    caseTitanium: env.VITE_IMG_ACC_CASE_TITANIUM || "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=70",
    caseClear: env.VITE_IMG_ACC_CASE_CLEAR || "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=500&q=70",
    glassPrivacy: env.VITE_IMG_ACC_GLASS_PRIVACY || "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=500&q=70",
    glassFull: env.VITE_IMG_ACC_GLASS_FULL || "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=70",
    chargerGan: env.VITE_IMG_ACC_CHARGER_GAN || "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=70",
    cableBraided: env.VITE_IMG_ACC_CABLE_BRAIDED || "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=500&q=70",
    audioEarbuds: env.VITE_IMG_ACC_AUDIO_EARBUDS || "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=70",
    audioWired: env.VITE_IMG_ACC_AUDIO_WIRED || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=70",
    standAluminum: env.VITE_IMG_ACC_STAND_ALUMINUM || "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=500&q=70",
    carMount: env.VITE_IMG_ACC_CAR_MOUNT || "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=70",
  },

  // Gallery
  gallery: [
    {
      id: "gal-1",
      image: env.VITE_IMG_GALLERY_1 || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-2",
      image: env.VITE_IMG_GALLERY_2 || "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-3",
      image: env.VITE_IMG_GALLERY_3 || "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-4",
      image: env.VITE_IMG_GALLERY_4 || "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-5",
      image: env.VITE_IMG_GALLERY_5 || "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-6",
      image: env.VITE_IMG_GALLERY_6 || "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-7",
      image: env.VITE_IMG_GALLERY_7 || "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=70",
    },
    {
      id: "gal-8",
      image: env.VITE_IMG_GALLERY_8 || "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=70",
    }
  ]
};
