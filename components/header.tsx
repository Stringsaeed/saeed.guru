import SaeedAvi from '@/components/saeed-avi';
import { SiReact } from '@icons-pack/react-simple-icons';

const description = [
  'Software',
  'engineer',
  'specializing',
  'in',
  <span className="inline-flex flex-row items-center gap-1 rounded-md bg-muted px-2 py-1">
    react-native
    <SiReact className="inline-block h-4 w-4" />
  </span>,
  'and',
  'web',
  'based',
  'in',
  <span className="inline-flex flex-row items-center gap-1 rounded-md bg-muted px-2 py-1">
    Dubai
  </span>,
  '.',
  'Currently',
  'looking',
  <span className="font-semibold">for a new challenge.</span>,
];

export default function Header() {
  return (
    <header className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-background">
          <SaeedAvi />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Saeed</h1>
      </div>
      <p className="flex flex-row flex-wrap items-center gap-1 font-medium leading-relaxed text-muted-foreground">
        {description.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </header>
  );
}

/**
 * import SaeedAvi from '@/components/saeed-avi';
import { SiReact } from '@icons-pack/react-simple-icons';

const description = [
  'Software',
  'engineer',
  'specializing',
  'in',
  'react-native',
  <SiReact className="inline-block" />,
  'and',
  'web',
  'based',
  'in',
  <span className="font-semibold">Dubai.</span>,
  'Currently',
  'looking',
  <span className="font-semibold">for a new challenge.</span>,
];

export default function Header() {
  return (
    <header className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-background">
          <SaeedAvi />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Saeed</h1>
      </div>
      <p className="flex flex-row flex-wrap gap-1 font-medium leading-relaxed text-muted-foreground">
        {description.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </header>
  );
}

 */
