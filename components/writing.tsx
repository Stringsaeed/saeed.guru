import { allPosts } from 'contentlayer/generated';
import { Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

interface WritingItem {
  title: string;
  description: string;
  link: string;
}

const writingItems: WritingItem[] = [
  {
    title: 'React Native Underlay Sheet UI',
    description: 'Implementing an Underlay Sheet UI in React Native',
    link: 'https://read.cv/sae/react-native-underlay-sheet-ui',
  },
];

export default function Writing() {
  const posts = allPosts
    .filter((post: Post) => post.published !== false)
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post: Post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
    }));

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Writings</h2>
      </div>
      <ul className="space-y-4">
        {[...posts, ...writingItems].map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold text-foreground transition-colors hover:text-primary">
                {item.title}
              </span>
              <p className="mt-1 font-medium text-muted-foreground">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
