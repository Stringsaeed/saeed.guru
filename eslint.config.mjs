import nextEslintPlugin from '@next/eslint-plugin-next';
import perfectionist from 'eslint-plugin-perfectionist';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import * as tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@next/next': nextEslintPlugin,
      tailwindcss: tailwindPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
      },
      next: {
        rootDir: '.',
      },
    },
    rules: {
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',

      // Tailwind rules
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/classnames-order': 'warn',
    },
  },

  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            ['react', 'next'],
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
              next: ['^next$', '^next-.+', '^next/*$'],
            },
            type: {
              react: ['^react$', '^react-.+'],
              next: ['^next$', '^next-.+', '^next/*$'],
            },
          },
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
    },
  },
];
