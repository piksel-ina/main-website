import { translate } from "@docusaurus/Translate";
import { Map, FileCode2, Unplug, GitBranch } from "lucide-react";

export const heroData = {
  title: translate({
    id: "homepage.hero.title",
    message: "Bumi Digital Indonesia",
    description: "The main title on the homepage hero section",
  }),
  subtitle: translate({
    id: "homepage.hero.subtitle",
    message:
      "Piksel mengintegrasikan citra satelit dengan teknologi cloud computing untuk observasi bumi digital di seluruh Indonesia",
    description: "The subtitle text on the homepage hero section",
  }),
  buttonText: translate({
    id: "homepage.hero.button",
    message: "Pelajari Selengkapnya",
    description: "The button text to read documentation",
  }),
  buttonLink: "/docs/penggunaan/intro",
};

export const articlesData = [
  {
    id: 1,
    title: translate({
      id: "articles.defaultArticles.feat01.title",
      message: "Memahami Citra Satelit untuk Indonesia",
    }),
    description: translate({
      id: "articles.defaultArticles.feat01.description",
      message:
        "Pelajari dasar-dasar analisis citra satelit dan penerapannya untuk fitur geografis Indonesia serta monitoring lingkungan.",
    }),
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0ZWxsaXRlJTIwaW1hZ2VyeXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/satellite-imagery-basics",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: translate({
      id: "articles.defaultArticles.feat02.title",
      message: "Cloud Computing untuk Data Geospasial",
    }),
    description: translate({
      id: "articles.defaultArticles.feat02.description",
      message:
        "Temukan bagaimana cloud computing merevolusi pemrosesan dan analisis data geospasial untuk proyek observasi bumi skala besar.",
    }),
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "/docs/cloud-computing-geospatial",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: translate({
      id: "articles.defaultArticles.feat03.title",
      message: "Monitoring Lingkungan dengan Piksel",
    }),
    description: translate({
      id: "articles.defaultArticles.feat03.description",
      message:
        "Jelajahi bagaimana teknologi digital earth Piksel membantu memonitor deforestasi, pertumbuhan urban, dan dampak perubahan iklim di seluruh Indonesia.",
    }),
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/environmental-monitoring",
    date: "2024-01-25",
  },
  {
    id: 4,
    title: translate({
      id: "articles.defaultArticles.feat04.title",
      message: "Integrasi API Data Piksel",
    }),
    description: translate({
      id: "articles.defaultArticles.feat04.description",
      message:
        "Panduan step-by-step untuk mengintegrasikan API data geospasial Piksel ke dalam aplikasi dan workflow Anda.",
    }),
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBpJTIwaW50ZWdyYXRpb258ZW58MHx8MHx8fDA%3D",
    link: "/docs/api-integration",
    date: "2024-02-01",
  },
  {
    id: 5,
    title: translate({
      id: "articles.defaultArticles.feat05.title",
      message: "Otomasi Workflow Geospasial",
    }),
    description: translate({
      id: "articles.defaultArticles.feat05.description",
      message:
        "Pelajari cara mengotomasi pemrosesan data geospasial skala besar menggunakan Piksel Workflows dan teknologi Argo.",
    }),
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/workflow-automation",
    date: "2024-02-05",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: Map,
    title: translate({
      id: "ourServices.service1.title",
      message: "Piksel Map",
      description: "Title for service 1",
    }),
    description: translate({
      id: "ourServices.service1.description",
      message:
        "Eksplorasi dan visualisasi dataset geospasial melalui platform web interaktif kami.",
      description: "Service 1 Description",
    }),
    buttonText: translate({
      id: "ourServices.service1.button",
      message: "Mulai Eksplorasi",
      description: "Button text for service 1",
    }),
    link: "/map",
  },
  {
    id: 2,
    icon: FileCode2,
    title: translate({
      id: "ourServices.service2.title",
      message: "Piksel Sandbox",
      description: "Title for service 2",
    }),
    description: translate({
      id: "ourServices.service2.description",
      message:
        "Eksperimen, belajar, dan buat prototype di environment Jupyter berbasis cloud kami.",
      description: "Service 2 Description",
    }),
    buttonText: translate({
      id: "ourServices.service2.button",
      message: "Lihat Analytics",
      description: "Button text for service 2",
    }),
    link: "/sandbox",
  },
  {
    id: 3,
    icon: Unplug,
    title: translate({
      id: "ourServices.service3.title",
      message: "Piksel Data API",
      description: "Title for service 3",
    }),
    description: translate({
      id: "ourServices.service3.description",
      message:
        "Akses dataset geospasial yang komprehensif melalui infrastruktur API kami.",
      description: "Service 3 Description",
    }),
    buttonText: translate({
      id: "ourServices.service3.button",
      message: "Jelajah API",
      description: "Button text for service 3",
    }),
    link: "/api",
  },
  {
    id: 4,
    icon: GitBranch,
    title: translate({
      id: "ourServices.service4.title",
      message: "Piksel Workflows",
      description: "Title for service 4",
    }),
    description: translate({
      id: "ourServices.service4.description",
      message:
        "Otomasi pemrosesan data geospasial skala besar dengan Argo Workflows.",
      description: "Service 4 Description",
    }),
    buttonText: translate({
      id: "ourServices.service4.button",
      message: "Jelajahi Workflows",
      description: "Button text for service 4",
    }),
    link: "/workflows",
  },
];

export const useCasesData = [
  {
    id: "usecase1",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/environment",
    title: translate({
      id: "useCase.card.environment.title",
      message: "Lingkungan",
      description: "Title for use case 1",
    }),
    description: translate({
      id: "useCase.card.environment.description",
      message:
        "Kami menyediakan citra dan data terpercaya tentang lanskap Indonesia untuk peneliti dan pengelola lahan, membantu mereka menavigasi kompleksitas lingkungan",
      description: "Description for use case 1",
    }),
  },
  {
    id: "usecase2",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/technology",
    title: translate({
      id: "useCase.card.technology.title",
      message: "Teknologi",
      description: "Title for use case 2",
    }),
    description: translate({
      id: "useCase.card.technology.description",
      message:
        "Solusi terkini untuk tantangan modern dalam manajemen dan analisis data, didukung oleh riset dan pengembangan yang inovatif.",
      description: "Description for case 2",
    }),
  },
  {
    id: "usecase3",
    image:
      "https://plus.unsplash.com/premium_photo-1666256629413-ea053d34ff36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/research",
    title: translate({
      id: "useCase.card.research.title",
      message: "Riset",
      description: "Title for use case 3",
    }),
    description: translate({
      id: "useCase.card.research.description",
      message:
        "Mendukung riset ilmiah dengan data yang andal dan tools inovatif yang memungkinkan penemuan dan wawasan terobosan.",
      description: "Description for use case 3",
    }),
  },
];
