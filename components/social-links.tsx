import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { SiX, SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <footer className="flex space-x-4">
      <Link href="mailto:stringsaeed@gmail.com" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-colors hover:border-primary hover:text-primary"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
      <Link href="https://linkedin.com/in/stringsaeed" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-colors hover:border-primary hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="https://github.com/stringsaeed" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-colors hover:border-primary hover:text-primary"
        >
          <SiGithub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="tel:+971501361648" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-colors hover:border-primary hover:text-primary"
        >
          <Phone className="h-5 w-5" />
          <span className="sr-only">Phone</span>
        </Button>
      </Link>
      <Link href="https://x.com/stringsaeed" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full transition-colors hover:border-primary hover:text-primary"
        >
          <SiX className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
    </footer>
  );
}
