const basePlugins = {
  tailwindcss: {},
  autoprefixer: {},
};
const prodPlugins = {
  cssnano: {
    preset: "default",
  },
};

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: isProduction
    ? {
        ...basePlugins,
        ...prodPlugins,
      }
    : basePlugins,
};
