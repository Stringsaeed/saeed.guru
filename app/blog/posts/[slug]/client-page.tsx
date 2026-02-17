'use client';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import { components } from '@/components/mdx-components';

export const PostClientPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <header className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        {!!post.cover && (
          <div className="mb-10 overflow-hidden rounded-lg border border-border">
            <Image
              src={post.cover}
              alt={post.title}
              className="h-auto w-full object-cover"
              width={1000}
              height={1000}
              priority
            />
          </div>
        )}
      </header>

      <article className="pose">
        <MDXContent components={components} />
      </article>
    </>
  );
};
