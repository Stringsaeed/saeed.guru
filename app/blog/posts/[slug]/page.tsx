import { allPosts, Post } from 'contentlayer/generated';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { components } from '@/components/mdx-components';
import Image from 'next/image';

interface PostPageProps {
  params: {
    slug: string;
  };
}

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

      <article className="prose dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-img:rounded-lg max-w-none">
        <MDXRemote source={post.body.raw} components={components} />
      </article>

      <div className="mt-16">
        <Link
          href="/blog"
          className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          ← Back to blog
        </Link>
      </div>
    </>
  );
}
