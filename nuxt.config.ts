// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],

  // i18n Configuration according to docs
  i18n: {
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
    ],
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
      fallbackLocale: "fr",
    },
    vueI18n: "./i18n.config.ts",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // App Configuration
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "light",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.tailwindcss.com",
        },
        {
          innerHTML: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#3b82f6',
                    secondary: '#8b5cf6',
                    accent: '#10b981',
                  }
                }
              },
              daisyui: {
                themes: [
                  {
                    light: {
                      "primary": "#3b82f6",
                      "secondary": "#8b5cf6", 
                      "accent": "#10b981",
                      "neutral": "#374151",
                      "base-100": "#ffffff",
                      "base-200": "#f9fafb",
                      "base-300": "#e5e7eb",
                      "info": "#3abff8",
                      "success": "#36d399",
                      "warning": "#fbbd23",
                      "error": "#f87272",
                    },
                    dark: {
                      "primary": "#3b82f6",
                      "secondary": "#8b5cf6",
                      "accent": "#10b981", 
                      "neutral": "#1f2937",
                      "base-100": "#111827",
                      "base-200": "#1f2937",
                      "base-300": "#374151",
                      "info": "#3abff8",
                      "success": "#36d399",
                      "warning": "#fbbd23",
                      "error": "#f87272",
                    },
                  },
                ],
              },
            }
          `,
        },
      ],
    },
  },
});
