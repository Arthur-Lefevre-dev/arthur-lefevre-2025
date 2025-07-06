<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Expérience
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></div>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"
          ></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in experiences"
              :key="index"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"
              ></div>

              <!-- Content Card -->
              <div
                class="w-full md:w-5/12 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                :class="
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                "
              >
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      {{ item.title }}
                    </h3>
                    <p class="text-blue-600 dark:text-blue-400 font-medium">
                      {{ item.company }}
                    </p>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"
                  >
                    {{ item.period }}
                  </span>
                </div>

                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{ item.description }}
                </p>

                <!-- Technologies Used -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in item.technologies"
                    :key="tech"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="mt-16">
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Formation
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h4
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                {{ edu.degree }}
              </h4>
              <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {{ edu.school }}
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                {{ edu.period }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Experience data
const experiences = [
  {
    title: "Développeur Full Stack Freelance",
    company: "Indépendant",
    period: "2021 - Présent",
    description:
      "Développement d'applications web modernes, création de Discord bots, outils de web scraping et solutions OSINT personnalisées pour divers clients.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Discord.js",
      "Python",
      "Web Scraping",
    ],
  },
  {
    title: "Développeur de Projets Open Source",
    company: "GitHub",
    period: "2020 - Présent",
    description:
      "Contribution active à des projets open source et développement d'outils spécialisés en analyse de données et monitoring Steam.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "Steam API",
      "Data Analysis",
      "OSINT",
    ],
  },
  {
    title: "Spécialiste en Data Scraping",
    company: "Projets Personnels",
    period: "2019 - Présent",
    description:
      "Développement d'outils sophistiqués pour l'extraction et l'analyse de données web, incluant des solutions multi-moteurs de recherche.",
    technologies: [
      "Python",
      "Web Scraping",
      "Data Mining",
      "API Integration",
      "Automation",
    ],
  },
];

// Education data
const education = [
  {
    degree: "Formation Autodidacte en Développement Web",
    school: "Apprentissage Continu",
    period: "2018 - Présent",
  },
  {
    degree: "Spécialisation en OSINT et Cybersécurité",
    school: "Formations en ligne",
    period: "2019 - Présent",
  },
];
</script>

<style scoped>
/* Responsive timeline adjustments */
@media (max-width: 768px) {
  .absolute.left-1\/2 {
    left: 1rem;
    transform: translateX(0);
  }

  .w-full.md\:w-5\/12 {
    margin-left: 2rem;
  }
}

/* Hover effects */
.bg-white:hover {
  transform: translateY(-2px);
}

.dark .bg-gray-900:hover {
  transform: translateY(-2px);
}
</style>
