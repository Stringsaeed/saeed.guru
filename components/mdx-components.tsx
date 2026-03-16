import type { MDXComponents } from 'mdx/types';

import { Tweet } from 'react-tweet';

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { BeforeAfter } from '@/components/before-after';
import MermaidChart from '@/components/mermaid-chart';
import { cn } from '@/lib/utils';

export const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn('mb-4 mt-8 text-3xl font-bold text-foreground', className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn('mb-4 mt-8 text-2xl font-bold text-foreground', className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn('mb-4 mt-8 text-xl font-bold text-foreground', className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn('mb-4 mt-8 text-lg font-bold text-foreground', className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('mb-4 leading-7 text-muted-foreground', className)} {...props} />
  ),
  a: ({ className, href, ...props }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn(
            'font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80',
            className
          )}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80',
          className
        )}
        {...props}
      />
    );
  },
  ul: ({ className, ...props }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('mt-2 text-muted-foreground', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground', className)}
      {...props}
    />
  ),
  img: ({ className, ...props }: ImageProps) => {
    return (
      <Image className={cn('h-28 w-28 rounded-md border border-border', className)} {...props} />
    );
  },
  hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t border-border p-0 even:bg-muted', className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn('border border-border px-4 py-2 text-left font-bold', className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn('border border-border px-4 py-2 text-left', className)} {...props} />
  ),
  figure: ({ className, ...props }) => (
    <figure
      className={cn('my-6 overflow-hidden rounded-lg border border-border', className)}
      {...props}
    />
  ),
  figcaption: ({ className, ...props }) => (
    <figcaption
      className={cn(
        'border-b border-border bg-muted/50 px-4 py-2.5 text-xs font-medium text-muted-foreground',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn('overflow-x-auto p-4 text-sm leading-relaxed', className)} {...props} />
  ),
  code: ({ className, ...props }) => {
    const isBlock = 'data-theme' in (props as Record<string, unknown>);
    if (isBlock) {
      return <code className={cn('grid font-mono text-[13px]', className)} {...props} />;
    }
    return (
      <code
        className={cn(
          'rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-[13px] text-foreground',
          className
        )}
        {...props}
      />
    );
  },
  Image,
  Tweet,
  mermaid: (props) => <MermaidChart value={props?.value} />,
  CustomBeforeAfter: ({
    beforeSrc,
    afterSrc,
    beforeCaption,
    afterCaption,
    beforeLabel,
    afterLabel,
    beforeSubLabel,
    afterSubLabel,
  }) => (
    <BeforeAfter
      before={{
        src: beforeSrc,
        caption: beforeCaption,
        label: beforeLabel,
        subLabel: beforeSubLabel,
      }}
      after={{
        src: afterSrc,
        caption: afterCaption,
        label: afterLabel,
        subLabel: afterSubLabel,
      }}
    />
  ),
};
