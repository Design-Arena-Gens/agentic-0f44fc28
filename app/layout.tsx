"use client";

import { ReactNode, useEffect, useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

type RootLayoutProps = {
  children: ReactNode;
};

function NoiseProvider({ children }: { children: ReactNode }) {
  const [showNoise, setShowNoise] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowNoise(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={showNoise ? "noise h-full" : undefined}>
      {children}
    </div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <NoiseProvider>{children}</NoiseProvider>
      </body>
    </html>
  );
}
