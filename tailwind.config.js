/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          blue: '#8DB9F0',       // Powdered Blue
          blueHover: '#7AAAE6',
          lavender: '#E9E8F8',   // Soft Lavender White
          lavenderLight: '#F5F4FD',
          peach: '#F5B69E',      // Warm Sunset Peach
          peachHover: '#EFA68B',
          dark: '#1B1E2E',       // High contrast deep slate
          slate: '#5C6079',
          border: 'rgba(27, 30, 46, 0.08)',
          borderHover: 'rgba(141, 185, 240, 0.5)',
        },
        bg: {
          primary: '#E9E8F8',
          secondary: '#F2F1FB',
          card: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        brand: {
          blue: '#8DB9F0',
          peach: '#F5B69E',
          lavender: '#E9E8F8',
        },
        text: {
          primary: '#1B1E2E',
          secondary: '#5C6079',
          muted: '#888CA3',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        luxury: ['"Cormorant Garamond"', 'serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'luxury-wide': '0.3em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(27, 30, 46, 0.04)',
        'card-soft': '0 8px 24px -4px rgba(27, 30, 46, 0.06), 0 2px 6px -1px rgba(27, 30, 46, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(141, 185, 240, 0.25), 0 10px 15px -5px rgba(27, 30, 46, 0.05)',
        'glow-blue': '0 4px 25px -2px rgba(141, 185, 240, 0.5)',
        'glow-peach': '0 4px 25px -2px rgba(245, 182, 158, 0.5)',
        'phone-frame-soft': '0 30px 70px -15px rgba(27, 30, 46, 0.18), 0 10px 25px -5px rgba(141, 185, 240, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        'phone': '3rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
