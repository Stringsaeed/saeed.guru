import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import SocialLinks from '@/components/social-links';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Husn el Muslim',
  description:
    'Your daily fortress of authentic Islamic supplications in your pocket. Download the Husn el Muslim app for iOS.',
  keywords: ['husn el muslim', 'adhkar', 'islamic app', 'supplications', 'ios app'],
  openGraph: {
    title: 'Husn el Muslim',
    description: 'Your daily fortress of authentic Islamic supplications in your pocket.',
    url: 'https://saeed.guru/husn-el-muslim',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Husn el Muslim',
    description: 'Your daily fortress of authentic Islamic supplications in your pocket.',
  },
  alternates: { canonical: 'https://saeed.guru/husn-el-muslim' },
};

const screenshots = ['/assets/husn1.png', '/assets/husn2.png', '/assets/husn3.png'];

export default function HusnElMuslimLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-6 py-16">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            {/* Generic Islamic icon */}
            <span className="text-6xl">🕌</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-foreground">حصن المسلم</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Your daily fortress of authentic Islamic supplications (أذكار) in your pocket.
          </p>
          <Link
            href="https://apps.apple.com/us/app/حصن-المسلم-الأذكار/id6748265935"
            target="_blank"
          >
            <Button size="lg" className="px-8 py-4 text-lg">
              Download
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <section className="mb-12 w-full">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Features</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <li className="rounded-lg border bg-card p-4 text-card-foreground shadow">
              <span className="text-2xl">📖</span>
              <p className="mt-2 font-semibold">Authentic daily Adhkar (أذكار الصباح والمساء)</p>
            </li>
            <li className="rounded-lg border bg-card p-4 text-card-foreground shadow">
              <span className="text-2xl">🌙</span>
              <p className="mt-2 font-semibold">Supplications for sleep, waking, and daily life</p>
            </li>
            <li className="rounded-lg border bg-card p-4 text-card-foreground shadow">
              <span className="text-2xl">🔤</span>
              <p className="mt-2 font-semibold">Modern, easy-to-read Arabic typography</p>
            </li>
            <li className="rounded-lg border bg-card p-4 text-card-foreground shadow">
              <span className="text-2xl">🌗</span>
              <p className="mt-2 font-semibold">Light & dark mode support</p>
            </li>
          </ul>
        </section>

        {/* About Section */}
        <section className="mb-12 w-full text-center">
          <h2 className="mb-4 text-xl font-bold text-foreground">About Husn el Muslim</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Husn el Muslim brings you the most important daily Adhkar and supplications from the
            authentic Sunnah, in a clean and modern interface. Stay connected to your faith,
            wherever you are.
          </p>
        </section>

        {/* Screenshots Gallery */}
        <section className="mb-12 w-full">
          <h2 className="mb-4 text-center text-xl font-bold text-foreground">App Screenshots</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {screenshots.map((src, i) => (
              <div
                key={i}
                className="flex aspect-[9/19] items-center justify-center overflow-hidden rounded-lg border bg-card shadow"
              >
                <Image
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  width={200}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="flex w-full flex-col items-center border-t bg-background py-8">
        <SocialLinks />
        <p className="mt-4 text-xs text-muted-foreground">Built by Muhammed Saeed</p>
      </footer>
    </div>
  );
}
