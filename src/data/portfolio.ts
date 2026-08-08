export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  repo?: string;
  tag: string;
  languages: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Apex Athletic",
  //   description:
  //     "Modern athletic brand e-commerce platform featuring product showcase, multilingual support (English/Albanian), and user authentication system for a professional shopping experience.",
  //   image: "/projects/Apex-Athletics-Preview.webp",
  //   url: "https://apex-athletic.vercel.app/",
  //   repo: "https://github.com/Diellmorina4/APEX-ATHLETIC",
  //   tag: "E-Commerce",
  //   languages: ["HTML", "CSS", "JavaScript", "React"],
  //   featured: true,
  // },
  {
    id: 9,
    title: "Pulse AI",
    description:
      "Pulse AI is a modern AI workspace concept designed to bring multiple AI-powered tools into one seamless experience. The project focuses on a clean dark interface, responsive design, and a futuristic visual identity across desktop and mobile. It includes concepts for AI chat, document intelligence, image generation, website building, and code assistance.",
    image: "/projects/pulse-ai.webp",
    url: "https://pulse-ai-cloud.lovable.app/",
    tag: "AI Website",
    languages: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "Limani Studio",
    description:
      "Professional photography and video production portfolio. Showcases wedding photography, event coverage, and creative production services with a sleek, elegant design.",
    image: "/projects/Foto-Limani-Preview.webp",
    url: "https://foto-limani.netlify.app/",
    repo: "https://github.com/diellmorina/Limani-website",
    tag: "Photography",
    languages: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 3,
    title: "SUVATIMI-H",
    description:
      "Professional facade and exterior renovation services website. Features project gallery, service descriptions, supplier information, and bilingual interface (English/Albanian).",
    image: "/projects/suvatimi.webp",
    url: "https://suvatimi.vercel.app/",
    repo: "https://github.com/Diellmorina4/suvatimi",
    tag: "Business",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    title: "Neon AI",
    description:
      "Neon AI is a modern AI assistant that delivers fast, intelligent, and accurate responses through a clean, user-friendly interface. Whether you need help with coding, writing, problem-solving, or everyday questions, Neon AI provides real-time assistance to boost productivity and simplify your workflow.",
    image: "/projects/neon_ai.webp",
    url: "https://neon-ai-bot.vercel.app/",
    repo: "https://github.com/diellmorina/NEON-AI-WEBSITE.git",
    tag: "AI Bot Website",
    languages: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    id: 4,
    title: "Nissi Barber Shop",
    description:
      "Professional barber shop website showcasing services, gallery, and booking information. Clean, modern design tailored for a salon business.",
    image: "/projects/nissi-Preview.webp",
    url: "https://barbershop-nissi.vercel.app/",
    repo: "https://github.com/diellmorina/barbershop-nissi",
    tag: "Barber Shop",
    languages: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 10,
    title: "Restaurant Lindi",
    description:
      "Restaurant Lindi is a modern restaurant website designed to showcase the restaurant, its menu, services, and overall dining experience. It provides visitors with an attractive and easy-to-navigate interface where they can explore dishes and find essential information before visiting.",
    image: "/projects/RestaurantLindi.webp",
    url: "https://restaurant-lindi.lovable.app/",
    tag: "Restaurant",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Fshati Ratkoc",
    description:
      "Informative website about Ratkoc village in Kosovo. Showcases local culture, history, attractions, and community information with a clean, modern design.",
    image: "/projects/Ratkoc-Preview.webp",
    url: "https://fshati-ratkoc.vercel.app/",
    repo: "https://github.com/diellmorina/Fshati-Ratkoc",
    tag: "Local",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Pekara Vojvodina",
    description:
      "Freshly baked every day, Pekara Vojvodina offers delicious breads, pastries, burek, sandwiches, and desserts made with traditional recipes and high-quality ingredients.",
    image: "/projects/Furra-Preview.webp",
    url: "https://pekara-vojvodina.vercel.app/",
    repo: "https://github.com/diellmorina/Pekara-vojvodina",
    tag: "Business",
    languages: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 7,
    title: "Donate to Charity",
    description:
      "A simple charity donation website that allows users to donate to various causes. Features a clean design, easy navigation, and secure payment options.",
    image: "/projects/Charity.webp",
    url: "https://donate-to-charity.vercel.app/",
    repo: "https://github.com/diellmorina/Charity",
    tag: "Charity",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["GitHub", "Vercel", "Netlify"],
  },
  {
    id: "other",
    label: "Other",
    items: ["UI/UX", "Responsive Design", "Accessibility", "Performance"],
  },
];

export const contact = {
  email: "diell.morina5@gmail.com",
  phone: "+383 45 141 733",
  phoneHref: "tel:+38345141733",
  github: "https://github.com/diellmorina",
};
