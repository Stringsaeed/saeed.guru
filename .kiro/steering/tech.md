# Tech Stack & Build System

## Framework & Core Technologies

- **Next.js 15.5.0** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Contentlayer** - Content management for MDX blog posts

## Key Libraries

- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion** - Animation library
- **next-themes** - Theme switching (dark/light mode)
- **Lucide React** - Icon library
- **date-fns** - Date manipulation
- **reading-time** - Blog post reading time calculation

## Content & Styling

- **MDX** - Markdown with JSX for blog posts
- **rehype-pretty-code** - Syntax highlighting with Shiki
- **@tailwindcss/typography** - Typography plugin for prose content

## Development Tools

- **ESLint** - Code linting with TypeScript, Next.js, and Tailwind plugins
- **Prettier** - Code formatting with Tailwind class sorting
- **Bun** - Package manager and runtime

## Common Commands

### Development

```bash
bun dev          # Start development server
bun build        # Build for production
bun start        # Start production server
```

### Code Quality

```bash
bun lint         # Run ESLint
bun format       # Format code with Prettier
bun format:check # Check formatting without changes
```

## Build Configuration

- Uses `withContentlayer` wrapper for Next.js config
- TypeScript and ESLint errors ignored during builds for deployment flexibility
- Image optimization disabled for static export compatibility
- Experimental webpack optimizations enabled
