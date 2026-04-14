import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function AGB() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F2EE]">
      
      {/* Official Header matching Landing Page */}
      <header className="w-full relative z-50 pt-6 pb-6 flex justify-center bg-[#1B3660] shadow-md border-b border-[#D4AF37]/20">
        <div className="flex items-center gap-6 md:gap-8 bg-transparent">
          <Link href="https://www.drwinter-portfolios.de" target="_blank" rel="noopener noreferrer" className="relative w-32 h-12 md:w-56 md:h-20 block transition-transform hover:scale-105">
            <Image
              src="/images/logo-finance.svg"
              alt="Dr. Winter & Grocholl Team"
              fill
              className="object-contain"
            />
          </Link>
          <span className="text-white/40 text-2xl md:text-3xl font-light">×</span>
          <Link href="https://liberty-powerhouse.de" target="_blank" rel="noopener noreferrer" className="relative w-24 h-12 md:w-48 md:h-20 block transition-transform hover:scale-105">
            <Image
              src="/images/logo-fitness-text.svg"
              alt="Liberty Powerhouse"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content (Document Card) */}
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 md:py-16 px-4 sm:px-6 flex flex-col">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-14 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B3660] mb-8 pb-6 border-b border-gray-100">
            Allgemeine Geschäftsbedingungen
          </h1>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base md:text-lg">
            <p className="mb-4">
              Für die exklusiven Mitgliedschaften und Vertragsangebote, die auf dieser Seite beworben werden, gelten die allgemeinen Geschäftsbedingungen von <strong>Liberty Powerhouse</strong>.
            </p>
            <p className="mb-8">
              Du kannst die aktuellen und verbindlichen AGB jederzeit hier einsehen:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 flex flex-col gap-6">
              <a href="https://liberty-powerhouse.de/agb" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1B3660]/10 flex items-center justify-center text-[#1B3660] group-hover:bg-[#1B3660] group-hover:text-white transition-colors">
                  &rarr;
                </span>
                <span className="text-[#1B3660] font-semibold group-hover:text-[#D4AF37] transition-colors">
                  AGB Liberty Powerhouse
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12 md:mt-16 mb-6">
          <Link href="/" className="btn-shine bg-[#D4AF37] text-[#1B3660] font-bold text-lg md:text-xl px-10 py-4 rounded-full hover:bg-[#F1D36C] transition-colors duration-500 shadow-xl tracking-wide cursor-pointer inline-flex items-center gap-2">
            &larr; Zurück zur Startseite
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
