/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gantari: ['"Gantari"', 'sans-serif'],      // Gantari font
        onest: ["Onest", "sans-serif"],           // Onest font
        brewfine: ["The Brewfine", "sans-serif"], // The Brewfine font
        ny: ["New York", "serif"],      
        afacad: ["Afacad", "sans-serif"],          // New York font
        nicky: ['"Nicky Sans"', "sans-serif"],
        elmessiri: ['"El Messiri"', "serif"],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
