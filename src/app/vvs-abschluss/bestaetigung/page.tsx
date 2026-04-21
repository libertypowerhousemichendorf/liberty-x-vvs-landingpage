"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VVSConfirmation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-50 flex-grow font-sans text-gray-900 pb-16">
      
      {/* HEADER SECTION WITH LOGOS */}
      <header className="w-full pt-6 pb-6 px-4 md:px-6 flex justify-center bg-[#1B3660] shadow-md z-20">
        <div className="flex items-center gap-3 md:gap-8 bg-transparent">
            <Link href="https://www.drwinter-portfolios.de" target="_blank" rel="noopener noreferrer" className="relative w-40 h-16 md:w-56 md:h-20 block transition-transform hover:scale-105">
                <Image
                    src="/images/logo-finance.svg"
                    alt="Dr. Winter & Grocholl Team"
                    fill
                    className="object-contain"
                />
            </Link>
            <span className="text-gray-400 text-xl md:text-3xl font-light px-1 md:px-0">×</span>
            <Link href="https://liberty-powerhouse.de" target="_blank" rel="noopener noreferrer" className="relative w-32 h-12 md:w-48 md:h-16 block transition-transform hover:scale-105">
                <Image
                    src="/images/logo-fitness-text.svg"
                    alt="Liberty Powerhouse"
                    fill
                    className="object-contain"
                />
            </Link>
        </div>
      </header>

      {/* MULTI-STEP INDICATOR */}
      <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mt-12 flex justify-center mb-6">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <div className="flex items-center gap-2 text-gray-400">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">1</div>
             <span className="hidden sm:inline">Mitgliedschaft</span>
          </div>
          <div className="w-6 md:w-8 h-[2px] bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-400">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">2</div>
             <span className="hidden sm:inline">Daten</span>
          </div>
          <div className="w-6 md:w-8 h-[2px] bg-[#D4AF37]"></div>
          <div className="flex items-center gap-2 text-[#1B3660]">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#1B3660] font-bold shadow-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
             </div>
             <span>Bestätigung</span>
          </div>
        </div>
      </div>

      <section className="w-full max-w-3xl mx-auto px-4 md:px-6 pt-6 pb-12 flex-grow flex flex-col items-center">
        
        {/* SUCCESS MESSAGE */}
        <div className="flex flex-col items-center text-center mb-12">
           <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 border-4 border-[#D4AF37]/20 relative">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              {/* Optional glowing effect */}
              <div className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/10 opacity-75"></div>
           </div>
           
           <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1B3660] mb-4">
             Herzlichen Glückwunsch &amp; Willkommen im Club!
           </h1>
           <p className="text-lg md:text-xl text-[#1B3660]/80 font-medium max-w-2xl px-4">
             Ihre Anmeldung war erfolgreich. Ihr exklusiver VVS-Vorteilstarif ist nun aktiv.
           </p>
        </div>

        {/* INFO BOX: NÄCHSTE SCHRITTE */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-[#D4AF37]/30 p-6 md:p-10 mb-12 relative overflow-hidden">
           {/* Subtle corner accent */}
           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent pointer-events-none" />
           
           <h2 className="text-xl md:text-2xl font-bold text-[#1B3660] mb-6 border-b border-gray-100 pb-4">Wie geht es jetzt weiter?</h2>
           
           <ul className="space-y-5">
             <li className="flex items-start text-left">
                <svg className="w-6 h-6 text-[#D4AF37] mr-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[#1B3660] text-sm md:text-lg leading-relaxed">Ihre Daten wurden sicher an uns übertragen und Ihr Rabatt ist im System fest hinterlegt.</span>
             </li>
             <li className="flex items-start text-left">
                <svg className="w-6 h-6 text-[#D4AF37] mr-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[#1B3660] text-sm md:text-lg leading-relaxed">Sie können ab sofort bei uns in Michendorf vorbeikommen und direkt mit dem Training starten. Melden Sie sich bei Ihrem ersten Besuch einfach kurz am Frontdesk.</span>
             </li>
             <li className="flex items-start text-left">
                <svg className="w-6 h-6 text-[#D4AF37] mr-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[#1B3660] text-sm md:text-lg leading-relaxed">Alle Unterlagen zu Ihrem neuen VVS Strategie-Depot erhalten Sie in Kürze separat durch das Dr. Winter Grocholl Team.</span>
             </li>
             <li className="flex items-start text-left">
                <svg className="w-6 h-6 text-[#D4AF37] mr-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                <span className="text-[#1B3660] text-sm md:text-lg leading-relaxed">Wir haben Ihnen soeben eine E-Mail mit allen Vertragsdetails sowie dem Link zu unserer Studio-App zugesendet.</span>
             </li>
           </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="w-full flex justify-center">
           <Link href="/" className="group relative w-full sm:w-auto">
             <button className="w-full sm:w-auto py-4 md:py-5 px-6 md:px-10 rounded-full font-bold text-base md:text-lg text-white bg-[#1B3660] hover:bg-[#152a4a] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] border border-transparent overflow-hidden">
               <span className="relative z-10 flex items-center justify-center gap-3">
                 Zurück zur Liberty Powerhouse Website
                 <svg className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </span>
             </button>
           </Link>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full mt-auto py-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center px-4 max-w-xl mx-auto">
          Wir freuen uns auf Sie! Bei Fragen steht Ihnen unser Team jederzeit gerne zur Verfügung.
        </p>
      </footer>

    </div>
  );
}
