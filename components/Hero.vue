<template>
  <section class="hero min-h-screen hero-gradient">
    <div class="hero-content text-center text-primary-content">
      <div class="max-w-4xl">
        <!-- Avatar -->
        <div class="avatar mb-8">
          <div
            class="w-32 md:w-40 rounded-full ring ring-primary-content ring-offset-base-100 ring-offset-2 animate-float"
          >
            <img src="/avatar.png" alt="Arthur Lefevre" />
          </div>
        </div>

        <!-- Introduction -->
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Bonjour, je suis
          <span
            class="text-base-content bg-base-100 px-4 py-2 rounded-lg inline-block mt-2"
          >
            Arthur Lefevre
          </span>
        </h1>

        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          {{ $t("hero.subtitle") }}
        </p>

        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-80">
          {{ $t("hero.description") }}
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
          <span>Belgique</span>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#projects" class="btn btn-accent btn-lg gap-2">
            <Icon name="heroicons:eye" size="20" />
            {{ $t("hero.cta") }}
          </a>
          <a href="#contact" class="btn btn-outline btn-lg gap-2">
            <Icon name="heroicons:envelope" size="20" />
            Me contacter
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
