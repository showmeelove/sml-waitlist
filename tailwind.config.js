/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        
      },
      fontFamily: {
        Eina01Bold: ["Eina01-Bold", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        showblue: "#1864FF",
        showgray: "#A3A3A3",
        lightblue: "rgba(24, 100, 255, 0.2)",
        buttonBg: "linear-gradient(106.44deg, #1864FF 17.79%, #42AAFF 85.51%)",
      },
      backgroundImage: {
        herobg: "url(./src/assets/images/herobg-min.png)",
      },
    },
  },
  plugins: [],
};
