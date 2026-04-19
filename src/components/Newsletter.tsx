"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setSubmitted(true);
    };

    return (
        <section className="relative w-full bg-[#F4F2EE] px-4 sm:px-6 pt-48 pb-24 md:py-32 -mt-12 md:mt-0 z-0">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center gap-8 md:gap-10">
                
                {/* Text */}
                <div className="max-w-2xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B3660] mb-4 leading-tight">
                        Willst du noch mehr wissen?
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Melde dich für unseren Newsletter an und erhalte regelmäßige Updates und Expertentipps zu modernem Vermögensaufbau.
                    </p>
                </div>
                
                {/* Form (Wide, Stacked below Text) */}
                <div className="w-full max-w-2xl">
                    {submitted ? (
                        <div className="flex items-center justify-center gap-3 text-[#1B3660] font-bold py-4 text-lg bg-gray-50 rounded-xl border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            Danke! Du bist dabei.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@beispiel.de"
                                className="flex-1 w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-base outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="bg-[#D4AF37] hover:bg-[#F1D36C] text-[#1B3660] font-bold text-base px-10 py-4 rounded-xl transition-colors duration-300 shadow-md cursor-pointer whitespace-nowrap"
                            >
                                Jetzt anmelden
                            </button>
                        </form>
                    )}
                </div>
                
            </div>
        </section>
    );
}
