
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        background: '#E1E8ED',
        border: '#AAB8C2',
      },
      
      fontFamily: {
        liter: ['Liter'],
        roboto: ['Roboto'],
        lobster: ['Lobster','cursive'],
        cursive: ['cursive'],
        pacifico: ['Pacifico'],
        dancing: ['Dancing Script' , 'cursive'],
        vibes: ['Great Vibes', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
}