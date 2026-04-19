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
            <header className="absolute top-0 left-0 w-full z-50 pt-8 pb-12 px-6 flex justify-center bg-gradient-to-b from-[#1B3660]/90 to-transparent">
                <div className="flex items-center gap-3 md:gap-8 bg-transparent">
                    <Link href="https://www.drwinter-portfolios.de" target="_blank" rel="noopener noreferrer" className="relative w-48 h-20 md:w-64 md:h-24 block transition-transform hover:scale-105">
                        <Image
                            src="/images/logo-finance.svg"
                            alt="Dr. Winter & Grocholl Team"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <span className="text-gray-400 text-sm md:text-3xl font-light px-1 md:px-0">×</span>
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

            {/* Couple Image with Fake-Out Effect (Massive & Bound to Bottom) */}
            {/* On mobile, we force the container to be 160% to 180% of the viewport width. 
                This art-directs the cutout so the couple is massive, prominent, and their faces are in clear focus instead of getting lost in the distance. */}
            <div className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 w-[180%] sm:w-[140%] md:w-full md:max-w-[1000px] lg:max-w-5xl h-[78vh] md:h-[92vh] z-10 pointer-events-none flex items-end justify-center">
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
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-auto md:top-[70%] translate-y-0 md:-translate-y-1/2 w-full max-w-3xl px-6 pb-[calc(env(safe-area-inset-bottom)+3rem)] md:pb-0 z-20 flex flex-col items-center text-center gap-5 md:gap-8">
                <h1 className="max-w-2xl mx-auto text-[28px] md:text-5xl font-extrabold text-white tracking-widest leading-snug md:leading-[1.1] uppercase drop-shadow-xl [text-shadow:_0_6px_20px_rgb(0_0_0_/_90%)]">
                    DEPOT STARTEN &amp; VERTRAGSVORTEILE SICHERN.
                </h1>

                <button
                    onClick={onOpen}
                    className="w-full max-w-[90%] md:w-auto btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-[17px] md:text-xl px-4 md:px-12 py-3 md:py-4 rounded-full hover:bg-[#F1D36C] hover:text-[#1B3660] transition-colors duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.8)] tracking-wide cursor-pointer"
                >
                    Jetzt Beratungstermin vereinbaren
                </button>
            </div>

            {/* Bottom Gradient Overlay (The New Fade-Out Technique) */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#1B3660] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}