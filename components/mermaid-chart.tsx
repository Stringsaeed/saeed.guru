'use client';

import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

export default function MermaidChart({ value }: { value?: string }) {
  if (!value) return null;
  return <Mermaid chart={value} />;
}
