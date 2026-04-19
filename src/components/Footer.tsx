import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1B3660] py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center text-gray-400">
                
                {/* Legal Links */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <Link href="/impressum" className="text-sm hover:text-[#D4AF37] transition-colors">
                        Impressum
                    </Link>
                    <Link href="/datenschutz" className="text-sm hover:text-[#D4AF37] transition-colors">
                        Datenschutz
                    </Link>
                    <Link href="/agb" className="text-sm hover:text-[#D4AF37] transition-colors">
                        AGB
                    </Link>
                </nav>

                {/* Disclaimer */}
                <p className="text-xs md:text-sm max-w-2xl leading-relaxed text-gray-400 mt-2">
                    Diese Website stellt keine Anlageberatung dar. Für nähere Informationen besuchen Sie unsere Veranstaltungen und lesen den Disclaimer auf der Homepage des DrWinterGrochollTeam.
                </p>

                {/* BfV Partner Logo */}
                <div className="flex flex-col items-center gap-2 mt-2">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">In Kooperation mit der</p>
                    <Link
                        href="https://bfv-ag.de/unternehmen-b2c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                    >
                        <Image
                            src="/logos/bfv-logo.png"
                            alt="Bank für Vermögen"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500 mt-2">
                    © 2026 Dr. Winter und Grocholl Team GmbH &amp; Liberty Powerhouse. Alle Rechte vorbehalten.
                </p>

            </div>
        </footer>
    );
}