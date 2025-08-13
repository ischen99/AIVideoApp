/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},  // <- NEU (statt tailwindcss: {})
    autoprefixer: {},
  },
};
export default config;
