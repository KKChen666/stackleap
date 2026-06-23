/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF8F5',
        surface: '#F2EFEB',
        muted: '#E8E4DF',
        border: '#DDD8D2',
        ink: '#1A1A1A',
        'ink-2': '#555249',
        'ink-3': '#9C978F',
        accent: '#C45D3E',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'sub': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
};
