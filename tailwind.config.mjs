/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '3rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        paper: '#F1F0EC',
        'paper-dark': '#E7E5DE',
        ink: '#1E1E1C',
        'ink-soft': '#4A4A46',
        'accent-orange': '#E1531F',
        'accent-orange-light': '#F2A98A',
        sage: '#8FA48F',
        'sage-dark': '#5F7561',
        'panel-teal': '#2D3B3A',
        line: '#D8D6CE',
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Arial Narrow"', 'sans-serif'],
        body: ['"Work Sans"', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0.85, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
