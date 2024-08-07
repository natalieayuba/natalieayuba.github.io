import type { Config } from 'tailwindcss';
import { colors } from './config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors,
    keyframes: {
      pop: {
        from: {
          opacity: '0',
          scale: '0',
        },
      },
      glide: {
        from: {
          opacity: '0',
          transform: 'translateY(-8px)',
        },
      },
      poke: {
        to: {
          scale: '1',
          right: '-64px',
        },
      },
      fadeIn: {
        from: {
          opacity: '0',
        },
      },
    },
    animation: {
      pop: 'pop 200ms ease-in-out backwards',
      glide: 'glide 200ms ease-in backwards',
      poke: 'poke 200ms ease-in-out',
      fadeIn: 'fadeIn 200ms ease-in-out backwards',
      blinker: 'blinker 1.25s linear infinite',
      fall: 'fall ease-in infinite',
    },
  },
  plugins: [],
};

export default config;
