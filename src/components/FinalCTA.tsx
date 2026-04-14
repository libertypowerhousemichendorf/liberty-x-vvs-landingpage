"use client";

export default function FinalCTA({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="w-full bg-[#1B3660] relative overflow-hidden px-6 py-16 md:py-20 lg:py-24">
      {/* Subtle top glow to feather the transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Column (Text) */}
        <div className="flex flex-col text-left max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Bereit für dein finanzielles & <br className="hidden lg:block"/> körperliches Upgrade?
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
              Sichere dir exklusive Vertragsvorteile im Liberty Powerhouse und baue gleichzeitig professionell dein Vermögen auf.
            </p>
        </div>

        {/* Right Column (CTA Button) */}
        <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onOpen}
              className="w-full md:w-auto btn-shine bg-[#D4AF37] hover:bg-[#F1D36C] text-[#1B3660] font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_15px_30px_rgba(212,175,55,0.3)] cursor-pointer whitespace-nowrap"
            >
              Jetzt Beratungstermin vereinbaren
            </button>
        </div>

      </div>
    </section>
  );
}
