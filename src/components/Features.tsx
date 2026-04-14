export default function Features({ onOpen }: { onOpen: () => void }) {
    return (
        <section className="w-full bg-[#F4F2EE] py-20 md:py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3660] mb-6">
                        Dein Premium-Paket im Überblick
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Sichere dir die perfekte Kombination aus professionellem Vermögensaufbau und physischer Stärke.
                    </p>
                </div>

                {/* 4 Pillars Grid (Cards) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

                    {/* Card 1: Depot */}
                    <div className="group bg-white border-t-4 border-[#D4AF37] p-8 md:p-10 rounded-2xl shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#D4AF37]/10 mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#D4AF37]">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#1B3660] mb-4">
                            Professionelles Depot
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Maßgeschneiderte Investment-Strategien, gemanagt von echten Börsenprofis für deinen langfristigen Vermögensaufbau.
                        </p>
                    </div>

                    {/* Card 2: Fitness */}
                    <div className="group bg-white border-t-4 border-[#D4AF37] p-8 md:p-10 rounded-2xl shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#D4AF37]/10 mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#D4AF37]">
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <rect x="5" y="7" width="3" height="10" rx="1" />
                                <rect x="16" y="7" width="3" height="10" rx="1" />
                                <line x1="3" y1="10" x2="3" y2="14" />
                                <line x1="21" y1="10" x2="21" y2="14" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#1B3660] mb-4">
                            Exklusive Vertragsvorteile
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Als Depot-Kunde sicherst du dir exklusive Vertragsvorteile auf deine Liberty Powerhouse Mitgliedschaft.
                        </p>
                    </div>

                    {/* Card 3: Flexibility */}
                    <div className="group bg-white border-t-4 border-[#D4AF37] p-8 md:p-10 rounded-2xl shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#D4AF37]/10 mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#D4AF37]">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#1B3660] mb-4">
                            Volle Flexibilität
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Keine starren Laufzeiten, keine versteckten Kosten. Du bleibst jederzeit Herr über deine Finanzen und deine Mitgliedschaft.
                        </p>
                    </div>

                    {/* Card 4: Support */}
                    <div className="group bg-white border-t-4 border-[#D4AF37] p-8 md:p-10 rounded-2xl shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#D4AF37]/10 mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#D4AF37]">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#1B3660] mb-4">
                            Persönlicher Support
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ein fester Ansprechpartner für all deine Fragen. Wir sind persönlich für dich da – digital, telefonisch oder vor Ort.
                        </p>
                    </div>

                </div>

                {/* Exit Ramp CTA */}
                <div className="flex justify-center mt-14">
                    <button
                        onClick={onOpen}
                        className="btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-lg md:text-xl px-12 py-4 rounded-full hover:bg-[#F1D36C] hover:text-[#1B3660] transition-colors duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.15)] tracking-wide cursor-pointer"
                    >
                        Jetzt Beratungstermin vereinbaren
                    </button>
                </div>
            </div>
        </section>
    );
}