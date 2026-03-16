import { MDXRemote } from 'next-mdx-remote/rsc';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import rehypePrettyCode from 'rehype-pretty-code';

import { components } from '@/components/mdx-components';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = async ({ params }: PageProps<'/blog/posts/[slug]'>) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const url = `https://saeed.guru/blog/posts/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Muhammed Saeed'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  };
};

export default async function PostPage({ params }: PageProps<'/blog/posts/[slug]'>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

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
              width={1200}
              height={630}
              sizes="(max-width: 672px) 100vw, 672px"
              priority
            />
          </div>
        )}
      </header>

      <article className="prose">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      light: 'github-light',
                      dark: 'github-dark',
                    },
                  },
                ],
              ],
            },
          }}
        />
      </article>
    </>
  );
}
