module.exports = {
  theme: {
    textColor: theme => ({
      ...theme("colors"),
    }),
    borderColor: theme => ({
      ...theme("colors"),
    }),
    backgroundColor: theme => ({
      ...theme("colors"),
    }),
    extend: {
      colors: {
        primary: {
          light: "#feeee7",
          default: "#f75d20",
          dark: "#e04406",
        },
        secondary: {
          default: "#2c3549",
        },
      }
    }
  },
  variants: {},
  plugins: [
    function({ addComponents, addUtilities }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1024px"
          }
        }
      });

      addUtilities(
        {
          ".px-00": {
            paddingLeft: 0,
            paddingRight: 0
          }
        },
        ["responsive"]
      );
    }
  ]
};
