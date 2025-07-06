<template>
  <section id="about" class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-base-content mb-4">
            À propos de moi
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          ></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Content Card -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="space-y-6">
                <p class="text-lg leading-relaxed">
                  Passionné par le développement web et les technologies
                  modernes, je me spécialise dans la création d'applications web
                  robustes et performantes. Mon expertise s'étend du front-end
                  au back-end, avec une forte prédilection pour l'écosystème
                  Vue.js et Node.js.
                </p>

                <p class="text-lg leading-relaxed">
                  J'ai développé une expertise particulière dans le
                  <span class="badge badge-primary">data scraping</span> et
                  l'<span class="badge badge-secondary">OSINT</span>, créant des
                  outils sophistiqués pour l'extraction et l'analyse de données.
                  Mon approche combine innovation technique et résolution
                  pratique de problèmes complexes.
                </p>

                <p class="text-lg leading-relaxed">
                  Basé en Belgique, je travaille constamment sur des projets
                  innovants, notamment des Discord bots, des outils d'analyse de
                  données et des applications web modernes.
                </p>

                <!-- Stats -->
                <div class="stats shadow w-full">
                  <div class="stat place-items-center">
                    <div class="stat-value text-primary">5+</div>
                    <div class="stat-desc">Projets GitHub</div>
                  </div>
                  <div class="stat place-items-center">
                    <div class="stat-value text-secondary">3+</div>
                    <div class="stat-desc">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Card -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title text-2xl mb-6">Compétences techniques</h3>

              <div class="space-y-6">
                <!-- Frontend -->
                <div>
                  <h4 class="font-semibold text-lg mb-3 flex items-center">
                    <div class="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                    Frontend
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="skill in frontendSkills"
                      :key="skill"
                      class="badge badge-primary badge-outline"
                    >
                      {{ skill }}
                    </div>
                  </div>
                </div>

                <!-- Backend -->
                <div>
                  <h4 class="font-semibold text-lg mb-3 flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    Backend
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="skill in backendSkills"
                      :key="skill"
                      class="badge badge-success badge-outline"
                    >
                      {{ skill }}
                    </div>
                  </div>
                </div>

                <!-- Data & Tools -->
                <div>
                  <h4 class="font-semibold text-lg mb-3 flex items-center">
                    <div class="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                    Data & Outils
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="skill in dataSkills"
                      :key="skill"
                      class="badge badge-secondary badge-outline"
                    >
                      {{ skill }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Skills data organized by category
const frontendSkills = [
  "Vue.js",
  "Nuxt.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Responsive Design",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "API REST",
  "Python",
  "Discord.js",
  "WebSockets",
  "Database Design",
];

const dataSkills = [
  "Web Scraping",
  "OSINT",
  "Data Analysis",
  "Automation",
  "Steam API",
  "Log Analysis",
  "Search Engines",
];
</script>

<style scoped>
/* Add smooth fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease-out;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}
</style>
