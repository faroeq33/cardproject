/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark-cyan": "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          "very-dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
        },
      },
    },
  },
  plugins: [],
};
