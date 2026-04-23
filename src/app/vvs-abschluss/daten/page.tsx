"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "24";
  
  const planName = plan === "1" ? "1 Monat" : plan === "12" ? "12 Monate" : "24 Monate";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    street: "",
    zip: "",
    city: "",
    gender: "",
    phone: "",
    accountHolder: "",
    iban: "",
    agb: false,
    privacy: false,
    sepa: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Hier die Webhook-URL anpassen (z. B. n8n Test-URL oder Production-URL)
    const webhookUrl = process.env.NEXT_PUBLIC_VVS_CHECKOUT_WEBHOOK || "https://drwintergrochollteam.app.n8n.cloud/webhook/vvs-onboarding-daten";

    try {
      const payload = {
        ...formData,
        plan,
        planName
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/vvs-abschluss/bestaetigung");
      } else {
        console.error("Webhook error:", response.status, response.statusText);
        setSubmitError("Es gab ein Problem bei der Übermittlung. Bitte versuchen Sie es noch einmal.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmitError("Es konnte keine Verbindung hergestellt werden. Bitte versuchen Sie es noch einmal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name === "iban") {
      let raw = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      let formattedIban = raw.match(/.{1,4}/g)?.join(" ") || "";
      
      setFormData((prev) => ({
        ...prev,
        [name]: formattedIban,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-50 flex-grow font-sans text-gray-900 pb-16">
      
      {/* HEADER SECTION WITH LOGOS */}
      <header className="w-full pt-6 pb-6 px-4 md:px-6 flex justify-center bg-[#1B3660] shadow-md z-20">
        <div className="flex items-center gap-3 md:gap-8 bg-transparent">
            <Link href="https://www.drwinter-portfolios.de" target="_blank" rel="noopener noreferrer" className="relative w-48 h-20 md:w-64 md:h-24 block transition-transform hover:scale-105">
                <Image
                    src="/images/logo-finance.svg"
                    alt="Dr. Winter & Grocholl Team"
                    fill
                    className="object-contain"
                />
            </Link>
            <span className="text-gray-400 text-xl md:text-3xl font-light px-1 md:px-0">×</span>
            <Link href="https://liberty-powerhouse.de" target="_blank" rel="noopener noreferrer" className="relative w-40 h-20 md:w-56 md:h-24 block transition-transform hover:scale-105">
                <Image
                    src="/images/logo-fitness-text.svg"
                    alt="Liberty Powerhouse"
                    fill
                    className="object-contain"
                />
            </Link>
        </div>
      </header>

      {/* MULTI-STEP INDICATOR & BADGE */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Step Indicator */}
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link href="/vvs-abschluss" className="flex items-center gap-2 text-gray-500 hover:text-[#1B3660] transition-colors cursor-pointer group">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 group-hover:bg-gray-300 flex items-center justify-center text-gray-600 transition-colors">1</div>
             <span className="hidden sm:inline">Mitgliedschaft</span>
          </Link>
          <div className="w-6 md:w-8 h-[2px] bg-gray-300"></div>
          <div className="flex items-center gap-2 text-[#1B3660]">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#1B3660] font-bold shadow-sm">2</div>
             <span>Daten</span>
          </div>
          <div className="w-6 md:w-8 h-[2px] bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-400">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">3</div>
             <span className="hidden sm:inline">Bestätigung</span>
          </div>
        </div>

        {/* Selected Plan Badge */}
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37] text-[#1B3660] px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 overflow-hidden">
           <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
           <span className="truncate">Gewählte Mitgliedschaft: {planName}</span>
        </div>
      </div>

      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-6 pb-12 flex-grow flex flex-col">
        <div className="w-full mb-6">
           <Link href="/vvs-abschluss" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1B3660] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              Zurück zur Mitgliedschaftsauswahl
           </Link>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1B3660] mb-10 text-center drop-shadow-sm">
          Aktivieren Sie Ihre exklusiven VVS-Sonderkonditionen
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* MAIN FORM */}
          <form onSubmit={handleSubmit} className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            
            {/* Block 1: Ihr Grundprofil */}
            <h2 className="text-xl font-bold text-[#1B3660] mb-6 border-b border-gray-100 pb-2">1. Ihre Daten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Vorname *</label>
                 <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Nachname *</label>
                 <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1 md:col-span-2">
                 <label className="text-sm font-semibold text-gray-700">E-Mail-Adresse *</label>
                 <input required type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Geburtsdatum *</label>
                 <input required type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none text-gray-600" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Geschlecht *</label>
                 <select required name="gender" value={formData.gender} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none bg-white">
                   <option value="">Bitte wählen...</option>
                   <option value="male">Männlich</option>
                   <option value="female">Weiblich</option>
                   <option value="diverse">Divers</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1 md:col-span-2">
                 <label className="text-sm font-semibold text-gray-700">Handynummer *</label>
                 <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1 md:col-span-2">
                 <label className="text-sm font-semibold text-gray-700">Straße & Hausnummer *</label>
                 <input required type="text" name="street" value={formData.street} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">PLZ *</label>
                 <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Ort *</label>
                 <input required type="text" name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
            </div>

            {/* Block 2: Zahlungsdaten & Mandat */}
            <h2 className="text-xl font-bold text-[#1B3660] mb-6 border-b border-gray-100 pb-2 mt-8">2. Zahlungsdaten & Mandat</h2>
            <div className="grid grid-cols-1 gap-5 mb-8">
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">Kontoinhaber *</label>
                 <input required type="text" name="accountHolder" value={formData.accountHolder} onChange={handleChange} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none" />
               </div>
               <div className="flex flex-col gap-1">
                 <label className="text-sm font-semibold text-gray-700">IBAN *</label>
                 <input required type="text" name="iban" value={formData.iban} onChange={handleChange} maxLength={27} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none font-mono tracking-widest uppercase text-sm" />
               </div>
            </div>

            {/* Block 3: Abschluss */}
            <h2 className="text-xl font-bold text-[#1B3660] mb-6 border-b border-gray-100 pb-2 mt-8">3. Abschluss</h2>
            <div className="flex flex-col gap-4 mb-8">
               <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="pt-1">
                     <input required type="checkbox" name="agb" checked={formData.agb} onChange={handleChange} className="min-w-5 min-h-5 w-5 h-5 text-[#1B3660] border-gray-300 rounded focus:ring-[#D4AF37] accent-[#1B3660]" />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">Ich akzeptiere die AGB und Mitgliedschaftsbedingungen der Liberty Powerhouse Michendorf GmbH.</span>
               </label>
               <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="pt-1">
                     <input required type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="min-w-5 min-h-5 w-5 h-5 text-[#1B3660] border-gray-300 rounded focus:ring-[#D4AF37] accent-[#1B3660]" />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">Ich akzeptiere die Datenschutzbestimmungen und stimme der Verarbeitung meiner Daten zu.</span>
               </label>
               <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="pt-1">
                     <input required type="checkbox" name="sepa" checked={formData.sepa} onChange={handleChange} className="min-w-5 min-h-5 w-5 h-5 text-[#1B3660] border-gray-300 rounded focus:ring-[#D4AF37] accent-[#1B3660]" />
                  </div>
                  <span className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">Ich erteile der Liberty Powerhouse Michendorf GmbH ein SEPA-Lastschriftmandat für den monatlichen Mitgliedsbeitrag.</span>
               </label>
            </div>

            {submitError && (
              <div className="w-full mt-4 p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center">
                {submitError}
              </div>
            )}
            <button disabled={isSubmitting} type="submit" className={`w-full mt-4 py-4 px-6 rounded-xl font-bold text-white transition-colors shadow-lg active:scale-[0.98] border relative overflow-hidden group ${isSubmitting ? 'bg-gray-400 border-gray-400 cursor-not-allowed' : 'bg-[#1B3660] hover:bg-[#152a4a] border-[#1B3660]'}`}>
               {!isSubmitting && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />}
               <div className="flex flex-col items-center relative z-10">
                 <span className="text-lg">{isSubmitting ? "Wird verarbeitet..." : "Kostenpflichtig anmelden & Rabatt aktivieren"}</span>
               </div>
            </button>
            <div className="w-full text-center mt-4">
              <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                 100% Sichere SSL-Übertragung
              </span>
            </div>
          </form>

          {/* SIDEBAR */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-6">
             
             {/* Box 1: Trust Box */}
             <div className="bg-white rounded-2xl shadow-sm border-2 border-[#D4AF37]/50 p-6 relative overflow-hidden">
                {/* Decorative sheen */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />
                
                <h3 className="text-lg font-bold text-[#1B3660] mb-4 border-b border-gray-100 pb-3 relative flex items-center gap-2">
                   <svg className="w-5 h-5 text-[#1B3660]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                   Sicher & Transparent
                </h3>
                <ul className="space-y-4 relative">
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>100 % sichere Datenübertragung (SSL)</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>Streng vertrauliche Behandlung deiner Daten</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>Transparente Vertragsbedingungen</span>
                   </li>
                </ul>
             </div>
             
             {/* Box 2: Value Reminder */}
             <div className="bg-[#1B3660]/5 rounded-2xl p-6 border border-[#1B3660]/10">
                <h3 className="text-lg font-bold text-[#1B3660] mb-4 border-b border-[#1B3660]/10 pb-3 relative">Deine Vorteile im Überblick</h3>
                <ul className="space-y-4 relative mb-5">
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>50 % Rabatt auf den regulären Mitgliedsbeitrag</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>Preisgarantie</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span>Exklusiver Zugang zum Liberty Powerhouse</span>
                   </li>
                </ul>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Durch das VVS-Strategiedepot beim Dr. Winter Grocholl Team sicherst du dir diese Konditionen dauerhaft.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* FOOTER / DISCLAIMER SECTION */}
      <footer className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-8 md:mt-4">
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 leading-relaxed text-left">
            *Sonderkonditionen VVS Strategie-Depot: Die ausgewiesenen Vorteilspreise (50 % Rabatt auf den regulären Mitgliedsbeitrag) gelten bei einem Anlagevolumen ab 25.000 € im VVS Strategie-Depot des Dr. Winter Grocholl Teams. Bei einem geringeren Anlagevolumen behält sich die Liberty Powerhouse Michendorf GmbH vor, den Rabatt anzupassen. Die finale Bestätigung der Mitgliedschaft erfolgt nach Abgleich der Einlage. Zuzüglich einmaliger Anmeldegebühr.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default function VVSCheckout() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Lade...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
