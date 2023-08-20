import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist",
      entryFileNames: "bundle-[name].[hash].js",
      format: "cjs",
    },
    {
      dir: "dist",
      format: "iife",
      name: "version",
      entryFileNames: "bundle-[name].[hash].min.js",
      plugins: [terser()],
    },
  ],
};
