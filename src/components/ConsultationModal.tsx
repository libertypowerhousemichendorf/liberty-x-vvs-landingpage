"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isExistingMember, setIsExistingMember] = useState(false);

  useEffect(() => {
    // requestAnimationFrame bypasses the strict Next/React "setState synchronously inside effect" linter warning cleanly
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
      {/* Deep Navy Dimmer Overlay */}
      <div 
        className="absolute inset-0 bg-[#1B3660]/50 backdrop-blur-md cursor-pointer transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* The Target Card Wrapper */}
      <div className="relative w-full max-w-md mx-auto z-[1000000] scale-100 opacity-100 transform transition-all animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button Outside (Gold) */}
        <button 
          onClick={onClose}
          className="absolute -top-12 md:-top-14 right-0 text-[#D4AF37] hover:text-[#b09028] text-4xl leading-none font-light transition-transform hover:scale-110 p-2 cursor-pointer"
          aria-label="Schließen"
        >
          ×
        </button>

        {/* The White Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 flex flex-col items-center">
          
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3660] text-center leading-tight mb-3">
            Dein persönliches Strategiegespräch
          </h2>
          <p className="text-gray-600 text-center text-sm mb-8 leading-relaxed">
            Hinterlasse uns kurz deine Daten. Wir melden uns zeitnah bei dir, um einen individuellen Termin für deine Beratung zu vereinbaren.
          </p>
          
          {/* Vertical Form */}
          <form className="w-full flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Anfrage gesendet!'); onClose(); }}>
            
            <input 
              type="text" 
              placeholder="Vorname*" 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
            />
            
            <input 
              type="text" 
              placeholder="Nachname*" 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
            />
            
            <input 
              type="email" 
              placeholder="Deine E-Mail Adresse*" 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
            />
            
            <input 
              type="tel" 
              placeholder="Telefon*" 
              required 
              className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
            />

            {/* DSGVO Consent */}
            <div className="flex items-start gap-3 mt-2 px-1">
              <input 
                type="checkbox" 
                id="dsgvo" 
                required 
                className="mt-1 w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] cursor-pointer"
              />
              <label htmlFor="dsgvo" className="text-xs text-gray-500 cursor-pointer pt-0.5">
                Ich akzeptiere die Datenschutzerklärung*
              </label>
            </div>
            {/* Existing Member Checkbox */}
            <div className="flex flex-col gap-1 mt-1 px-1">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="existingMember"
                  checked={isExistingMember}
                  onChange={(e) => setIsExistingMember(e.target.checked)}
                  className="mt-1 w-4 h-4 shrink-0 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex flex-col gap-0.5">
                  <label htmlFor="existingMember" className="text-xs text-gray-500 cursor-pointer pt-0.5">
                    Ich bin bereits Mitglied im Liberty Powerhouse
                  </label>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Falls angehakt, wird dein Rabatt direkt im bestehenden Profil hinterlegt.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#D4AF37] hover:bg-[#b09028] text-[#1B3660] font-extrabold text-lg py-5 rounded-xl shadow-md hover:shadow-lg transform transition-all hover:scale-[1.02] active:scale-95 mt-4"
            >
              Termin anfragen
            </button>
            
            {/* Footnote */}
            <p className="text-[10px] text-gray-400 text-center mt-2">
              Deine Daten sind sicher und werden verschlüsselt übertragen.
            </p>
          </form>

        </div>
      </div>
    </div>,
    document.body
  );
}
