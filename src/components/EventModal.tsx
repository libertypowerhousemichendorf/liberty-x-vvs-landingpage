"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isExistingMember, setIsExistingMember] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      vorname: firstName,
      nachname: lastName,
      email: email,
      telefon: phone,
      ist_mitglied: isExistingMember,
      vortrag_datum: "06.05.2026",
      vortrag_uhrzeit: "18:30 Uhr"
    };

    try {
      const response = await fetch('https://drwintergrochollteam.app.n8n.cloud/webhook/vortrag-anmeldung', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

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
      <div className="relative w-full max-w-md mx-auto z-[1000000] scale-100 opacity-100 transform transition-all animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl">
        
        {/* Close Button (Fixed positioning for mobile visibility) */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 md:top-6 md:right-8 z-[1000001] text-[#D4AF37] hover:text-[#b09028] text-4xl leading-none font-light transition-transform hover:scale-110 p-2 cursor-pointer bg-white/10 backdrop-blur-md rounded-full"
          aria-label="Schließen"
        >
          ×
        </button>

        {/* The White Card */}
        <div className="bg-white p-8 md:p-10 flex flex-col items-center">
          
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3660] text-center leading-tight mb-3">
            Unsere Experten-Vorträge
          </h2>

          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-green-500">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-gray-700 text-center text-lg font-medium leading-relaxed">
                Vielen Dank! Wir haben deine Anfrage erhalten. Unser Finanzexperte Steffen Grocholl wird sich in Kürze bei dir melden.
              </p>
              <button 
                onClick={onClose}
                className="mt-10 text-[#1B3660] font-bold hover:underline"
              >
                Fenster schließen
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-center text-sm mb-8 leading-relaxed">
                Trage deine Daten ein, um dir einen der limitierten Plätze zu sichern. Die Teilnahme ist kostenlos.
              </p>
              
              {/* Vertical Form */}
              <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                
                <input 
                  type="text" 
                  name="vorname"
                  placeholder="Vorname*" 
                  required 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
                />
                
                <input 
                  type="text" 
                  name="nachname"
                  placeholder="Nachname*" 
                  required 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
                />
                
                <input 
                  type="email" 
                  name="email"
                  placeholder="Deine E-Mail Adresse*" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
                />
                
                <input 
                  type="tel" 
                  name="telefon"
                  placeholder="Telefon*" 
                  required 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
                />

                {/* DSGVO Consent */}
                <div className="flex items-start gap-3 mt-2 px-1">
                  <input 
                    type="checkbox" 
                    id="dsgvo-event" 
                    required 
                    className="mt-1 w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] cursor-pointer"
                  />
                  <label htmlFor="dsgvo-event" className="text-xs text-gray-500 cursor-pointer pt-0.5">
                    Ich akzeptiere die Datenschutzerklärung*
                  </label>
                </div>

                {/* Existing Member Checkbox */}
                <div className="flex flex-col gap-1 mt-1 px-1">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="existingMember-event"
                      name="ist_mitglied"
                      checked={isExistingMember}
                      onChange={(e) => setIsExistingMember(e.target.checked)}
                      className="mt-1 w-4 h-4 shrink-0 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] cursor-pointer accent-[#D4AF37]"
                    />
                    <div className="flex flex-col gap-0.5">
                      <label htmlFor="existingMember-event" className="text-xs text-gray-500 cursor-pointer pt-0.5">
                        Ich bin bereits Mitglied im Liberty Powerhouse
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Hidden Fields for the Webhook / Form Payload */}
                <input type="hidden" name="vortrag_datum" value="06.05.2026" />
                <input type="hidden" name="vortrag_uhrzeit" value="18:30 Uhr" />

                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center mt-2">
                    Etwas ist schiefgelaufen. Bitte versuche es später erneut.
                  </p>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full bg-[#D4AF37] hover:bg-[#b09028] text-[#1B3660] font-extrabold text-lg py-5 rounded-xl shadow-md hover:shadow-lg transform transition-all hover:scale-[1.02] active:scale-95 mt-4 flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#1B3660]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sichern...
                    </>
                  ) : 'Platz sichern'}
                </button>
                
                {/* Footnote */}
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  Deine Daten sind sicher und werden verschlüsselt übertragen.
                </p>
              </form>
            </>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}
