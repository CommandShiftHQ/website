import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          100: '#F9F9F9',
          200: '#E6E6E6',
          300: '#CCCCCC',
          DEFAULT: '#B3B3B3',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#4C4C4C',
          900: '#333333',
          950: '#191919',
        },
        green: {
          100: '#D7FA8A',
          200: '#C7F85B',
          300: '#B7F62C',
          DEFAULT: '#AFF514',
          500: '#9edd12',
          600: '#7aac0e',
          700: '#587b0a',
          800: '#344906',
          900: '#111802'
        }
      },
      fontFamily: {
        heading: 'var(--font-mabry-pro)',
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
