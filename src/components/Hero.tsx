"use client";

import Image from "next/image";
import Link from "next/link";
export default function Hero({ onOpen }: { onOpen: () => void }) {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1B3660]">
            {/* Background Image (Gym) & Overlay - Brighter! */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/gym-bg.png"
                    alt="Liberty Powerhouse Gym"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-[#1B3660]/30 mix-blend-multiply"></div>
                {/* Additional solid overlay to ensure base text legibility */}
                <div className="absolute inset-0 bg-[#1B3660]/30"></div>

                {/* Soft dark radial gradient behind the text area for contrast without an ugly box */}
                <div className="absolute left-1/2 bottom-[25%] -translate-x-1/2 w-[700px] h-[500px] bg-black/40 blur-[100px] rounded-full z-0 pointer-events-none"></div>
            </div>

            {/* Header with Clickable Logos & Smooth Dark Gradient Background */}
            <header className="absolute top-0 left-0 w-full z-50 pt-6 pb-12 flex justify-center bg-gradient-to-b from-[#1B3660]/90 to-transparent">
                <div className="flex items-center gap-6 md:gap-8 bg-transparent">
                    <Link href="https://www.drwinter-portfolios.de" target="_blank" rel="noopener noreferrer" className="relative w-40 h-16 md:w-64 md:h-24 block transition-transform hover:scale-105">
                        <Image
                            src="/images/logo-finance.svg"
                            alt="Dr. Winter & Grocholl Team"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <span className="text-white/40 text-3xl font-light">×</span>
                    <Link href="https://liberty-powerhouse.de" target="_blank" rel="noopener noreferrer" className="relative w-36 h-16 md:w-56 md:h-24 block transition-transform hover:scale-105">
                        <Image
                            src="/images/logo-fitness-text.svg"
                            alt="Liberty Powerhouse"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </div>
            </header>

            {/* Couple Image with Fake-Out Effect (Massive & Bound to Bottom) */}
            <div className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] lg:max-w-5xl h-[78vh] md:h-[92vh] z-10 pointer-events-none flex items-end justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/paar-rim-light.png"
                        alt="Lächelndes Pärchen"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>

            {/* Text & Button Block – Hyper-Clean: Headline + CTA only */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[72%] md:top-[70%] -translate-y-1/2 w-full max-w-3xl px-6 z-20 flex flex-col items-center text-center gap-6 md:gap-8">
                <h1 className="max-w-2xl mx-auto text-3xl md:text-5xl font-extrabold text-white tracking-wider leading-[1.1] uppercase drop-shadow-xl [text-shadow:_0_6px_20px_rgb(0_0_0_/_90%)]">
                    DEPOT STARTEN &amp; VERTRAGSVORTEILE SICHERN.
                </h1>

                <button
                    onClick={onOpen}
                    className="btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-lg md:text-xl px-12 py-4 rounded-full hover:bg-[#F1D36C] hover:text-[#1B3660] transition-colors duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.8)] tracking-wide cursor-pointer"
                >
                    Jetzt Beratungstermin vereinbaren
                </button>
            </div>

            {/* Bottom Gradient Overlay (The New Fade-Out Technique) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#1B3660] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}