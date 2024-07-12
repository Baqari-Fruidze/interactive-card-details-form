/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    extend: {
      backgroundImage: {
        "background-mobile": "url('/images/bg-main-mobile.png')",
        "background-desktop": "url('/images/bg-main-desktop.png')",
        "card-back": "url('/images/bg-card-back.png')",
        "card-front": "url('/images/bg-card-front.png')",
      },
    },
  },
  plugins: [],
};
