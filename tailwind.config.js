module.exports = {
  theme: {
    textColor: theme => ({
      ...theme("colors")
    }),
    borderColor: theme => ({
      ...theme("colors")
    }),
    backgroundColor: theme => ({
      ...theme("colors")
    }),
    extend: {
      colors: {
        navy: {
          default: "#324353"
        },
        orange: {
          200: "#feeee7",
          default: "#f75d20",
          600: "#e04406"
        }
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
