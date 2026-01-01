import FloatingLogos from '../components/FloatingLogos';
import ThemeToggle from '../components/ThemeToggle';
import { personalInfo, categories, technologies, projects } from '../data/portfolio';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <ThemeToggle />
      <FloatingLogos />

      <div className="container">
        {/* HERO SECTION */}
        <section className="hero">
          <img src={personalInfo.image} alt={personalInfo.name} className="profile-img" />
          <div className="hero-content">
            <h1 className="name">{personalInfo.name}</h1>
            <p className="bio">{personalInfo.bio}</p>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="section">
          <h2 className="section-title">Categorías de Proyectos</h2>
          <div className="project-categories">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <Link href={cat.link} className="projectlink">
                  <div className="category-icon">{cat.icon}</div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section className="section">
          <h2 className="section-title">Tecnologías Principales</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <i 
  className={`${tech.iconClass} tech-icon`} 
  style={{ color: tech.color }}
></i>
                <h3>{tech.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="section">
          <h2 className="section-title">Proyectos Recientes</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (

              <div key={index} className="project-card">
                <Link href={project.link} className="projectlink">
                  <img src={project.image} className="project-image" alt={project.title} />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="text-secondary">{project.desc}</p>
                  </div>
                </Link>
              </div>

            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contact-section">
          <h2>¿Trabajamos Juntos?</h2>
          <div className="contact-buttons">
            <a href="#" className="contact-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="#" className="contact-btn"><i className="fas fa-envelope"></i> Email</a>
            <a href="#" className="contact-btn"><i className="fas fa-file-pdf"></i> Descargar CV</a>
          </div>
        </section>
      </div>
    </>
  );
}