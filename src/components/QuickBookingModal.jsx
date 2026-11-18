import React, { useState, useEffect } from 'react';
import { X, Wrench, MessageSquare, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';
import { REPAIR_SERVICES } from '../data/services';

export default function QuickBookingModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "Apple",
    model: "",
    serviceId: preselectedService ? preselectedService.id : "iphone-repair",
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceId: preselectedService.id }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid phone number.";
    }
    if (!formData.model.trim()) errs.model = "Device model is required (e.g. iPhone 13 / S23).";
    return errs;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const currentSrv = REPAIR_SERVICES.find(s => s.id === formData.serviceId);
    const serviceTitle = currentSrv ? currentSrv.title : "Smartphone Repair";

    const msg = `Hello FIX BY SHIVAM,
I would like to book a repair diagnosis:
• Customer: ${formData.name}
• Contact: ${formData.phone}
• Device: ${formData.brand} (${formData.model})
• Service: ${serviceTitle}
• Additional notes: ${formData.notes || "None"}`;

    window.open(getWhatsAppLink(msg), '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-[32px] border border-black/10 p-6 sm:p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
      >
        {/* Top Metallic Edge */}
        <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/60 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F5F5F7] hover:bg-black/10 flex items-center justify-center text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-sora text-xl font-bold text-[#1D1D1F]">
              Book a Repair Diagnosis
            </h3>
            <span className="text-xs text-[#6E6E73] font-mono">
              FIX BY SHIVAM • Fast Turnaround
            </span>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00] flex items-center justify-center text-[#FF6B00] mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-sora text-xl font-bold text-[#1D1D1F] mb-2">
              WhatsApp Chat Prepared
            </h4>
            <p className="text-xs text-[#6E6E73] max-w-xs mb-6">
              Your device diagnosis request has been launched. Our technician will review the specifications immediately.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#FF6B00] hover:bg-[#FF8533] shadow-glow-orange"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                Repair Service
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border border-black/10 text-xs sm:text-sm text-[#1D1D1F] focus:bg-white focus:outline-none focus:border-[#FF6B00]"
              >
                {REPAIR_SERVICES.map(srv => (
                  <option key={srv.id} value={srv.id} className="bg-white text-[#1D1D1F]">
                    {srv.title} ({srv.subtitle})
                  </option>
                ))}
              </select>
            </div>

            {/* Brand & Model */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                  Brand
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border border-black/10 text-xs sm:text-sm text-[#1D1D1F] focus:bg-white focus:outline-none focus:border-[#FF6B00]"
                >
                  <option value="Apple">Apple iPhone</option>
                  <option value="Samsung">Samsung Galaxy</option>
                  <option value="Google">Google Pixel</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Xiaomi">Xiaomi / Redmi</option>
                  <option value="Other">Other Device</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                  Model *
                </label>
                <input
                  type="text"
                  placeholder="e.g. iPhone 14 Pro"
                  value={formData.model}
                  onChange={(e) => {
                    setFormData({ ...formData, model: e.target.value });
                    if (errors.model) setErrors({ ...errors, model: null });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border text-xs sm:text-sm text-[#1D1D1F] placeholder-black/40 focus:bg-white focus:outline-none ${errors.model ? 'border-red-500' : 'border-black/10 focus:border-[#FF6B00]'
                    }`}
                />
                {errors.model && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.model}</span>}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border text-xs sm:text-sm text-[#1D1D1F] placeholder-black/40 focus:bg-white focus:outline-none ${errors.name ? 'border-red-500' : 'border-black/10 focus:border-[#FF6B00]'
                    }`}
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border text-xs sm:text-sm text-[#1D1D1F] placeholder-black/40 focus:bg-white focus:outline-none ${errors.phone ? 'border-red-500' : 'border-black/10 focus:border-[#FF6B00]'
                    }`}
                />
                {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#6E6E73] font-medium mb-1.5">
                Issue Description (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe the symptoms..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F7] border border-black/10 text-xs sm:text-sm text-[#1D1D1F] placeholder-black/40 focus:bg-white focus:outline-none focus:border-[#FF6B00] resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-full font-sora font-semibold text-sm text-white bg-[#FF6B00] hover:bg-[#FF8533] shadow-glow-orange flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm & Send to WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
