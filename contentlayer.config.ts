import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';
import { format, parseISO } from 'date-fns';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    cover: {
      type: 'string',
      description: 'The cover image of the post',
      required: false,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
      default: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags of the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => {
        return `/blog/${post._raw.flattenedPath}`;
      },
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    readingTime: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
    formattedDate: {
      type: 'string',
      resolve: (post) => format(parseISO(post.date), 'MMMM dd, yyyy'),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode as any,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word'];
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
