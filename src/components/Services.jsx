import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  MonitorSmartphone,
  BatteryCharging,
  Zap,
  Cpu,
  Camera,
  Terminal,
  MessageSquare,
  Wrench
} from 'lucide-react';
import { REPAIR_SERVICES } from '../data/services';
import { getWhatsAppLink } from '../data/config';

const iconComponents = {
  Apple: Smartphone,
  Smartphone: Smartphone,
  MonitorSmartphone: MonitorSmartphone,
  BatteryCharging: BatteryCharging,
  Zap: Zap,
  Cpu: Cpu,
  Camera: Camera,
  Terminal: Terminal
};

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "flagship", label: "iPhone & Android" },
    { id: "hardware", label: "Screen & Battery" },
    { id: "micro", label: "Chip & Motherboard" }
  ];

  const filteredServices = REPAIR_SERVICES.filter(service => {
    if (activeFilter === "all") return true;
    if (activeFilter === "flagship") return service.id === "iphone-repair" || service.id === "android-repair";
    if (activeFilter === "hardware") return service.id === "display-replacement" || service.id === "battery-replacement" || service.id === "charging-port-repair";
    if (activeFilter === "micro") return service.id === "motherboard-repair" || service.id === "camera-repair" || service.id === "software-troubleshooting";
    return true;
  });

  return (
    <section id="services" className="py-12 lg:py-16 bg-[#E9E8F8] relative">
      {/* Background accents in Powdered Blue & Sunset Peach */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8DB9F0]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F5B69E]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#8DB9F0]/30 shadow-subtle mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#8DB9F0]" />
            <span className="text-[11px] uppercase tracking-luxury font-mono text-[#5C6079] font-bold">
              Specialist Repair Lab
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1B1E2E] tracking-tight mb-2.5">
            <span className="font-display font-extrabold uppercase">Precision Meets</span>{" "}
            <span className="font-luxury italic font-medium text-4xl sm:text-5xl lg:text-6xl text-[#8DB9F0]">
              Technology.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C6079] max-w-2xl mx-auto">
            Professional repair solutions for your everyday devices with certified component care.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] text-[#1B1E2E] shadow-glow-blue'
                    : 'bg-white/80 text-[#5C6079] hover:text-[#1B1E2E] border border-[#8DB9F0]/30 hover:border-[#8DB9F0] shadow-subtle'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Repair Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, index) => {
            const Icon = iconComponents[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative bg-white/95 rounded-[24px] border border-[#8DB9F0]/30 hover:border-[#8DB9F0] overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-card-soft hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-40 w-full overflow-hidden bg-black/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Badge in Sunset Peach */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[#F5B69E] border border-[#F5B69E]/40 font-bold shadow-sm">
                    {service.badge}
                  </span>

                  {/* Icon circle floating in Powdered Blue */}
                  <div className="absolute bottom-2.5 left-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-[#8DB9F0]/40 flex items-center justify-center text-[#8DB9F0] group-hover:border-[#8DB9F0] transition-colors shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#1B1E2E] mb-1 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#8DB9F0] font-bold mb-2">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-[#5C6079] line-clamp-2 leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Common Issues Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {service.commonIssues.slice(0, 3).map((issue, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-[#E9E8F8] border border-[#8DB9F0]/25 rounded-md px-1.5 py-0.5 text-[#1B1E2E] font-medium"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct WhatsApp Enquiry CTA */}
                  <div className="pt-3 border-t border-[#8DB9F0]/20">
                    <a
                      href={getWhatsAppLink(service.whatsappPreset)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-full text-xs font-display font-bold text-[#1B1E2E] bg-gradient-to-r from-[#8DB9F0] to-[#F5B69E] hover:from-[#7AAAE6] hover:to-[#EFA68B] shadow-glow-blue flex items-center justify-center gap-1.5 transition-all active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1B1E2E]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
