import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, League_Spartan, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chromas Ensemble | A student-led, volunteer-based orchestral ensemble",
  description:
    "Support and join us for our first concert on November 16th at Dimenna Center for Classical Music!",
  icons: {
    icon: "/images/better_logo_transparent.png",
    shortcut: "/images/better_logo_transparent.png",
    apple: "/images/better_logo_transparent.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} ${leagueSpartan.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
