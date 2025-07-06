<template>
  <div class="min-h-screen bg-base-100">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Content -->
    <main class="relative">
      <!-- Hero Section -->
      <Hero />

      <!-- About Section -->
      <About />

      <!-- Experience Section -->
      <Experience />

      <!-- Projects Section -->
      <Projects />

      <!-- Contact Section -->
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Define page metadata
useSeoMeta({
  title: "Arthur Lefevre - Développeur Full Stack",
  ogTitle: "Arthur Lefevre - Développeur Full Stack",
  description:
    "Portfolio d'Arthur Lefevre - Développeur spécialisé en Vue.js/Nuxt.js, Node.js et Data Scraping",
  ogDescription:
    "Portfolio d'Arthur Lefevre - Développeur spécialisé en Vue.js/Nuxt.js, Node.js et Data Scraping",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
});

// Theme management
const theme = ref("light");

// Set initial theme
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    theme.value = savedTheme;
  } else if (prefersDark) {
    theme.value = "dark";
  }

  document.documentElement.setAttribute("data-theme", theme.value);
});

// Provide theme to all components
provide("theme", theme);
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar with DaisyUI colors */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-base-200;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary rounded;
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--p) / 0.8);
}
</style>
