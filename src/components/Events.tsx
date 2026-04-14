"use client";

import Image from "next/image";

export default function Events({ onOpenEvent }: { onOpenEvent: () => void }) {
    return (
        <section className="relative w-full h-[250vh] bg-gray-50 flex flex-col items-center">
            
            {/* 1. BACKGROUND LAYER (Sticky) */}
            {/* Height 250vh keeps the background fixed for the absolute maximum time so content can scroll out over it. */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="sticky top-0 w-full h-screen z-0 overflow-hidden bg-[#1B3660]">
                    <Image 
                        src="/vortrag-seminar.jpg"
                        alt="Info-Vortrag"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/5"></div>
                </div>
            </div>

            {/* 2. THE SCROLLING CONTENT (Reading Frame) */}
            {/* Inner height is 180vh. When this frame ends, it pushes both the Headline and Box up simultaneously! */}
            <div className="relative z-10 w-full h-[180vh] flex flex-col pointer-events-none">
                <div className="w-full h-full max-w-6xl mx-auto px-6 relative flex flex-col">

                    {/* HEADLINE */}
                    {/* Native mt-[25vh] ensures it starts lower to clear the speaker's face.
                        pb-[45vh] mathematically expands its sticky bottom-edge to explicitly match the Ticket Card's bottom edge,
                        forcing the container to push THEM BOTH out at the exact same millisecond! */}
                    <div className="mt-[25vh] sticky top-[25vh] w-full flex flex-col items-center pb-[45vh]">
                        <div className="max-w-4xl text-center">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                                Unsere Info-Vorträge
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mt-4 md:mt-6">
                                Experten-Wissen hautnah
                            </p>
                        </div>
                    </div>

                    {/* TICKET CARD */}
                    {/* Native position is ~105vh (15+~15+55 Headline + 20 mt). 
                        It starts COMPLETELY off-screen. It slides up, sticks at 55vh, and waits perfectly centered. */}
                    <div className="mt-[20vh] md:mt-[15vh] sticky top-[55vh] w-full max-w-xl mx-auto pointer-events-auto">
                        <div className="w-full bg-white rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,0.6)] border-t-4 border-[#D4AF37] overflow-hidden">

                            {/* Info Fields */}
                            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

                                {/* Field: Date */}
                                <div className="flex-1 flex flex-col items-center gap-2 px-8 py-7 bg-gray-50/60">
                                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                            <line x1="16" x2="16" y1="2" y2="6" />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line x1="3" x2="21" y1="10" y2="10" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Nächster Termin</span>
                                    <span className="text-[#1B3660] font-bold text-base text-center">6. Mai 2026 um 18:30 Uhr</span>
                                </div>

                                {/* Field: Location */}
                                <div className="flex-1 flex flex-col items-center gap-2 px-8 py-7 bg-gray-50/60">
                                    <div className="w-11 h-11 rounded-full bg-[#1B3660]/5 flex items-center justify-center text-[#1B3660]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Location</span>
                                    <span className="text-[#1B3660] font-bold text-base text-center">EMB Michendorf</span>
                                </div>
                            </div>

                            {/* CTA Area */}
                            <div className="flex flex-col items-center px-8 py-10 border-t border-gray-100 bg-white">
                                <button
                                    onClick={onOpenEvent}
                                    className="btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-lg md:text-xl px-12 py-4 rounded-full hover:bg-[#F1D36C] hover:text-[#1B3660] transition-colors duration-500 shadow-[0_15px_30px_rgba(212,175,55,0.4)] tracking-wide cursor-pointer"
                                >
                                    Jetzt Platz sichern
                                </button>
                                <p className="text-[#1B3660]/60 font-medium text-xs uppercase tracking-widest text-center mt-5">
                                    Kostenlose Teilnahme · Stark limitierte Plätze
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
