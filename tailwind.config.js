/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'manrope',
        poppins: 'poppins',
        railway: 'railway',
      },
    },
  },
  plugins: [require("daisyui")],
};
