/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0A2463',
          700: '#0A2463',
          800: '#0A2463',
          900: '#0A2463',
        },
        danger: '#EF4444',
        warning: '#F97316',
        success: '#10B981',
        info: '#F59E0B',
        bg: '#F8FAFC',
        card: '#FFFFFF',
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        border: '#E2E8F0',
      },
    },
  },
  plugins: [],
}