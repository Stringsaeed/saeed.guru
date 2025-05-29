'use client';

import { SiReact } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

const description = [
  'Software',
  'engineer',
  'specializing',
  'in',
  <span
    key="react-native"
    className="inline-flex flex-row items-center gap-1 rounded-md bg-muted px-2 py-1"
  >
    react-native
    <SiReact className="inline-block h-4 w-4" />
  </span>,
  'and',
  'web',
  'based',
  'in',
  <span
    key="dubai"
    className="inline-flex flex-row items-center gap-1 rounded-md bg-muted px-2 py-1"
  >
    Dubai
  </span>,
  '.',
  'Currently',
  'innovating',
  'at',
  <Link
    href="https://thndr.app/"
    target="_blank"
    rel="noopener noreferrer"
    key="thndr"
    className="font-semibold"
  >
    thndr
  </Link>,
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
