# AGENTS.md

This is a Next.js 15 (App Router) personal portfolio and blog site built with TypeScript,
React 19, Tailwind CSS, shadcn/ui, and Contentlayer (MDX). Deployed on Vercel.

## Build & Development Commands

Package manager: **pnpm** (v10.29.3, defined via `packageManager` field).

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start Next.js dev server         |
| `pnpm build`        | Production build                 |
| `pnpm start`        | Start production server          |
| `pnpm lint`         | Run ESLint (`eslint .`)          |
| `pnpm format`       | Format all files with Prettier   |
| `pnpm format:check` | Check formatting without writing |

No test framework is configured. There are no test files or test commands.

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  blog/                 # Blog section (listing + [slug] posts)
  husn-el-muslim/       # iOS app landing page
components/             # React components
  ui/                   # shadcn/ui base components (Button, etc.)
  mdx-components.tsx    # MDX component overrides for blog posts
content/posts/          # MDX blog post files (Contentlayer source)
lib/utils.ts            # Utility functions (cn() helper)
public/                 # Static assets (images, icons, manifest)
```

## Key Configuration

- **TypeScript:** Strict mode. Path alias `@/*` maps to project root.
- **ESLint:** Flat config (`eslint.config.mjs`). Next.js core-web-vitals, TypeScript,
  Tailwind class validation, and `eslint-plugin-perfectionist` for import sorting.
- **Prettier:** Single quotes, semicolons, 2-space indent, 100 char width,
  ES5 trailing commas, Tailwind class sorting plugin.
- **Tailwind:** v3, dark mode via `class` strategy, HSL CSS variable theming.
- **Contentlayer:** `Post` document type with fields: title, date, description,
  cover, published, tags. Computed fields: url, slug, readingTime, formattedDate.
- **Build tolerance:** `next.config.mjs` ignores ESLint and TypeScript errors during
  build. Still fix all errors -- this is a safety net, not an excuse.

## Code Style

### Imports (enforced by eslint-plugin-perfectionist, error level)

Order groups strictly:

1. Type imports (`import type { ... }`)
2. React/Next.js (`react`, `next`, `next/*`)
3. External packages
4. Internal type imports
5. Internal imports (use `@/*` path alias)
6. Parent/sibling/index
7. Side effects
8. Styles

Named imports within each group are sorted alphabetically (ascending, natural).

### Formatting

- Semicolons: always
- Quotes: single
- Indent: 2 spaces
- Max line width: 100 characters
- Trailing commas: ES5
- Tailwind classes: auto-sorted by prettier-plugin-tailwindcss

### File Naming

- All files: **kebab-case** (e.g., `back-button.tsx`, `work-experience.tsx`)
- Components directory: `components/` for app components, `components/ui/` for shadcn/ui

### Component & Type Naming

- Components: **PascalCase** (e.g., `BackButton`, `SocialLinks`)
- Interfaces/Types: **PascalCase** (e.g., `ButtonProps`, `WorkItemProps`)
- Variables/functions: **camelCase** (e.g., `projects`, `addVariablesForColors`)
- Data arrays/objects: **camelCase**, defined inline in their component files

### TypeScript

- Strict mode is on. Use proper types everywhere.
- Use `@/*` path alias for internal imports (e.g., `@/components/ui/button`).
- Props: define interfaces/types inline in the same file as the component.
- Use `ComponentProps<T>` to extend native HTML element props.
- For App Router pages, use Next.js typed routes: `PageProps<'/blog/posts/[slug]'>`.
- Params are async in Next.js 15: always `await params` before accessing fields.

### React / Next.js Patterns

- **Server Components by default.** Only add `'use client'` when the component
  needs interactivity (event handlers, hooks, browser APIs).
- Keep client boundaries as small as possible. Isolate client code to leaf
  components (e.g., `client-page.tsx` for MDX rendering, `back-button.tsx`).
- Pages and layouts use `export default function`.
- Reusable components may use named or default exports; be consistent with
  neighboring files.
- Use `React.forwardRef` for UI primitives that wrap native elements.
- Destructure props in function signatures.

### shadcn/ui Pattern

- Base UI components live in `components/ui/`.
- Use `cva` (class-variance-authority) for variant-based styling.
- Use `cn()` from `@/lib/utils` to merge Tailwind classes (clsx + tailwind-merge).
- Use Radix UI primitives (`@radix-ui/react-slot`) for composable components.

### Styling

- All colors are HSL CSS variables defined in `app/globals.css`.
- Reference colors via Tailwind config: `hsl(var(--variable-name))`.
- Dark mode: uses `next-themes` with class strategy. The `.dark` class toggles
  CSS variable values.
- Prefer Tailwind utility classes. Avoid inline styles.

### Content / Blog

- Blog posts are MDX files in `content/posts/`.
- Frontmatter fields: `title` (required), `date` (required), `description`
  (required), `cover` (optional), `published` (boolean, default false),
  `tags` (optional string list).
- Only published posts appear in listings. Filter with `post.published`.
- MDX overrides are in `components/mdx-components.tsx`. Custom components
  available in MDX: `Image`, `Tweet`, `mermaid`, `CustomBeforeAfter`.
- Query posts via `allPosts` from `contentlayer/generated`.

### Icons

- Generic icons: `lucide-react`
- Brand icons: `@icons-pack/react-simple-icons`

### Error Handling

- Use `notFound()` from `next/navigation` for missing content (404).
- Use `throw new Error()` in `generateMetadata` for invalid states.
- No custom error classes or error boundary components exist currently.

### Static Data

- Work experience, projects, and social links are hardcoded as typed arrays
  directly in their component files. There is no external data source or CMS
  for this content.

## Pre-commit Checklist

1. Run `pnpm lint` and fix all errors (especially import ordering).
2. Run `pnpm format` to auto-format.
3. Run `pnpm build` to verify the production build succeeds.
4. Ensure new components follow server-first pattern (no unnecessary `'use client'`).
5. Verify `@/*` path aliases are used for all internal imports.
