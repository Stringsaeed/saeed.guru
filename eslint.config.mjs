import nextEslintPlugin from '@next/eslint-plugin-next';
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
    rules: {
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',

      // Tailwind rules
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/classnames-order': 'warn',
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
      },
      next: {
        rootDir: '.',
      },
    },
  },
];
