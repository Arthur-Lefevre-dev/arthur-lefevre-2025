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
                      "primary-content": "#ffffff",
                      "secondary": "#8b5cf6", 
                      "secondary-content": "#ffffff",
                      "accent": "#10b981",
                      "accent-content": "#ffffff",
                      "neutral": "#374151",
                      "neutral-content": "#ffffff",
                      "base-100": "#ffffff",
                      "base-200": "#f8fafc",
                      "base-300": "#e2e8f0",
                      "base-content": "#1e293b",
                      "info": "#3b82f6",
                      "info-content": "#ffffff",
                      "success": "#10b981",
                      "success-content": "#ffffff",
                      "warning": "#f59e0b",
                      "warning-content": "#ffffff",
                      "error": "#ef4444",
                      "error-content": "#ffffff",
                    },
                    dark: {
                      "primary": "#60a5fa",
                      "primary-content": "#1e293b",
                      "secondary": "#a78bfa",
                      "secondary-content": "#1e293b",
                      "accent": "#34d399", 
                      "accent-content": "#1e293b",
                      "neutral": "#374151",
                      "neutral-content": "#f1f5f9",
                      "base-100": "#0f172a",
                      "base-200": "#1e293b",
                      "base-300": "#334155",
                      "base-content": "#f1f5f9",
                      "info": "#60a5fa",
                      "info-content": "#1e293b",
                      "success": "#34d399",
                      "success-content": "#1e293b",
                      "warning": "#fbbf24",
                      "warning-content": "#1e293b",
                      "error": "#f87171",
                      "error-content": "#1e293b",
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
