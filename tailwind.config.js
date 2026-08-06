/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Deep Dark Backgrounds ---
        dark: {
          900: '#0a0a1a', // Main Page / Cosmic background
          800: '#0A0E1A', // Mobile App Phone Frame background
          700: '#121E35', // Section backgrounds (Bottom Nav, Layouts)
          600: '#18132b', // Cards, Glassmorphism backgrounds
          muted: '#A8B4C8', // Subtitle, description, inactive text
        },
        // --- Your Website's Brand Accents ---
        accent: {
          purple: '#a855f7', // Standard Purple
          pink: '#ec4899',   // Standard Pink
          gold: '#D9B34A',   // Premium Gold (Used in "Marin Club", Stats)
          lime: '#d1f542',   // Lime Green (Used in Start Earning buttons)
          cyan: '#22d3ee',   // Cyan (Used in "Users" text)
        },
        // --- Borders for Glassmorphism ---
        border: {
          glass: 'rgba(168, 85, 247, 0.2)', // Soft Purple Border
          frame: '#243B61',
          dark: '#2c2f42',
        }
      },
      // ⬇️ NEWLY ADDED FONTS SECTION ⬇️
      fontFamily: {
        // Inter font ko default banaya (Tailwind ki 'font-sans' class ab Inter use karegi)
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}