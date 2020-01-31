module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    node: true,
    jest: true,
    es6: true,
    browser: true
  },
  rules: {
    "comma-dangle": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "no-default-export": true
  },
  globals: { fetch: false }
};
