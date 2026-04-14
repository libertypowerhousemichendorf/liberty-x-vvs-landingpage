export default function StoryTrust() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Upper Area: The Story */}
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3660] leading-tight md:leading-tight mb-8">
            Wahre Stärke beginnt bei der Gesundheit – körperlich und finanziell.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-[#1B3660]">Dein Workout zahlt sich aus. Dein Geld auch?</span> Wir glauben: Wer in seinen Körper investiert, sollte auch sein Vermögen trainieren. Baue mit den Experten vom Dr. Winter Team professionell dein Depot auf und profitiere von jahrzehntelanger Börsenerfahrung.
          </p>
        </div>

        {/* Lower Area: 3 Trust Pillars */}
        <div className="mt-20 md:mt-28 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Pillar 1: Expertise */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 bg-white p-5 rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#D4AF37]">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1B3660] mb-4">
              Über 35 Jahre Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Verlasse dich auf jahrzehntelange Börsenerfahrung. Deine Strategie und Betreuung
              erfolgt durch Dr. Petra Winter und Steffen Grocholl.
            </p>
          </div>

          {/* Pillar 2: Security */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 bg-white p-5 rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#D4AF37]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1B3660] mb-4">
              Sicherheit auf Banken-Niveau
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Durch unsere Kooperation mit der Bank für Vermögen (BfV) AG investierst du nach strengen institutionellen Standards: 100% rechtssichere Depotführung und maximale Transparenz.
            </p>
          </div>

          {/* Pillar 3: Performance */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-6 bg-white p-5 rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-[#D4AF37]">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1B3660] mb-4">
              Bewiesene Strategie
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Profitiere von Strategien, die performen: +67,5 % Rendite in 28 Monaten (Stand 03/2026).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}