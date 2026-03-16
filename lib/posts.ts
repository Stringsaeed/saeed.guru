import { format } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

interface Post {
  title: string;
  date: string;
  description: string;
  cover?: string;
  published: boolean;
  tags?: string[];
  slug: string;
  url: string;
  readingTime: string;
  formattedDate: string;
}

interface PostWithContent extends Post {
  content: string;
}

function parsePost(fileName: string): PostWithContent {
  const filePath = path.join(POSTS_DIR, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const slug = path.basename(fileName, path.extname(fileName));
  const date = new Date(data.date);

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    cover: data.cover || undefined,
    published: data.published !== false,
    tags: data.tags,
    slug,
    url: `/blog/posts/${slug}`,
    readingTime: readingTime(content).text,
    formattedDate: format(date, 'MMMM dd, yyyy'),
    content,
  };
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _, ...post } = parsePost(file);
      return post;
    })
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostWithContent | undefined {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.mdx'));
  const fileName = files.find((file) => path.basename(file, path.extname(file)) === slug);

  if (!fileName) return undefined;

  return parsePost(fileName);
}
