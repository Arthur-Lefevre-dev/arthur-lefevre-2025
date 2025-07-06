<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mes Projets
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></div>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Découvrez mes projets open source et mes contributions sur GitHub
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <!-- Project Header -->
            <div class="p-6 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-start justify-between">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                  >
                    {{ project.name.charAt(0) }}
                  </div>
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      {{ project.name }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ project.language }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span
                    v-if="project.stars"
                    class="flex items-center text-yellow-500 text-sm"
                  >
                    <Icon name="heroicons:star" size="16" class="mr-1" />
                    {{ project.stars }}
                  </span>
                  <span
                    class="flex items-center text-gray-500 dark:text-gray-400 text-sm"
                  >
                    <Icon name="heroicons:eye" size="16" class="mr-1" />
                    {{ project.visibility }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Features -->
              <div class="mb-4">
                <h4
                  class="text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Fonctionnalités principales :
                </h4>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li
                    v-for="feature in project.features"
                    :key="feature"
                    class="flex items-start"
                  >
                    <Icon
                      name="heroicons:check-circle"
                      size="16"
                      class="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Action Buttons -->
              <div class="flex space-x-3">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                >
                  <Icon name="simple-icons:github" size="16" class="mr-2" />
                  Code
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  <Icon
                    name="heroicons:arrow-top-right-on-square"
                    size="16"
                    class="mr-2"
                  />
                  Démo
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- GitHub Link -->
        <div class="text-center mt-12">
          <a
            href="https://github.com/Arthur-Lefevre-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Icon name="simple-icons:github" size="20" class="mr-2" />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects data based on GitHub information
const projects = [
  {
    name: "STEAM-BAN-TRACKER",
    language: "JavaScript",
    description:
      "Discord bot sophistiqué pour le monitoring des bans Steam. Surveille automatiquement les comptes Steam et notifie les changements de statut de ban en temps réel.",
    technologies: [
      "Discord.js",
      "Node.js",
      "Steam API",
      "MongoDB",
      "Cron Jobs",
    ],
    features: [
      "Surveillance automatique des bans Steam",
      "Notifications Discord en temps réel",
      "Interface de commandes Discord",
      "Historique des bans",
      "Support multi-serveurs",
    ],
    github: "https://github.com/Arthur-Lefevre-dev/STEAM-BAN-TRACKER",
    visibility: "Public",
    stars: 1,
  },
  {
    name: "STEAM-BAN-TRACKER-WEB-UI",
    language: "Vue.js",
    description:
      "Interface web moderne pour visualiser et gérer les données du Steam Ban Tracker. Permet une gestion intuitive des surveillances et l'analyse des statistiques.",
    technologies: ["Vue.js", "Nuxt.js", "TailwindCSS", "Chart.js", "API REST"],
    features: [
      "Dashboard interactif",
      "Visualisation des statistiques",
      "Gestion des surveillances",
      "Historique graphique",
      "Interface responsive",
    ],
    github: "https://github.com/Arthur-Lefevre-dev/STEAM-BAN-TRACKER-WEB-UI",
    visibility: "Public",
    demo: "#",
  },
  {
    name: "amd-log-analyzer",
    language: "Vue.js",
    description:
      "Outil d'analyse avancée des logs AMD pour diagnostiquer les problèmes de performance et de stabilité. Fournit des insights détaillés sur les performances GPU.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "File Processing",
      "Data Visualization",
      "Performance Analysis",
    ],
    features: [
      "Analyse automatique des logs AMD",
      "Détection des erreurs et warnings",
      "Visualisation des performances",
      "Rapports détaillés",
      "Export des résultats",
    ],
    github: "https://github.com/Arthur-Lefevre-dev/amd-log-analyzer",
    visibility: "Public",
  },
  {
    name: "scrapamax",
    language: "JavaScript",
    description:
      "Outil OSINT puissant pour la recherche multi-moteurs. Automatise les recherches sur plusieurs moteurs de recherche simultanément pour l'intelligence open source.",
    technologies: [
      "Node.js",
      "Web Scraping",
      "Puppeteer",
      "OSINT",
      "Multi-threading",
    ],
    features: [
      "Recherche multi-moteurs simultanée",
      "Extraction de données automatisée",
      "Filtrage intelligent des résultats",
      "Export en multiple formats",
      "Interface ligne de commande",
    ],
    github: "https://github.com/Arthur-Lefevre-dev/scrapamax",
    visibility: "Public",
  },
  {
    name: "Arthur-Lefevre-Web",
    language: "Vue.js",
    description:
      "Code source de mon portfolio personnel. Site web moderne et responsive construit avec Vue.js, mettant en valeur mes projets et compétences.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TailwindCSS",
      "Responsive Design",
      "SEO",
    ],
    features: [
      "Design moderne et responsive",
      "Optimisation SEO",
      "Mode sombre/clair",
      "Animations fluides",
      "Performance optimisée",
    ],
    github: "https://github.com/Arthur-Lefevre-dev/Arthur-Lefevre-Web",
    visibility: "Public",
    demo: "https://arthur-lefevre.dev",
  },
];
</script>

<style scoped>
/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hover animations */
.hover\:scale-105:hover {
  transform: scale(1.02);
}

/* Gradient background for project icons */
.bg-gradient-to-br {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
</style>
