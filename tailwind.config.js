// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateImages: {
          '0%': { backgroundImage: 'url("https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0b4a118d86ae68c7.jpg?q=20")' },
          '25%': { backgroundImage: 'url("https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20")' },
          '50%': { backgroundImage: 'url("https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b229a95edd3af8bd.jpg?q=20")' },
          '75%': { backgroundImage: 'url("https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20")' },
          '100%': { backgroundImage: 'url("https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b229a95edd3af8bd.jpg?q=20")' },
        },
      },
      animation: {
        rotateImages: 'rotateImages 20s  infinite',
        Object: 'contain'
        
       
      },
    },
  },
  plugins: [],
}
