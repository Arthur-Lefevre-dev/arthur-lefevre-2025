<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contactez-moi
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></div>
          <p
            class="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour
            discuter de vos besoins.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
              >
                Informations de contact
              </h3>

              <div class="space-y-4">
                <!-- Location -->
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Icon
                      name="heroicons:map-pin"
                      size="20"
                      class="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">
                      Localisation
                    </p>
                    <p class="text-gray-600 dark:text-gray-300">Belgique</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Icon
                      name="heroicons:envelope"
                      size="20"
                      class="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:contact@arthur-lefevre.dev"
                      class="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      contact@arthur-lefevre.dev
                    </a>
                  </div>
                </div>

                <!-- GitHub -->
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Icon
                      name="simple-icons:github"
                      size="20"
                      class="text-gray-600 dark:text-gray-300"
                    />
                  </div>
                  <div>
                    <p class="text-gray-900 dark:text-white font-medium">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/Arthur-Lefevre-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      @Arthur-Lefevre-dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Specialties -->
            <div>
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Mes spécialités
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="specialty in specialties"
                  :key="specialty"
                  class="flex items-center p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                >
                  <Icon
                    name="heroicons:check-circle"
                    size="16"
                    class="text-green-500 mr-2"
                  />
                  <span class="text-gray-700 dark:text-gray-300 text-sm">{{
                    specialty
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Envoyez-moi un message
            </h3>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Votre nom complet"
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <!-- Subject -->
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Sujet *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="web-development">Développement Web</option>
                  <option value="discord-bot">Discord Bot</option>
                  <option value="data-scraping">Data Scraping</option>
                  <option value="osint">OSINT</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon
                  v-if="isSubmitting"
                  name="heroicons:arrow-path"
                  size="20"
                  class="animate-spin mr-2"
                />
                <Icon
                  v-else
                  name="heroicons:paper-airplane"
                  size="20"
                  class="mr-2"
                />
                {{ isSubmitting ? "Envoi en cours..." : "Envoyer le message" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Form data
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Form state
const isSubmitting = ref(false);

// Specialties
const specialties = [
  "Applications Vue.js/Nuxt.js",
  "Discord Bots",
  "Web Scraping",
  "OSINT Tools",
  "API Development",
  "Data Analysis",
  "Automation",
  "Performance Optimization",
];

// Submit form
const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    alert(
      "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
    );

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Form focus styles */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

/* Smooth transitions */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
