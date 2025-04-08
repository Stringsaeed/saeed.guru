'use client';

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

export default function Description() {
  return (
    <p className="mb-12 flex flex-row flex-wrap items-center gap-1 font-medium leading-relaxed text-muted-foreground">
      {description.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </p>
  );
}
