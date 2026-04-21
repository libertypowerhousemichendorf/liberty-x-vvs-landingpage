"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VVSAbschluss() {
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

      {/* MULTI-STEP INDICATOR */}
      <div className="w-full max-w-3xl mx-auto px-4 md:px-6 mt-8 flex justify-center mb-0 md:mb-4">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <div className="flex items-center gap-2 text-[#1B3660]">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#1B3660] font-bold shadow-sm">1</div>
             <span>Mitgliedschaft</span>
          </div>
          <div className="w-6 md:w-8 h-[2px] bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-400">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">2</div>
             <span className="hidden sm:inline">Daten</span>
          </div>
          <div className="w-6 md:w-8 h-[2px] bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-400">
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">3</div>
             <span className="hidden sm:inline">Bestätigung</span>
          </div>
        </div>
      </div>

      {/* MAIN TEXT SECTION */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-8 pb-12 text-center flex-grow flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm font-sans">
          Sichern Sie sich Ihre exklusive VVS-Vorteilsmitgliedschaft
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-[#1B3660] mb-6 max-w-4xl mx-auto leading-relaxed">
          Herzlichen Glückwunsch! Durch Ihr VVS Strategie-Depot beim Dr. Winter Grocholl Team trainieren Sie im Liberty Powerhouse jetzt mit 50 % Rabatt.
        </h2>
        <p className="text-lg text-gray-700 w-full whitespace-nowrap mb-10 overflow-hidden text-ellipsis md:overflow-visible">
          Wählen Sie einfach Ihre gewünschte Laufzeit aus und starten Sie ab sofort mit dem Training.
        </p>

        {/* PRICING TABLE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 mx-auto w-full max-w-5xl items-stretch">
          
          {/* BOX 1: 1 MONAT */}
          <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
             {/* Subtle gradient hover effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-8">1 Monat</h3>
              
              <div className="mb-6">
                 <p className="text-sm text-gray-400 line-through mb-1">Statt 59,90 €</p>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-bold text-gray-900">29,95 €</span>
                   <span className="text-gray-500 font-medium">/ mtl.*</span>
                 </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-8 border border-gray-100">
                <p className="text-sm font-semibold text-gray-700">Monatlich kündbar</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {['Hochmoderne Cardio- & Kraftgeräte', 'Zugang zur studioeigenen App', 'Freie Gewichte & Functional Training', 'Inklusive Duschen'].map((feature, i) => (
                  <li key={i} className="flex items-start justify-start text-sm text-gray-600 text-left">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/vvs-abschluss/daten?plan=1" className="block w-full mt-auto">
                <button className="w-full py-4 px-6 rounded-xl font-semibold text-gray-900 bg-gray-100 hover:bg-[#D4AF37] hover:text-[#1B3660] transition-colors border border-transparent">
                  Auswählen
                </button>
              </Link>
            </div>
          </div>

          {/* BOX 2: PREMIUM (HIGHLIGHTED) */}
          <div className="flex flex-col bg-white rounded-3xl shadow-xl border-2 border-[#1B3660] p-8 hover:-translate-y-1 transition-transform relative overflow-hidden z-10 md:scale-105 group">
            {/* Best Deal Badge */}
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#1B3660] text-xs font-bold px-4 py-2 rounded-bl-lg rounded-tr-xl uppercase tracking-widest shadow-sm">
              Bester Deal
            </div>
            {/* Subtle background glow */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#1B3660]/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[#1B3660] mb-8">24 Monate</h3>
              
              <div className="mb-6">
                 <p className="text-sm text-gray-400 line-through mb-1">Statt 39,90 €</p>
                 <div className="flex items-baseline gap-1">
                   <span className="text-5xl font-extrabold text-gray-900 tracking-tight">19,95 €</span>
                   <span className="text-gray-500 font-medium">/ mtl.*</span>
                 </div>
              </div>

              <div className="bg-[#1B3660]/5 rounded-lg p-3 mb-8 border border-[#1B3660]/20">
                <p className="text-sm font-semibold text-[#1B3660]">24 Monate Laufzeit</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {['Hochmoderne Cardio- & Kraftgeräte', 'Zugang zur studioeigenen App', 'Freie Gewichte & Functional Training', 'Inklusive Duschen'].map((feature, i) => (
                  <li key={i} className="flex items-start justify-start text-sm text-gray-700 font-medium text-left">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/vvs-abschluss/daten?plan=24" className="block w-full mt-auto">
                <button className="w-full py-4 px-6 rounded-xl font-semibold text-gray-900 bg-gray-100 hover:bg-[#D4AF37] hover:text-[#1B3660] transition-colors border border-transparent shadow-sm hover:shadow-md">
                  Auswählen
                </button>
              </Link>
            </div>
          </div>

          {/* BOX 3: 12 MONATE */}
          <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-8">12 Monate</h3>
              
              <div className="mb-6">
                 <p className="text-sm text-gray-400 line-through mb-1">Statt 49,90 €</p>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-bold text-gray-900">24,95 €</span>
                   <span className="text-gray-500 font-medium">/ mtl.*</span>
                 </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-8 border border-gray-100">
                <p className="text-sm font-semibold text-gray-700">12 Monate Laufzeit</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {['Hochmoderne Cardio- & Kraftgeräte', 'Zugang zur studioeigenen App', 'Freie Gewichte & Functional Training', 'Inklusive Duschen'].map((feature, i) => (
                  <li key={i} className="flex items-start justify-start text-sm text-gray-600 text-left">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/vvs-abschluss/daten?plan=12" className="block w-full mt-auto">
                <button className="w-full py-4 px-6 rounded-xl font-semibold text-gray-900 bg-gray-100 hover:bg-[#D4AF37] hover:text-[#1B3660] transition-colors border border-transparent">
                  Auswählen
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* FOOTER / DISCLAIMER SECTION */}
      <footer className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 leading-relaxed text-justify md:text-left">
            *Sonderkonditionen VVS Strategie-Depot: Die ausgewiesenen Vorteilspreise (50 % Rabatt auf den regulären Mitgliedsbeitrag) gelten bei einem Anlagevolumen ab 25.000 € im VVS Strategie-Depot des Dr. Winter Grocholl Teams. Bei einem geringeren Anlagevolumen behält sich die Liberty Powerhouse Michendorf GmbH vor, den Rabatt anzupassen. Die finale Bestätigung der Mitgliedschaft erfolgt nach Abgleich der Einlage. Zuzüglich einmaliger Anmeldegebühr.
          </p>
        </div>
      </footer>

    </div>
  );
}
