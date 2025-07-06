<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">Arthur Lefevre</h3>
          <p class="text-gray-400 mb-4 max-w-md">
            Développeur Full Stack spécialisé en Vue.js/Nuxt.js, Node.js et Data
            Scraping. Passionné par les technologies modernes et l'innovation.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://github.com/Arthur-Lefevre-dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Icon name="simple-icons:github" size="24" />
            </a>
            <a
              href="https://linkedin.com/in/arthur-lefevre"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Icon name="simple-icons:linkedin" size="24" />
            </a>
            <a
              href="mailto:contact@arthur-lefevre.dev"
              class="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Icon name="heroicons:envelope" size="24" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#experience"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Expérience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li>
              <span class="text-gray-400">Développement Web</span>
            </li>
            <li>
              <span class="text-gray-400">Discord Bots</span>
            </li>
            <li>
              <span class="text-gray-400">Web Scraping</span>
            </li>
            <li>
              <span class="text-gray-400">OSINT Tools</span>
            </li>
            <li>
              <span class="text-gray-400">API Development</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} Arthur Lefevre. Tous droits réservés.
        </p>
        <div class="flex items-center space-x-4 mt-4 md:mt-0">
          <span class="text-gray-400 text-sm">Conçu avec</span>
          <div class="flex items-center space-x-2">
            <Icon
              name="simple-icons:vue-dot-js"
              size="16"
              class="text-green-400"
            />
            <span class="text-gray-400 text-sm">Vue.js</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon
              name="simple-icons:nuxt-dot-js"
              size="16"
              class="text-green-400"
            />
            <span class="text-gray-400 text-sm">Nuxt.js</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon
              name="simple-icons:tailwindcss"
              size="16"
              class="text-cyan-400"
            />
            <span class="text-gray-400 text-sm">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

// Get current year
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Smooth hover transitions */
a {
  transition: all 0.2s ease-in-out;
}

/* Hover effects for social icons */
a:hover {
  transform: translateY(-2px);
}
</style>
