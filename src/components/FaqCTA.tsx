"use client";

export default function FaqCTA({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3660] text-center mb-12">
          Noch Fragen? Wir haben die Antworten.
        </h2>

        <div className="flex flex-col gap-4 w-full">
          {/* FAQ Item 1 */}
          <details className="bg-white rounded-xl shadow-sm group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer text-[#1B3660] font-semibold text-lg outline-none select-none">
              <span>Wie sieht der regulatorische Rahmen für mein Depot aus?</span>
              <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-left">
              Professionalität und Transparenz stehen an erster Stelle. Durch die Kooperation mit der Bank für Vermögen (BfV) AG investierst du nach strengen institutionellen Bankenstandards. Dein Depot wird rechtlich als Sondervermögen geführt – das bedeutet für dich maximale Transparenz und eine klare rechtliche Absicherung deiner Werte.
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="bg-white rounded-xl shadow-sm group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer text-[#1B3660] font-semibold text-lg outline-none select-none">
              <span>Gibt es Voraussetzungen für die Eröffnung eines Depots?</span>
              <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-left">
              Unser Ziel ist eine maßgeschneiderte Lösung, die exakt zu deiner aktuellen Lebenssituation passt. Da die exklusiven Vertragsvorteile und Anlagemodelle individuell berechnet werden, besprechen wir alle Details ganz transparent in deinem Erstgespräch. So stellen wir sicher, dass das Konzept perfekt auf deine Ziele abgestimmt ist.
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="bg-white rounded-xl shadow-sm group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer text-[#1B3660] font-semibold text-lg outline-none select-none">
              <span>Brauche ich Vorkenntnisse im Bereich Finanzen?</span>
              <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-left">
              Absolut nicht. Unser Ziel ist es, dir den Rücken freizuhalten, damit du dich voll auf dein Training und deinen Alltag konzentrieren kannst. Wir erklären dir die Strategie verständlich und übernehmen die professionelle Verwaltung deines Depots für dich.
            </div>
          </details>

          {/* FAQ Item 4 */}
          <details className="bg-white rounded-xl shadow-sm group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer text-[#1B3660] font-semibold text-lg outline-none select-none">
              <span>Wie erhalte ich die exklusiven Vertragsvorteile im Liberty Powerhouse?</span>
              <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-left">
              Der Prozess ist denkbar einfach: Nach deinem Strategiegespräch und der erfolgreichen Depoteröffnung wird dein Status direkt im System des Liberty Powerhouse hinterlegt. Du profitierst ab diesem Moment automatisch von den vereinbarten Sonderkonditionen für deine Mitgliedschaft.
            </div>
          </details>

          {/* FAQ Item 5 */}
          <details className="bg-white rounded-xl shadow-sm group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer text-[#1B3660] font-semibold text-lg outline-none select-none">
              <span>Gilt das Angebot auch für bestehende Mitglieder?</span>
              <span className="text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-left">
              Ja, absolut! Wir machen hier keinen Unterschied. Jeder, der im Liberty Powerhouse trainiert und über uns professionell für seine finanzielle Zukunft vorsorgt, hat Anspruch auf die exklusiven Vertragsvorteile – egal ob Neukunde oder langjähriges Mitglied.
            </div>
          </details>
        </div>

        {/* Exit Ramp CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpen}
            className="btn-shine bg-[#D4AF37] text-[#1B3660] hover:bg-[#F1D36C] hover:text-[#1B3660] font-bold text-lg md:text-xl px-12 py-4 rounded-full transition-colors duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.12)] tracking-wide cursor-pointer"
          >
            Jetzt Beratungstermin vereinbaren
          </button>
        </div>

      </div>
    </section>
  );
}