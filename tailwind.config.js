/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "sans"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'desktopproduct': "url('./assets/image-product-desktop.jpg')",
        'mobileproduct': "url('./assets/image-product-mobile.jpg')",
      }
    },
  },
  plugins: [],
}

