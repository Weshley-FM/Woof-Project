export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          10: 'var(--color-primary-10)',
          60: 'var(--color-primary-60)',
          70: 'var(--color-primary-70)',
          90: 'var(--color-primary-90)'
        },
        natural: {
          10: 'var(--color-neutral-10)',
          30: 'var(--color-neutral-30)',
          50: 'var(--color-neutral-50)',
          60: 'var(--color-neutral-60)',
          70: 'var(--color-neutral-70)',
          80: 'var(--color-neutral-80)',
          90: 'var(--color-neutral-90)',
          100: 'var(--color-neutral-100)'
        }
      },
      fontFamily: {
        mono: ['var(--font-display)'],
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: []
}
