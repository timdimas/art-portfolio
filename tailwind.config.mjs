/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2.5rem',
      },
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        carbon: '#12100E',
        coal: '#1B1815',
        ash: '#262220',
        smoke: '#332D29',
        bronze: '#B7925D',
        'bronze-dark': '#8A6B43',
        ember: '#CFA56A',
        bone: '#E9E1D7',
        stone: '#A79B8C',
        slate: '#5C7177',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Karla"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"Space Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 0.8, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
