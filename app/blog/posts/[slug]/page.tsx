import { MDXRemote } from 'next-mdx-remote/rsc';
import { ComponentProps } from 'react';

import { components } from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import rehypePrettyCode from 'rehype-pretty-code';

interface PostPageProps {
  params: {
    slug: string;
  };
}

const mdxOptions: ComponentProps<typeof MDXRemote>['options'] = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: true,
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
        },
      ],
    ],
  },
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        {post.cover && (
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

      <article className="">
        <MDXRemote source={post.body.raw} components={components} options={mdxOptions} />
      </article>
    </>
  );
}
