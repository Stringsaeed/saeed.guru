import { SiBluesky, SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { format } from 'date-fns';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="flex flex-col justify-center text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <article className="space-y-8">
          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl sm:leading-relaxed">
            Software engineer specializing in React Native and mobile development, based in Dubai.
            Currently building financial products at{' '}
            <a
              href="https://thndr.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Thndr
            </a>
            . Previously at{' '}
            <a
              href="https://business.dubizzle.com/?page_id=2444"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Dubizzle
            </a>
            ,{' '}
            <a
              href="https://du.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Du
            </a>
            , and{' '}
            <a
              href="https://nomobank.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Nomo
            </a>
            , working across fintech, classifieds, and telecom.
          </p>

          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl sm:leading-relaxed">
            Seven years of shipping apps that people use daily. I care about performance, clean
            interfaces, and getting the details right.
          </p>

          {latestPost && (
            <div className="border-t border-border pt-8">
              <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground/50">
                Latest
              </p>
              <Link
                href={latestPost.url}
                className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <span className="font-medium">{latestPost.title}</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <p className="mt-1 text-sm text-muted-foreground/60">
                {format(new Date(latestPost.date), 'MMMM yyyy')}
              </p>
            </div>
          )}

          <nav className="flex items-center gap-5 pt-4 text-muted-foreground">
            <a
              href="mailto:stringsaeed@gmail.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://linkedin.com/in/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://github.com/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <SiGithub className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://x.com/stringsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="X"
            >
              <SiX className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://bsky.app/profile/saeed.guru"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="Bluesky"
            >
              <SiBluesky className="h-[18px] w-[18px]" />
            </a>
          </nav>
        </article>
      </div>
    </div>
  );
}
