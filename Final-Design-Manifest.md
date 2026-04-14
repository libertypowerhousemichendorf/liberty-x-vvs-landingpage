# Master Design Manifest: Liberty X VVS

Dieses Dokument ist die Single Source of Truth für das Design und die technische Umsetzung der "Liberty X VVS" Landingpage. Es vereint strategische Marketing-Prinzipien mit konkreten Code-Beispielen und Tailwind-Spezifikationen.

---

## 1. Markenidentität & Farbpalette (Tailwind Config)

Die Farbwelt spiegelt Exklusivität, Vertrauen und finanzielle bzw. körperliche Stärke wider.

- **Primärblau (CI-Blau):** `#1B3660` (Tailwind: `bg-[#1B3660]`, `text-[#1B3660]`)
  - *Wirkung:* Vertrauen, Autorität, Seriosität.
  - *Einsatz:* Dominante Hintergründe (Sektion 4 & Footer), CTA-Boxen, primäre Headlines auf hellen Hintergründen.
- **Akzentgold (CI-Gold):** `#D4AF37` (Tailwind: `bg-[#D4AF37]`, `text-[#D4AF37]`)
  - *Wirkung:* Exklusivität, Erfolg, Premium-Charakter.
  - *Einsatz:* CTA-Buttons, Icons, feine Akzentlinien (Borders), auffällige Nummernkreise, Hover-Effekte.
- **Off-White / Warm Grey:** `#F4F2EE` / `gray-50`
  - *Wirkung:* Wärme, Hochwertigkeit, Sauberkeit.
  - *Einsatz:* Hintergründe für fließende, ruhige Übergänge (Sektion 5), kontrastierende Textbereiche.
- **Schatten (Shadows):** 
  - Karten erhalten weiche, diffuse Schatten (z.B. `shadow-sm`, `shadow-gray-200/50`).
  - Massive, hervorgehobene Elemente (Final CTA) erhalten starke Tiefenschatten (`shadow-2xl`).

---

## 2. Visueller Rhythmus & Whitespace (Spacing)

Ein Premium-Layout atmet durch Weißraum. Abschnitte dürfen niemals überladen oder gedrungen wirken.

- **Vertikales Sektions-Padding:** Standardmäßig wird exzessives Padding von `py-20` (80px) bis `py-24` (96px) verwendet, um Sektionen voneinander zu trennen und dem Auge klare Ruhepausen zu gönnen.
- **Element-Abstände (Gaps):** Innerhalb von Containern (wie Grids oder Sektionen) wird großzügiges Spacing wie `gap-8` oder `gap-12` eingesetzt (z.B. `md:gap-16` beim 3-Schritte-Grid). Dies erhöht die Lesbarkeit massiv.
- **Zentrierung:** Leitfäden, Sektions-Header und CTA-Container nutzen häufig `max-w-4xl` oder `max-w-6xl` gepaart mit `mx-auto` und `text-center`, um den Fokus mittig und ungestört zu präsentieren.

---

## 3. Die Hero-Sektion & Asset-Management ("Trinity Layout")

Die Hero-Sektion bildet den visuellen Ankerpunkt und Haupt-Conversion-Treiber. Sie muss makellos sein.

- **Gesichter als Vertrauensanker:** Die Gesichter der Protagonisten dürfen niemals von Text verdeckt werden.
- **Trinity-Positionierung:** Der absolut positionierte Text-Container (`top-[40%]`) liegt präzise auf den dunklen Brustpartien/T-Shirts der Personen.
- **Text-Kontrast & Schatten:** Um die Lesbarkeit (Weiß und Gold auf dunklem Stoff) zu optimieren, kommt ein Custom-Text-Schatten zum Einsatz: `[text-shadow:_0_4px_10px_rgb(0_0_0_/_80%)]`.
- **Fade-Out & Gradient-Masken (WICHTIG):** Um das Paar-Bild am unteren Rand ohne "Geistereffekt" weich in die nächste (weiße) Sektion übergehen zu lassen, wird nativ CSS Masking eingesetzt:
  `style={{ WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}`.
- **Overlay & Header:** Ein reduziertes Overlay (`bg-[#1B3660]/30`) liegt über dem unruhigen Studio-Hintergrundbild. Im obersten Header-Bereich liegt zusätzlich ein transparenter Gradient (`bg-gradient-to-b from-[#1B3660]/90 to-transparent`), damit die Navigations-Logos perfekt lesbar sind.

---

## 4. Responsive Logik & Grids (Mobile-First)

Die Layouts brechen mathematisch präzise von Smartphones bis zum Desktop-Monitoren um.

- **4-Spalten Vorteils-Grid (Sektion 3):**
  - **Mobile:** `grid-cols-1` (Sämtliche Kacheln fließen untereinander).
  - **Tablet:** `md:grid-cols-2` (Umbruch in zwei symmetrische Reihen).
  - **Desktop:** `lg:grid-cols-4` (Die volle Panorama-Entfaltung aller 4 Kernvorteile).
- **3-Schritte-Grid (Sektion 4):**
  - **Mobile:** `grid-cols-1`, die Elemente sind aus Platzgründen mittig zentriert.
  - **Desktop:** `md:grid-cols-3` bei Ausrichtung auf `text-left`, um dem Lesefluss (Z-Pattern) optimal entgegenzukommen.
- **Footer-Bereich:**
  - **Mobile:** `flex-col items-center gap-4` vertikal gestapeltet Struktur.
  - **Desktop:** `md:flex-row md:justify-between` für eine klassische Links-Rechts-Verteilung von Copyright und internen Menüs.

---

## 5. Interaktive Elemente & Performance

Die Landingpage funktioniert rasend schnell und bedient sich an performanten Best Practices des modernen Webdesigns.

- **FAQ-Akkordeons (Pure HTML/CSS):** 
  Wir verzichten komplett auf langsames JavaScript in den FAQs. Die Funktionalität wird über native HTML5 `<details>` und `<summary>` Tags realisiert.
  - *Styling & Masking:* Die nativen Browser-Pfeile wurden systematisch unsichtbar gemacht (`[&_summary::-webkit-details-marker]:hidden`).
  - *Interaktion:* Eigene SVG-Heroicons (Pfeile) reagieren stattdessen optisch flüssig auf den Status "geöffnet" (`transition-transform duration-300 group-open:rotate-180`).
- **Hover-Feedback:** Buttons nutzen Tailwind Transitions (`transition-transform hover:scale-105 hover:shadow-2xl`) für ein analoges, taktiles Gefühl. Normale Text-Links faden edel die Farbe ("transition-colors hover:text-[#D4AF37]").
- **Final CTA Box:** Eingebettet in extrem weiche Rundungen (`rounded-[2rem]`) wirkt die abschließende Box wie von der Seite gelöst und erzeugt massiven Fokus.
