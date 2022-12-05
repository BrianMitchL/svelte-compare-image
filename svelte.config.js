import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    paths: {
      base: dev ? "" : "/svelte-compare-image",
    },
    adapter: adapter(),

    // package: {
    //   exports: (filepath) => {
    //     if (mm.isMatch(filepath, "**/*.spec.{ts,js}")) return false;
    //     return mm.isMatch(filepath, [
    //       "!**/_*",
    //       "!**/internal/**",
    //       "!**/*.spec.{ts,js}",
    //     ]);
    //   },
    //   files: mm.matcher("!**/?(build.*)*.spec.{ts,js}"),
    // },
  },
};

export default config;
