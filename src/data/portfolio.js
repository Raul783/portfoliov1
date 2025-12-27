// src/data/portfolio.js

export const personalInfo = {
  name: "Raul Antonio Suarez Polanco",
  bio: "Soy un desarrollador con una fuerte base en lógica, análisis de sistemas y construcción de soluciones desde cero, capaz de transformar ideas abstractas en implementaciones concretas, funcionales y escalables.",
  image: "/raul.jpg" // Asegúrate de poner tu foto en la carpeta 'public'
};

export const categories = [
  { icon: "🎮", title: "Juegos", desc: "Proyectos interactivos y mecánicas innovadoras", link: "/en-construccion" },
  { icon: "💼", title: "Sistemas Empresariales", desc: "Gestión y automatización para negocios", link: "/en-construccion" },
  { icon: "🤖", title: "ML & IA", desc: "Modelos predictivos y soluciones con ML", link: "/en-construccion" },
  { icon: "🌐", title: "Aplicaciones Web", desc: "Clones, E-commerce y plataformas modernas", link: "/en-construccion" },
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
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=500&auto=format&fit=crop",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
  {
    title: "Coming soon",
    desc: "Coming soon...",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=500&auto=format&fit=crop",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
  {
    title: "Coming soon",
    desc: "Coming soon...",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=500&auto=format&fit=crop",
    techs: ["Coming Soon..."],
    link: "/en-construccion"
  },
  // Agrega más proyectos aquí...
];