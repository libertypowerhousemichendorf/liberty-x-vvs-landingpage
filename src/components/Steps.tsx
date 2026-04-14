interface StepsProps {
    onOpen: () => void;
}

export default function Steps({ onOpen }: StepsProps) {
    return (
        <section className="w-full bg-gradient-to-b from-[#1B3660] to-[#112540] py-20 md:py-24 px-6 relative overflow-hidden">
            {/* Optional: Subtle background pattern or gradient overlay here for extra depth, if needed later */}

            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        In 3 Schritten zu deinen Vertragsvorteilen
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Einfach, digital und komplett transparent.
                    </p>
                </div>

                {/* 3-Steps Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">

                    {/* Step 1 */}
                    <div className="group flex flex-col items-center text-center">
                        {/* Number Circle */}
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1B3660] text-3xl font-bold mb-6 shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/60">
                            1
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
                            Termin vereinbaren
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base md:text-lg">
                            Wähle deinen unverbindlichen Wunschtermin für ein 15-Minuten-Strategiegespräch.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="group flex flex-col items-center text-center">
                        {/* Number Circle */}
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1B3660] text-3xl font-bold mb-6 shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/60">
                            2
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
                            Depot eröffnen
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base md:text-lg">
                            Du eröffnest – selbstständig oder gemeinsam mit uns – dein neues, professionell verwaltetes Depot.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="group flex flex-col items-center text-center">
                        {/* Number Circle */}
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1B3660] text-3xl font-bold mb-6 shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/60">
                            3
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
                            Vertragsvorteil sichern
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base md:text-lg">
                            Sobald dein Depot aktiv ist, erhältst du deine exklusiven Sonderkonditionen für das Liberty Powerhouse und kannst unkompliziert in dein Training starten.
                        </p>
                    </div>

                </div>

                {/* Exit Ramp CTA */}
                <div className="flex justify-center mt-14">
                    <button
                        onClick={onOpen}
                        className="btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-lg md:text-xl px-12 py-4 rounded-full hover:bg-[#F1D36C] hover:text-[#1B3660] transition-colors duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)] tracking-wide cursor-pointer"
                    >
                        Jetzt Beratungstermin vereinbaren
                    </button>
                </div>
            </div>
        </section>
    );
}