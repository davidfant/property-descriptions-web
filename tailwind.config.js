module.exports = {
  mode: "jit",
  purge: ["./{components,pages}/**/*.{ts,tsx}"],
  plugins: [require('@tailwindcss/forms')],
};
