import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Saeed | React Native Engineer",
  description:
    "Portfolio of Muhammed Saeed, React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
