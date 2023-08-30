import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import * as path from "node:path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louis Alemar - Software Engineer"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
