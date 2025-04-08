import type { Metadata } from 'next';
import type React from 'react';

import BackButton from '@/components/back-button';
import DisableMenu from '@/components/disable-menu';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { Funnel_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';

const sans = Funnel_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Muhammed Saeed | React Native Engineer',
  description:
    'Portfolio of Muhammed Saeed, React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="mx-auto flex max-w-xl items-center gap-3 px-6 pt-32">
            <BackButton />
            <Link href="/">
              <DisableMenu className="h-10 w-10 overflow-hidden rounded-full border border-border bg-background">
                <Image src="/profile_pic.webp" alt="Saeedw picture" width={40} height={40} />
              </DisableMenu>
            </Link>
            <Link href="/">
              <h1 className="text-3xl font-bold text-foreground">Saeed</h1>
            </Link>
          </nav>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
