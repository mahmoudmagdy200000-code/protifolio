/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-container': {
          lowest: 'var(--surface-container-lowest)',
          low: 'var(--surface-container-low)',
          DEFAULT: 'var(--surface-container)',
          high: 'var(--surface-container-high)',
          highest: 'var(--surface-container-highest)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          container: 'var(--primary-container)',
        },
        'on-surface': {
          DEFAULT: 'var(--on-surface)',
          variant: 'var(--on-surface-variant)',
        },
        tertiary: 'var(--tertiary)',
        outline: {
          variant: 'var(--outline-variant)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      boxShadow: {
        'ambient': '0 10px 40px -10px rgba(216, 227, 251, 0.1)', // 10% of on-surface
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
