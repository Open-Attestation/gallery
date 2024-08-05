/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#324353",
        },
        orange: {
          200: "#feeee7",
          DEFAULT: "#f75d20",
          600: "#e04406",
        },
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents, addUtilities }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1024px",
          },
        },
      });

      addUtilities(
        {
          ".px-00": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
        ["responsive"]
      );
    },
  ],
};
