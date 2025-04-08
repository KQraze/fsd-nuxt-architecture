// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-04-05",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],
  css: ["~/assets/scss/main.css", "~/assets/scss/common/imports.scss"],
  ui: {
    colorMode: false,
  },
  image: {
    dir: "assets/img",
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  components: [
    {
      path: "shared/ui",
      extensions: [".vue"],
      prefix: "Shared",
    },
    {
      path: "features",
      extensions: [".vue"],
      prefix: "Feature",
    },
    {
      path: "widgets",
      extensions: [".vue"],
      prefix: "Widget",
    },
    {
      path: "entities",
      extensions: [".vue"],
      prefix: "Entity",
    },
  ],
  vite: {
    plugins: [svgLoader()],
  },
  imports: {
    dirs: [
      "shared/index.ts",
      "features/index.ts",
      "widgets/index.ts",
      "entities/index.ts",
    ],
  },
});
