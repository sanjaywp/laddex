/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Primary: Teal/Green accent (CTAs, active, highlights)
        primary: {
          DEFAULT: '#14B8A6', // teal-500
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Secondary: Dark blue/gray (headings, nav, footer, body text on light BG)
        secondary: {
          DEFAULT: '#1E293B', // slate-800
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Accent: Green/Teal gradient colors
        accent: {
          teal: '#14B8A6',
          emerald: '#10B981',
        },
        // Feedback colors
        success: '#10B981', // emerald-500
        danger: '#EF4444', // red-500
        warning: '#F59E0B', // amber-500
        info: '#3B82F6', // blue-500
      },
    },
  },
  plugins: [],
}

