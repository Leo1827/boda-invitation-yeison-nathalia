// src/app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Pinyon_Script, Playfair_Display, Ms_Madi } from 'next/font/google'; 
import '@/styles/globals.css';
import PageTransition from '@/components/PageTransition';
import Preloader from "@/components/sections/Preloader";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
});

// Fuente Script moderna y fluida que imita el trazo manuscrito de la imagen
const msMadi = Ms_Madi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ms-madi', // Mapeamos la variable CSS
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Boda Jason & Nathalia",
  description: "Invitación digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${pinyonScript.variable} ${playfair.variable} ${msMadi.variable}`}>
      <body className="antialiased font-cormorant">
        <Preloader />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}