import { Providers } from "@/store/provider";
import type { Metadata } from "next";

import { Teko, Lato, Open_Sans, Merriweather } from 'next/font/google';

const teko = Teko({
  subsets: ['latin'],
  weight: ['700'],
  variable: "--font-teko"
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-lato"
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-openSans"
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700'],
  variable: "--font-merriweather"
})

export const metadata: Metadata = {
  title: "Louis Alemar - Front-End Developer"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${lato.variable} ${openSans.variable} ${merriweather.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
