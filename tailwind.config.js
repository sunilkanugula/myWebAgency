export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // TSX support is included here
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
      },
    },
  },
  plugins: [],
}
