import SocialLinks from '@/components/social-links';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you&#39;re looking for doesn&#39;t exist or has been moved.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <Link href="/">
            <Button size="lg" className="mr-4">
              Go Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" size="lg">
              Read Blog
            </Button>
          </Link>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}
