export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          60: '#C8FD26'
        },
        natural: {
          10: '#FBFBFB',
          70: '#999999',
          90: '#111111',
          100: '#050505'
        }
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
