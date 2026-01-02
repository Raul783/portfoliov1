// src/data/portfolio.js

export const personalInfo = {
  name: "Raul Antonio Suarez Polanco",
  bio: "Soy un desarrollador con una fuerte base en lógica, análisis de sistemas y construcción de soluciones desde cero, capaz de transformar ideas abstractas en implementaciones concretas, funcionales y escalables.",
  image: "/raul.jpg"
};

export const categories = [
  { icon: "🎮", title: "Juegos", desc: "Proyectos interactivos y mecánicas innovadoras", link: "/categorias/juegos" },
  { icon: "💼", title: "Sistemas para negocios", desc: "Gestión y automatización para negocios", link: "/categorias/enterprise" },
  { icon: "🤖", title: "ML & IA", desc: "Modelos predictivos y soluciones con ML", link: "/en-construccion" },
  { icon: "🌐", title: "Aplicaciones Web", desc: "Clones, E-commerce y plataformas modernas", link: "/categorias/clonesweb" },
];

export const technologies = [
  { iconClass: "fab fa-js", name: "JavaScript", color: "#f7df1e" },
  { iconClass: "fas fa-database", name: "MySql", color: "#336791" },
  { iconClass: "fab fa-node", name: "Node.js", color: "#68a063" },
  { iconClass: "fab fa-python", name: "Python", color: "#3776ab" },
  { iconClass: "fa-brands fa-react", name: "ReactJS", color: "#a2cbecff" },
  { iconClass: "fa-brands fa-aws", name: "AWS", color: "#0f1113ff" }

];

export const projects = [
  {
    title: "Coming soon",
    desc: "Coming soon...",
    image: "/sooner.webp",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
  {
    title: "Coming soon",
    desc: "Coming soon...",
    image: "/sooner.webp",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
  {
    title: "Coming soon",
    desc: "Coming soon...",
    image: "/sooner.webp",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
];

export const games = [
  {
    id: 1,
    title: "Ajedrez Online",
    image: "/chess.webp",
    link: "/en-construccion",
    repo: "https://github.com",
    isReady: false,
    techs: ["fab fa-react", "fa-brands fa-node", "fas fa-database"]
  },
  {
    id: 2,
    title: "Buscaminas",
    image: "/buscaminas.webp",
    link: "/en-construccion",
    repo: "https://github.com",
    isReady: false,
    techs: ["fa-brands fa-react"]
  },
  {
      id: 3,
      title: "Sudoku",
      image: "/sudoku.webp",
      link: "/en-construccion",
      repo: "https://github.com",
      isReady: false,
      techs: ["fab fa-js", "fas fa-code"]
  },
  {
      id: 4,
      title: "Dominoes",
      image: "/domino.webp",
      link: "/en-construccion",
      repo: "https://github.com",
      isReady: false,
      techs: ["fab fa-js", "fas fa-code"]
  },
  {
      id: 5,
      title: "Puzzle",
      image: "/puzzle.webp",
      link: "/en-construccion",
      repo: "https://github.com",
      isReady: false,
      techs: ["fab fa-js", "fas fa-code"]
  },
  {
      id: 6,
      title: "Solitario",
      image: "/solitario.webp",
      link: "/en-construccion",
      repo: "https://github.com",
      isReady: false,
      techs: ["fab fa-js", "fas fa-code"]
  }
];

export const enterprise = [
  {
    id: 1,
    title: "Coming soon",
    description: "Coming soon...",
    image: "/sooner.webp",
    link: "https://github.com",
    repo: "https://github.com",
    isReady: false,
    techs: ["fab fa-react"],
    tags: ["Full Stack", "Analytics", "Auth"]
  },
  {
    id: 2,
    title: "Coming soon",
    description: "Coming soon...",
    image: "/sooner.webp",
    link: "/en-construccion",
    repo: "https://github.com",
    isReady: false,
    techs: ["fab fa-node"],
    tags: ["Backend Heavy", "Microservices"]
  },
  {
    id: 3,
    title: "Coming soon",
    description: "Coming soon...",
    image: "/sooner.webp",
    link: "https://github.com",
    repo: "https://github.com",
    isReady: false,
    techs: ["fas fa-server"],
    tags: ["API REST", "Stripe"]
  }
];

export const enterpriseProjects = [
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "Clon de Spotify con reproducción de música, playlists personalizadas y búsqueda avanzada. Incluye autenticación de usuarios, gestión de favoritos y reproductor funcional con controles completos.",
    image: "/sooner.webp",
    techs: [
      "fab fa-react",
      "fab fa-node-js",
      "fas fa-music",
      "fas fa-database",
      "fab fa-spotify",
    ],
    link: "https://github.com",
    repo: "https://github.com",
    isReady: true,
  },

  {
    id: "movieflix-clone",
    title: "MovieFlix Clone",
    description:
      "Plataforma de streaming estilo Netflix con catálogo de películas y series. Integración con API de TMDb, sistema de búsqueda, categorías dinámicas y reproductor de trailers con interfaz responsive.",
    image: "/sooner.webp",
    techs: [
      "fab fa-react",
      "fab fa-js",
      "fas fa-film",
      "fas fa-server",
      "fas fa-play-circle",
    ],
    link: "https://github.com",
    repo: "https://github.com",
    isReady: true,
  },

  {
    id: "trello-clone",
    title: "Trello Clone",
    description:
      "Sistema de gestión de proyectos tipo Kanban con tableros personalizables. Funcionalidades de drag & drop, asignación de tareas, etiquetas, fechas límite y colaboración en tiempo real.",
    image: "/sooner.webp",
    techs: [
      "fab fa-react",
      "fab fa-node-js",
      "fas fa-tasks",
      "fas fa-database",
      "fas fa-columns",
    ],
    link: "https://github.com",
    repo: "https://github.com",
    isReady: false,
  }
];