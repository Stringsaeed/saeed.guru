import type { Metadata, Viewport } from 'next';
import type React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Funnel_Sans } from 'next/font/google';
import Link from 'next/link';

import AnimatedAvatar from '@/components/animated-avatar';
import BackButton from '@/components/back-button';
import DisableMenu from '@/components/disable-menu';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const sans = Funnel_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://saeed.guru'),
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: 'Muhammed Saeed | React Native Engineer',
    template: '%s | Muhammed Saeed',
  },
  description:
    'Portfolio of Muhammed Saeed, React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.',
  keywords: ['react-native', 'react-native-engineer', 'react-native-developer'],
  publisher: 'Muhammed Saeed',
  authors: [{ name: 'Muhammed Saeed' }],
  generator: 'Next.js',
  referrer: 'origin',
  applicationName: 'Muhammed Saeed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saeed.guru',
    siteName: 'Muhammed Saeed',
    title: 'Muhammed Saeed | React Native Engineer',
    description:
      'React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.',
  },
  twitter: {
    card: 'summary',
    title: 'Muhammed Saeed | React Native Engineer',
    description:
      'React Native Engineer with 7+ years of experience in mobile development, UI/UX, and AI-driven applications.',
    creator: '@stringsaeed',
  },
  alternates: {
    canonical: 'https://saeed.guru',
  },
  other: {
    'p:domain_verify': '562214e39cd3971a2a538633d1ca0e40',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  colorScheme: 'dark',
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <nav
            aria-label="Site navigation"
            className="mx-auto flex max-w-2xl items-center gap-3 px-6 pt-32"
          >
            <BackButton />
            <Link href="/" aria-label="Home">
              <DisableMenu className="h-10 w-10 overflow-hidden rounded-full border border-border bg-background">
                <AnimatedAvatar />
              </DisableMenu>
            </Link>
            <Link href="/">
              <span className="text-3xl font-bold text-foreground">Saeed</span>
            </Link>
          </nav>
          <main id="main-content">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
