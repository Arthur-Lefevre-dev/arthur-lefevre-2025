<template>
  <div class="min-h-screen bg-base-100">
    <!-- Navigation -->
    <nav class="navbar bg-base-100 shadow-lg fixed top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home">{{ $t("navigation.home") }}</a>
            </li>
            <li>
              <a href="#about">{{ $t("navigation.about") }}</a>
            </li>
            <li>
              <a href="#projects">{{ $t("navigation.projects") }}</a>
            </li>
            <li>
              <a href="#contact">{{ $t("navigation.contact") }}</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="#home">
          Arthur Lefevre
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#home">{{ $t("navigation.home") }}</a>
          </li>
          <li>
            <a href="#about">{{ $t("navigation.about") }}</a>
          </li>
          <li>
            <a href="#projects">{{ $t("navigation.projects") }}</a>
          </li>
          <li>
            <a href="#contact">{{ $t("navigation.contact") }}</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <!-- Language Selector -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <Icon name="heroicons:language" size="20" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <a
                @click="switchLanguage('fr')"
                :class="{ active: locale === 'fr' }"
              >
                🇫🇷 FR
              </a>
            </li>
            <li>
              <a
                @click="switchLanguage('en')"
                :class="{ active: locale === 'en' }"
              >
                🇬🇧 EN
              </a>
            </li>
          </ul>
        </div>
        <!-- Theme Toggle -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <Icon name="heroicons:sun" size="20" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li><a @click="setTheme('light')">☀️ Light</a></li>
            <li><a @click="setTheme('dark')">🌙 Dark</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <!-- Hero Section -->
      <section id="home">
        <Hero />
      </section>

      <!-- About Section -->
      <section id="about" class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8">{{ $t("about.title") }}</h2>
            <p class="text-lg mb-8 text-base-content/80">
              {{ $t("about.description") }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title text-accent">
                    {{ $t("about.skills.frontend") }}
                  </h3>
                  <ul class="text-sm">
                    <li>Vue.js / Nuxt.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
              <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title text-accent">
                    {{ $t("about.skills.backend") }}
                  </h3>
                  <ul class="text-sm">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>
              <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title text-accent">
                    {{ $t("about.skills.tools") }}
                  </h3>
                  <ul class="text-sm">
                    <li>Git / GitHub</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
              <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title text-accent">
                    {{ $t("about.skills.data") }}
                  </h3>
                  <ul class="text-sm">
                    <li>Web Scraping</li>
                    <li>Data Analysis</li>
                    <li>Discord Bots</li>
                    <li>OSINT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <Experience />

      <!-- Projects Section -->
      <Projects />

      <!-- Contact Section -->
      <section id="contact" class="py-20 bg-base-200">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8">{{ $t("contact.title") }}</h2>
            <p class="text-lg mb-8 text-base-content/80">
              {{ $t("contact.description") }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title mb-4">
                    {{ $t("contact.info.email") }}
                  </h3>
                  <p class="flex items-center">
                    <Icon name="heroicons:envelope" size="20" class="mr-2" />
                    lefevre.arthur98@gmail.com
                  </p>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <h3 class="card-title mb-4">
                    {{ $t("contact.info.location") }}
                  </h3>
                  <p class="flex items-center">
                    <Icon name="heroicons:map-pin" size="20" class="mr-2" />
                    Belgique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// SEO and Meta
useHead({
  title: "Arthur Lefevre - Développeur Full Stack",
  meta: [
    {
      name: "description",
      content:
        "Développeur Full Stack spécialisé en Vue.js/Nuxt.js, Node.js et Data Scraping. Création de solutions web innovantes et automatisation de processus.",
    },
    {
      name: "keywords",
      content:
        "développeur web, full stack, Vue.js, Nuxt.js, Node.js, JavaScript, TypeScript, Python, web scraping, discord bot, OSINT",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "Arthur Lefevre - Développeur Full Stack",
    },
    {
      property: "og:description",
      content:
        "Développeur Full Stack spécialisé en Vue.js/Nuxt.js, Node.js et Data Scraping.",
    },
    { property: "og:url", content: "https://arthurlefevre.dev" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

// Language switching
const { locale, setLocale } = useI18n();

const switchLanguage = (lang) => {
  setLocale(lang);
};

// Theme switching
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// Initialize theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--b2));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--p));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--pf));
}
</style>
