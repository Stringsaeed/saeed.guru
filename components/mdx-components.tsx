import { Tweet } from 'react-tweet';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

import { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={`mb-4 mt-8 text-3xl font-bold text-foreground ${className}`} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={`mb-4 mt-8 text-2xl font-bold text-foreground ${className}`} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={`mb-4 mt-8 text-xl font-bold text-foreground ${className}`} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={`mb-4 mt-8 text-lg font-bold text-foreground ${className}`} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={`mb-4 leading-7 text-muted-foreground ${className}`} {...props} />
  ),
  a: ({ className, href, ...props }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link
          href={href}
          className={`font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80 ${className}`}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80 ${className}`}
        {...props}
      />
    );
  },
  ul: ({ className, ...props }) => <ul className={`my-6 ml-6 list-disc ${className}`} {...props} />,
  ol: ({ className, ...props }) => (
    <ol className={`my-6 ml-6 list-decimal ${className}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`mt-2 text-muted-foreground ${className}`} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground ${className}`}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={`rounded-md border border-border ${className}`} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={`w-full ${className}`} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={`m-0 border-t border-border p-0 even:bg-muted ${className}`} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th className={`border border-border px-4 py-2 text-left font-bold ${className}`} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={`border border-border px-4 py-2 text-left ${className}`} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre className={`relative rounded-lg ${className}`} {...props} />
  ),
  code: ({ className, ...props }) => {
    return (
      <code
        className={`relative overflow-x-auto rounded p-4 font-mono text-sm ${className}`}
        {...props}
      />
    );
  },
  Image: ({ className, alt, width, height, ...props }: any) => (
    <Image
      className={`h-28 w-28 rounded-md border border-border ${className}`}
      alt={alt}
      fill={false}
      width={width ?? 100}
      height={height ?? 100}
      {...props}
    />
  ),
  Tweet: ({ id, ...props }: any) => <Tweet id={id} {...props} />,
  mermaid: Mermaid,
  Mermaid,
};

export default components;
