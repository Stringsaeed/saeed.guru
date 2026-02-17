import { notFound } from 'next/navigation';

import { allPosts } from 'contentlayer/generated';
import { PostClientPage } from './client-page';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export const generateMetadata = async ({ params }: PageProps<'/blog/posts/[slug]'>) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath.includes(slug));
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return { title: post.title, description: post.description, keywords: post.tags };
};

export default async function PostPage({ params }: PageProps<'/blog/posts/[slug]'>) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath.includes(slug));

  if (!post) {
    return notFound();
  }

  return <PostClientPage post={post} />;
}
