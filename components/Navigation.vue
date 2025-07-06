<template>
  <div
    class="navbar bg-base-100 shadow-sm fixed top-0 z-50 backdrop-blur-md bg-opacity-95"
  >
    <div class="container mx-auto">
      <!-- Mobile menu button -->
      <div class="navbar-start">
        <div class="dropdown lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">{{ $t("navigation.about") }}</a>
            </li>
            <li>
              <a href="#experience">{{ $t("navigation.experience") }}</a>
            </li>
            <li>
              <a href="#projects">{{ $t("navigation.projects") }}</a>
            </li>
            <li>
              <a href="#contact">{{ $t("navigation.contact") }}</a>
            </li>
          </ul>
        </div>

        <!-- Logo -->
        <a href="#" class="btn btn-ghost text-xl font-bold"> Arthur Lefevre </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#about" class="hover:text-primary">{{
              $t("navigation.about")
            }}</a>
          </li>
          <li>
            <a href="#experience" class="hover:text-primary">{{
              $t("navigation.experience")
            }}</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-primary">{{
              $t("navigation.projects")
            }}</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-primary">{{
              $t("navigation.contact")
            }}</a>
          </li>
        </ul>
      </div>

      <!-- Theme & Language Toggle -->
      <div class="navbar-end">
        <div class="flex items-center gap-2">
          <!-- Language Toggle -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
              <span class="text-sm font-medium">{{ currentLanguage }}</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a
                  @click="setLanguage('fr')"
                  :class="{ active: currentLanguage === 'FR' }"
                  >🇫🇷 Français</a
                >
              </li>
              <li>
                <a
                  @click="setLanguage('en')"
                  :class="{ active: currentLanguage === 'EN' }"
                  >🇬🇧 English</a
                >
              </li>
            </ul>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="btn btn-ghost btn-circle btn-sm">
            <svg
              v-if="isDark"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from "vue";

// Get theme from parent
const theme = inject("theme");
const isDark = computed(() => theme?.value === "dark");

// Language state
const currentLanguage = ref("FR");
const currentLocale = ref("fr");

// Simple translation system (fallback if i18n doesn't work)
const translations = {
  fr: {
    navigation: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
  },
  en: {
    navigation: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
  },
};

// Simple $t function
const $t = (key) => {
  const keys = key.split(".");
  let value = translations[currentLocale.value];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return value;
};

// Set language
const setLanguage = (lang) => {
  currentLocale.value = lang;
  currentLanguage.value = lang === "fr" ? "FR" : "EN";
  localStorage.setItem("language", lang);
};

// Toggle theme
const toggleTheme = () => {
  const newTheme = theme.value === "light" ? "dark" : "light";
  theme.value = newTheme;
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

// Initialize
onMounted(() => {
  // Set saved language
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    setLanguage(savedLanguage);
  }
});
</script>

<style scoped>
.navbar {
  min-height: 4rem;
}

.dropdown-content {
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 10px 10px -5px rgb(0 0 0 / 0.04);
}

.menu li > a.active {
  @apply bg-primary text-primary-content;
}

.menu li > a:hover {
  @apply bg-primary bg-opacity-10;
}
</style>
