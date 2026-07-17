/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2c5282',
        accent: '#4299e1',
        light: '#e2e8f0',
        dark: '#0d1b2a',
      }
    },
  },
  plugins: [],
}
