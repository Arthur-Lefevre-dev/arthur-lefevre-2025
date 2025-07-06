import fr from "./lang/fr.json";
import en from "./lang/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    en: {
      welcome: "Welcome",
      navigation: {
        home: "Home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        title: "Full Stack Developer",
        subtitle: "Specialized in Vue.js/Nuxt.js, Node.js and Data Scraping",
        description:
          "Passionate about creating innovative web solutions and automating data processes.",
        cta: "Explore My Work",
      },
      about: {
        title: "About Me",
        description:
          "I am a Full Stack Developer from Belgium with expertise in modern web technologies. My passion lies in creating efficient, scalable solutions and exploring the endless possibilities of web development.",
        skills: {
          title: "Skills & Technologies",
          frontend: "Frontend",
          backend: "Backend",
          tools: "Tools & Others",
          data: "Data & Automation",
        },
      },
      experience: {
        title: "Professional Experience",
        freelance: {
          title: "Freelance Full Stack Developer",
          company: "Self-employed",
          period: "2020 - Present",
          description:
            "Development of custom web applications, Discord bots, and data scraping solutions for various clients.",
        },
        projects: {
          title: "Personal Projects",
          description:
            "Creation of innovative tools and applications to solve real-world problems and explore new technologies.",
        },
      },
      projects: {
        title: "Featured Projects",
        viewCode: "View Code",
        liveDemo: "Live Demo",
        technologies: "Technologies",
        steamTracker: {
          title: "Steam Ban Tracker",
          description:
            "Discord bot for monitoring Steam account bans with real-time notifications and comprehensive tracking features.",
          features: [
            "Real-time ban monitoring",
            "Discord notifications",
            "User statistics",
            "Automated reporting",
          ],
        },
        webUI: {
          title: "Steam Tracker Web UI",
          description:
            "Modern web interface for the Steam Ban Tracker with intuitive dashboard and analytics.",
          features: [
            "Interactive dashboard",
            "Real-time updates",
            "User management",
            "Statistics visualization",
          ],
        },
        logAnalyzer: {
          title: "AMD Log Analyzer",
          description:
            "Tool for analyzing AMD graphics driver logs to diagnose issues and optimize performance.",
          features: [
            "Log parsing",
            "Error detection",
            "Performance analysis",
            "Report generation",
          ],
        },
        scrapamax: {
          title: "Scrapamax",
          description:
            "OSINT tool for multi-engine search across various data sources with advanced filtering capabilities.",
          features: [
            "Multi-engine search",
            "Data aggregation",
            "Advanced filtering",
            "Export functionality",
          ],
        },
        portfolio: {
          title: "Portfolio Website",
          description:
            "Personal portfolio built with modern technologies showcasing projects and skills.",
          features: [
            "Responsive design",
            "Multi-language support",
            "Modern UI/UX",
            "Performance optimized",
          ],
        },
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together",
        description:
          "I'm always interested in new opportunities and exciting projects. Feel free to reach out!",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
        },
        info: {
          email: "Email",
          location: "Location",
          availability: "Availability",
        },
      },
      footer: {
        description:
          "Full Stack Developer specializing in modern web technologies and data solutions.",
        links: {
          quick: "Quick Links",
          social: "Social Media",
          projects: "Projects",
        },
        copyright: "All rights reserved.",
        builtWith: "Built with",
      },
    },
    fr: {
      welcome: "Bienvenue",
      navigation: {
        home: "Accueil",
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact",
      },
      hero: {
        title: "Développeur Full Stack",
        subtitle: "Spécialisé en Vue.js/Nuxt.js, Node.js et Data Scraping",
        description:
          "Passionné par la création de solutions web innovantes et l'automatisation des processus de données.",
        cta: "Découvrir Mon Travail",
      },
      about: {
        title: "À Propos",
        description:
          "Je suis un développeur Full Stack de Belgique avec une expertise dans les technologies web modernes. Ma passion réside dans la création de solutions efficaces et évolutives, et dans l'exploration des possibilités infinies du développement web.",
        skills: {
          title: "Compétences & Technologies",
          frontend: "Frontend",
          backend: "Backend",
          tools: "Outils & Autres",
          data: "Données & Automation",
        },
      },
      experience: {
        title: "Expérience Professionnelle",
        freelance: {
          title: "Développeur Full Stack Freelance",
          company: "Indépendant",
          period: "2020 - Présent",
          description:
            "Développement d'applications web personnalisées, bots Discord et solutions de scraping de données pour divers clients.",
        },
        projects: {
          title: "Projets Personnels",
          description:
            "Création d'outils et d'applications innovants pour résoudre des problèmes du monde réel et explorer de nouvelles technologies.",
        },
      },
      projects: {
        title: "Projets Vedettes",
        viewCode: "Voir le Code",
        liveDemo: "Démo Live",
        technologies: "Technologies",
        steamTracker: {
          title: "Steam Ban Tracker",
          description:
            "Bot Discord pour surveiller les bannissements de comptes Steam avec notifications en temps réel et fonctionnalités de suivi complètes.",
          features: [
            "Surveillance en temps réel",
            "Notifications Discord",
            "Statistiques utilisateur",
            "Rapports automatisés",
          ],
        },
        webUI: {
          title: "Interface Web Steam Tracker",
          description:
            "Interface web moderne pour le Steam Ban Tracker avec tableau de bord intuitif et analytics.",
          features: [
            "Tableau de bord interactif",
            "Mises à jour en temps réel",
            "Gestion des utilisateurs",
            "Visualisation des statistiques",
          ],
        },
        logAnalyzer: {
          title: "Analyseur de Logs AMD",
          description:
            "Outil pour analyser les logs des pilotes graphiques AMD pour diagnostiquer les problèmes et optimiser les performances.",
          features: [
            "Analyse des logs",
            "Détection d'erreurs",
            "Analyse des performances",
            "Génération de rapports",
          ],
        },
        scrapamax: {
          title: "Scrapamax",
          description:
            "Outil OSINT pour la recherche multi-moteur à travers diverses sources de données avec des capacités de filtrage avancées.",
          features: [
            "Recherche multi-moteur",
            "Agrégation de données",
            "Filtrage avancé",
            "Fonctionnalité d'export",
          ],
        },
        portfolio: {
          title: "Site Portfolio",
          description:
            "Portfolio personnel construit avec des technologies modernes présentant projets et compétences.",
          features: [
            "Design responsive",
            "Support multi-langue",
            "UI/UX moderne",
            "Optimisé pour les performances",
          ],
        },
      },
      contact: {
        title: "Contactez-Moi",
        subtitle: "Travaillons ensemble",
        description:
          "Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. N'hésitez pas à me contacter !",
        form: {
          name: "Nom",
          email: "Email",
          subject: "Sujet",
          message: "Message",
          send: "Envoyer le Message",
        },
        info: {
          email: "Email",
          location: "Localisation",
          availability: "Disponibilité",
        },
      },
      footer: {
        description:
          "Développeur Full Stack spécialisé dans les technologies web modernes et les solutions de données.",
        links: {
          quick: "Liens Rapides",
          social: "Réseaux Sociaux",
          projects: "Projets",
        },
        copyright: "Tous droits réservés.",
        builtWith: "Construit avec",
      },
    },
  },
}));
