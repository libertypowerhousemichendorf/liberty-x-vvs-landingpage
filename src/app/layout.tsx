import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Winter & Grocholl Team x Liberty Powerhouse",
  description: "Cross-Marketing-Kampagne: Depot eröffnen & 50% auf Fitnessstudio-Mitgliedschaft sichern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}