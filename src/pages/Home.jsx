import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import IphoneSpecialist from '../components/IphoneSpecialist';
import Accessories from '../components/Accessories';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const handleExploreAccessories = () => {
    const el = document.querySelector('#accessories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9E8F8] text-[#1B1E2E] selection:bg-[#8DB9F0] selection:text-[#1B1E2E] flex flex-col overflow-x-hidden w-full max-w-full">

      {/* SECTION 1: NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 2: HERO SECTION */}
        <Hero onExploreAccessories={handleExploreAccessories} />

        {/* SECTION 3: BRAND INTRODUCTION */}
        <About onExploreAccessories={handleExploreAccessories} />

        {/* SECTION 4: REPAIR SERVICES */}
        <Services />

        {/* SECTION 5: IPHONE SPECIALIST SHOWCASE */}
        <IphoneSpecialist />

        {/* SECTION 6: ACCESSORIES COLLECTION */}
        <Accessories />

        {/* SECTION 7: WHY CHOOSE US */}
        <WhyChooseUs />

        {/* SECTION 8: REPAIR GALLERY */}
        <Gallery />

        {/* SECTION 9: CUSTOMER EXPERIENCE */}
        <Testimonials />

        {/* SECTION 10: CONTACT & ENQUIRY */}
        <Contact />
      </main>

      {/* SECTION 11: FOOTER */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
