# Project Structure & Organization

## Directory Layout

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (GitHub, Spotify, WakaTime)
│   ├── blog/              # Blog pages and layouts
│   ├── husn-el-muslim/    # Special project page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components (Button, DropdownMenu, etc.)
│   └── *.tsx             # Feature components (coding-stats, github-activity, etc.)
├── content/              # MDX blog posts
│   └── posts/            # Individual blog post files
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── assets/           # Images and media files
│   └── static/           # SVG icons and graphics
└── .contentlayer/        # Generated content (auto-generated)
```

## Naming Conventions

- **Files**: kebab-case for components and pages (`coding-stats.tsx`, `theme-toggle.tsx`)
- **Components**: PascalCase for React components
- **Directories**: lowercase with hyphens for multi-word names
- **API Routes**: RESTful naming in `app/api/` directory

## Import Patterns

- Use `@/` path alias for imports from project root
- Components imported from `@/components/`
- Utilities imported from `@/lib/`
- Generated content from `contentlayer/generated`

## Component Organization

- **Feature components** in `/components` root (e.g., `github-activity.tsx`, `now-playing.tsx`)
- **UI primitives** in `/components/ui` (shadcn/ui components)
- **Page components** in `/app` following App Router structure
- **API endpoints** in `/app/api` with `route.ts` files

## Content Management

- Blog posts as MDX files in `/content/posts/`
- Frontmatter fields: `title`, `date`, `description`, `cover`, `published`, `tags`
- Auto-generated fields: `url`, `slug`, `readingTime`, `formattedDate`
- Assets referenced from `/public/assets/`

## Styling Architecture

- Tailwind utility classes for styling
- CSS variables for theme colors in `globals.css`
- Component-specific styles using Tailwind
- Typography styles via `@tailwindcss/typography` plugin
