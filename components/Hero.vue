<template>
  <section class="hero min-h-screen hero-gradient">
    <div class="hero-content text-center text-primary-content">
      <div class="max-w-4xl">
        <!-- Avatar -->
        <div class="avatar mb-8">
          <div
            class="w-32 md:w-40 rounded-full ring ring-primary-content ring-offset-base-100 ring-offset-2 animate-float"
          >
            <img src="/avatar.jpg" alt="Arthur Lefevre" />
          </div>
        </div>

        <!-- Introduction -->
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          {{ $t("hero.greeting") }}
          <span
            class="text-base-content bg-base-100 px-4 py-2 rounded-lg inline-block mt-2"
          >
            {{ $t("hero.name") }}
          </span>
        </h1>

        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          {{
            $t("hero.title", {
              vue: $t("hero.vue"),
              node: $t("hero.node"),
              scraping: $t("hero.scraping"),
            })
          }}
        </p>

        <!-- Skills Pills -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <div
            v-for="skill in skills"
            :key="skill"
            class="badge badge-lg badge-accent font-medium"
          >
            {{ skill }}
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center justify-center mb-8 opacity-80">
          <Icon name="heroicons:map-pin" size="20" class="mr-2" />
          <span>{{ $t("hero.location") }}</span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#projects" class="btn btn-accent btn-lg gap-2">
            <Icon name="heroicons:eye" size="20" />
            {{ $t("hero.viewProjects") }}
          </a>
          <a href="#contact" class="btn btn-outline btn-lg gap-2">
            <Icon name="heroicons:envelope" size="20" />
            {{ $t("hero.contact") }}
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6">
          <a
            href="https://github.com/Arthur-Lefevre-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-ghost btn-lg hover:btn-accent"
          >
            <Icon name="simple-icons:github" size="24" />
          </a>
          <a
            href="https://linkedin.com/in/arthur-lefevre"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-circle btn-ghost btn-lg hover:btn-info"
          >
            <Icon name="simple-icons:linkedin" size="24" />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <a href="#about" class="btn btn-circle btn-ghost text-primary-content">
        <Icon name="heroicons:chevron-down" size="24" />
      </a>
    </div>
  </section>
</template>

<script setup>
// Skills data
const skills = [
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Web Scraping",
  "Discord Bot",
  "OSINT",
  "API Development",
];

// Simple translation function
const $t = (key, params = {}) => {
  const translations = {
    hero: {
      greeting: "Bonjour, je suis",
      name: "Arthur Lefevre",
      title: "Développeur Full Stack spécialisé en {vue}, {node} et {scraping}",
      vue: "Vue.js/Nuxt.js",
      node: "Node.js",
      scraping: "Data Scraping",
      location: "Belgique",
      viewProjects: "Voir mes projets",
      contact: "Me contacter",
    },
  };

  const keys = key.split(".");
  let value = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  // Simple parameter replacement
  if (typeof value === "string" && Object.keys(params).length > 0) {
    Object.keys(params).forEach((param) => {
      value = value.replace(`{${param}}`, params[param]);
    });
  }

  return value;
};
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, hsl(var(--p)) 0%, hsl(var(--s)) 100%);
}

/* Custom floating animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
