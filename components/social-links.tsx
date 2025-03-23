import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <footer className="flex space-x-4">
      <Link
        href="mailto:stringsaeed@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:text-primary hover:border-primary transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
      <Link
        href="https://linkedin.com/in/stringsaeed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:text-primary hover:border-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link
        href="https://github.com/stringsaeed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:text-primary hover:border-primary transition-colors"
        >
          <SiGithub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="tel:+971501361648" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:text-primary hover:border-primary transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="sr-only">Phone</span>
        </Button>
      </Link>
      <Link
        href="https://x.com/stringsaeed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:text-primary hover:border-primary transition-colors"
        >
          <SiX className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
    </footer>
  );
}
