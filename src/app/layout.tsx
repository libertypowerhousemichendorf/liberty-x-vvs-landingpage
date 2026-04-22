import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Winter Grocholl Team | Exklusive VVS-Aktion",
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
        <Analytics />
      </body>
    </html>
  );
}