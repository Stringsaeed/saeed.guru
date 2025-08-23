# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js personal portfolio website for Muhammed Saeed, a React Native Engineer. The site showcases work experience, projects, and blog posts. Built with Next.js 15, TypeScript, Tailwind CSS, and Contentlayer for MDX-based blog functionality.

## Development Commands

### Core Development

- `bun dev` - Start development server (Next.js dev mode)
- `bun build` - Build for production
- `bun start` - Start production server

### Code Quality

- `bun lint` - Run ESLint across the codebase
- `bun format` - Format code with Prettier
- `bun format:check` - Check if code is properly formatted

### Content Development

- Blog posts are written in MDX format in `content/posts/`
- Contentlayer automatically processes MDX files and generates TypeScript types
- Development server hot-reloads when MDX content changes

## Architecture & Structure

### Content Management System

The site uses **Contentlayer** as a content management layer:

- Blog posts are stored as `.mdx` files in `content/posts/`
- Contentlayer processes MDX and generates `allPosts` collection with TypeScript types
- Posts include frontmatter fields: `title`, `date`, `description`, `cover`, `published`, `tags`
- Computed fields: `url`, `slug`, `readingTime`, `formattedDate`
- Content is rendered using custom MDX components with Tailwind styling

### Component Architecture

**Page Components:**

- `app/layout.tsx` - Root layout with navigation, theme provider, and analytics
- `app/page.tsx` - Home page combining all sections
- Components are organized by function, not by page

**Section Components:**

- `components/description.tsx` - Personal introduction
- `components/work-experience.tsx` - Employment history with company logos
- `components/project-section.tsx` - Project showcase with static data
- `components/writing.tsx` - Blog posts from Contentlayer
- `components/social-links.tsx` - External profile links

**Utility Components:**

- `components/mdx-components.tsx` - Custom MDX renderers with consistent styling
- `components/theme-provider.tsx` - Dark/light theme management
- `components/back-button.tsx` - Navigation component
- `components/disable-menu.tsx` - UI utility component

### Styling System

- **Tailwind CSS** with custom design system
- CSS variables for theme colors (dark/light mode support)
- Custom Tailwind config extends typography plugin for MDX content
- Consistent color tokens: `background`, `foreground`, `primary`, `muted`, etc.

### Data Management

**Static Data:**

- Work experience and projects are hardcoded in respective components
- Company logos stored in `/public/assets/` as 3D PNG files
- Uses Next.js `Image` component for optimized loading

**Dynamic Content:**

- Blog posts managed through Contentlayer
- Posts sorted by date, filtered by `published` status
- Reading time automatically calculated
- Date formatting handled by `date-fns`

## Code Standards & Conventions

### ESLint Configuration

The project uses a sophisticated ESLint setup:

- **Import Sorting**: Uses `eslint-plugin-perfectionist` with specific group ordering:
  1. Type imports
  2. React/Next.js imports
  3. External libraries
  4. Internal imports (by hierarchy)
  5. Side effects and styles
- **Next.js Rules**: Enforces Next.js best practices
- **Tailwind Rules**: Class ordering and custom class validation
- **TypeScript**: Full TypeScript ESLint integration

### Code Organization Patterns

- **Import Organization**: Strictly ordered imports (types first, React/Next, external, internal)
- **Component Exports**: Components export both default and named exports for reusability
- **Type Safety**: Full TypeScript with strict configuration
- **File Naming**: Kebab-case for files, PascalCase for components

## Key Technologies Integration

### Contentlayer Setup

- Processes `.mdx` files with frontmatter validation
- Generates TypeScript types automatically
- Integrated with Next.js build process via `withContentlayer`
- Custom rehype plugins for syntax highlighting with `rehype-pretty-code`

### Theme Implementation

- Uses `next-themes` for system/manual theme switching
- CSS variables mapped to Tailwind classes for consistent theming
- Dark/light variants for code syntax highlighting

### Performance Optimizations

- Next.js 15 with experimental webpack optimizations
- Image optimization disabled for static export compatibility
- SWC minification enabled
- Vercel Analytics integration for performance monitoring

## Content Creation Workflow

### Adding Blog Posts

1. Create new `.mdx` file in `content/posts/`
2. Add required frontmatter: `title`, `date`, `description`
3. Optional frontmatter: `cover`, `published`, `tags`
4. Content automatically appears in writing section when `published: true`
5. Contentlayer generates TypeScript types and URL structure

### Updating Work/Projects

- Work experience: Edit `components/work-experience.tsx`
- Projects: Edit `components/project-section.tsx`
- Add new company logos to `/public/assets/` following 3D PNG convention

## Special Considerations

### Build Configuration

- ESLint and TypeScript errors ignored during builds for deployment flexibility
- Images unoptimized for static site compatibility
- React Strict Mode enabled for development quality
- Transpiles `react-tweet` package for embedded tweets

### Styling Approach

- Utility-first with Tailwind CSS
- Custom MDX components ensure consistent blog post styling
- Typography plugin integrated for prose content
- Theme-aware color system throughout

## Dependencies Management

- Uses bun as package manager with `bun.lock`
- Next.js 15 with React 19
- Key dependencies: Contentlayer, Tailwind CSS, Framer Motion, Lucide React
- Development dependencies include comprehensive ESLint/Prettier setup
