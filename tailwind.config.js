/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': [
        { min: '768px' },
        { raw: '(max-width: 950px) and (max-height: 500px) and (orientation: landscape)' }
      ],
      'lg': [
        { min: '1024px' },
        { raw: '(max-width: 950px) and (max-height: 500px) and (orientation: landscape)' }
      ],
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c28', // Dark green / hijau agak tua
          light: '#2a5a3b',
          dark: '#0f2418'
        },
        accent: {
          DEFAULT: '#c5a059', // Soft gold
          light: '#d4b373',
          dark: '#b08a44'
        },
        cream: {
          DEFAULT: '#f9f6f0', // Warm cream
          light: '#ffffff',
          dark: '#e8e2d5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['"Amiri"', '"Scheherazade New"', 'serif'],
      }
    },
  },
  plugins: [],
}
