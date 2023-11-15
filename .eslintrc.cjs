module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  extends: ["@nuxtjs/eslint-config", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    quotes: ["error", "double"],
    semi: ["off", "never"],
    "no-multi-spaces": ["error"],
    "no-console": "off",
    "vue/no-v-html": "off",
  },
};
