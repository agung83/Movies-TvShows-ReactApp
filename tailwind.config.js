module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        display: ['Roboto Mono', 'Menlo', 'monospace'],
        body: ['Roboto Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}