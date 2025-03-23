import Link from 'next/link';
import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-32">
        <nav className="mb-16 flex items-center justify-between">
          <div>
            <Link href="/">
              <h1 className="text-xl font-bold transition-colors hover:text-primary">Saeed</h1>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <a
              href="https://github.com/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </nav>

        {children}
      </div>
    </div>
  );
}
