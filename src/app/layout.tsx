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
  title: "Louis Alemar - Front-End Developer",
  description: "Meet Louis Alemar, an accomplished Front-End Developer with a rich history in web development. Specializing in React, Redux, and Next.js, and proficient in Node.js, Express, and Sequelize, his portfolio showcases innovative solutions in website functionality and design.",
  keywords: ['Louis Alemar', 'Web Developer', 'Freelance Web Developer', 'Freelance Front-End Developer', 'Front-End Developer', 'Freelance React Developer', 'React Developer', 'Freelance Front-End Engineer', 'Front-End Engineer', 'Redux', 'Next.js', 'Website Feature Development', 'User Interface', 'React UI Design', 'Collaborative Web Development', 'Engaging User Experiences', 'Professional Web Developer'],
  openGraph: {
    title: 'Louis Alemar - Front-End Developer',
    description: 'Meet Louis Alemar, an accomplished Front-End Developer with a rich history in web development. Specializing in React, Redux, and Next.js, and proficient in Node.js, Express, and Sequelize, his portfolio showcases innovative solutions in website functionality and design.',
    url: 'https://www.louisalemar.com/',
    images: [
      {
        url: 'https://www.louisalemar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-image.e993c2f6.jpg&w=1200&q=75',
        width: 1200,
        height: 1200,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louis Alemar - Front-End Developer',
    description: 'Meet Louis Alemar, an accomplished Front-End Developer with a rich history in web development. Specializing in React, Redux, and Next.js, and proficient in Node.js, Express, and Sequelize, his portfolio showcases innovative solutions in website functionality and design.',
    images: ['https://www.louisalemar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-image.e993c2f6.jpg&w=1200&q=75'],
  }
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
