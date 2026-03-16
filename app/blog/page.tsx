import Link from 'next/link';

import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <header className="mb-12">
        <h1 className="mb-6 text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, ideas, and learnings about software development.
        </p>
      </header>

      <div className="space-y-10">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts published yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-border pb-10">
              <Link href={post.url} className="group">
                <h2 className="mb-2 text-2xl font-bold transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>{post.formattedDate}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-muted-foreground">{post.description}</p>
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
