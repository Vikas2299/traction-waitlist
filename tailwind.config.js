/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earth Tone Color Palette
        earth: {
          50: '#f8f6f3',   // Very light cream
          100: '#f0ede8',   // Light beige
          200: '#e8e0d6',   // Light beige/taupe
          300: '#d4c4b0',   // Muted golden yellow
          400: '#c4a89a',   // Muted dusty rose
          500: '#a88c7a',   // Medium reddish-brown
          600: '#8b6b5a',   // Deep rich brown
          700: '#6d5a4a',   // Dark brown
          800: '#4a3d32',   // Very dark brown
          900: '#2d241c',   // Almost black brown
          
          // Green variants
          sage: '#9ca88c',    // Soft muted olive green
          forest: '#2d4a3d',  // Very dark forest green
          moss: '#5a6d5a',    // Dark muted grey-green
          slate: '#6b7a8b',   // Muted blue-grey
          
          // Orange variants
          terracotta: '#b87a5a',  // Muted reddish-orange
          rust: '#a86b4a',        // Medium reddish-brown
          burnt: '#d4945a',       // Muted orange
          
          // Blue variants
          sky: '#e8f0f8',     // Very light grey-blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 