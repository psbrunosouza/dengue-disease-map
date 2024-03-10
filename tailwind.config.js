/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        default: 'var(--text-default)',
        alt: 'var(--text-alt)'
      },
      colors: {
        base: {
          'DEFAULT': 'var(--base-200)',
          100: 'var(--base-100)',
          200: 'var(--base-200)',
          300: 'var(--base-300)',
        },
        accent: {
          'DEFAULT': 'var(--accent-200)',
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
          300: 'var(--accent-300)',
        },
        highlight: {
          'DEFAULT': 'var(--highlight-200)',
          100: 'var(--highlight-100)',
          200: 'var(--highlight-200)',
          300: 'var(--highlight-300)',
        },
      }
    },
  },
  plugins: [],
}

