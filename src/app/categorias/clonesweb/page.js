"use client";

import ThemeToggle from '@/components/ThemeToggle';
import FloatingLogos from '@/components/FloatingLogos';
import Link from 'next/link';
import Image from 'next/image';
import { enterpriseProjects } from '@/data/portfolio';

const FLOATING_ICONS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  icon:
    i % 3 === 0
      ? 'fa-server'
      : i % 3 === 1
      ? 'fa-database'
      : 'fa-code',
  top: `${12 + i * 9}%`,
  left: `${(i * 17) % 85}%`,
  duration: 20 + i * 2,
}));

export default function EnterprisePage() {
  return (
    <div style={styles.pageWrapper}>
      <ThemeToggle />
      <FloatingLogos />

      <div style={styles.backgroundLayer}>
        {FLOATING_ICONS.map(icon => (
          <i
            key={icon.id}
            className={`fas ${icon.icon}`}
            style={{
              ...styles.floatingIcon,
              top: icon.top,
              left: icon.left,
              animation: `float ${icon.duration}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <main style={styles.container}>
        <section style={styles.hero}>
          <h1 style={styles.name}>Aplicaciones web</h1>
          <p style={styles.bio}>
            Clones de aplicaciones modernas enfocados en arquitectura, UX y UI.
          </p>
          <div style={styles.heroDivider} />
        </section>

        <section style={styles.projectsGrid}>
          {enterpriseProjects.map(project => (
            <article key={project.id} style={styles.projectCard} className="project-card">
              <div style={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={styles.projectInfo}>
                <h3 style={styles.projectTitle}>{project.title}</h3>

                <p style={styles.projectDescription}>
                  {project.description}
                </p>

                <div style={styles.techBar}>
                  {project.techs?.map((icon, i) => (
                    <i key={i} className={icon} style={styles.techIcon} />
                  ))}
                </div>

                <div style={styles.buttonGroup}>
                  <Link
                    href={project.isReady ? project.link : '/en-construccion'}
                    target={project.isReady ? '_blank' : '_self'}
                    style={styles.liveBtn}
                    className="btn-live"
                  >
                    <i className="fas fa-desktop" /> Live
                  </Link>

                  <Link
                    href={project.repo}
                    target="_blank"
                    style={styles.repoBtn}
                    className="btn-repo"
                  >
                    <i className="fab fa-github" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* ANIMACIONES Y HOVERS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -40px); }
        }

        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0, 255, 255, 0.15);
          border-color: var(--accent);
        }

        .btn-live:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 15px 40px rgba(0, 255, 255, 0.35);
          filter: brightness(1.15);
        }

        .btn-repo:hover {
          transform: translateY(-3px);
          border-color: var(--accent);
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.35);
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    position: 'relative',
    overflowX: 'hidden',
  },

  backgroundLayer: {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },

  floatingIcon: {
    position: 'absolute',
    fontSize: '4rem',
    opacity: 0.06,
    color: 'var(--accent)',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '6rem 2rem',
    position: 'relative',
    zIndex: 1,
  },

  hero: {
    textAlign: 'center',
    marginBottom: '5rem',
  },

  name: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },

  bio: {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    maxWidth: '720px',
    margin: '0 auto',
  },

  heroDivider: {
    width: '80px',
    height: '4px',
    background: '#0ea5e9',
    margin: '30px auto 0',
    borderRadius: '2px',
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2.5rem',
    alignItems: 'stretch',
  },

  projectCard: {
    background: 'var(--bg-card)',
    border: '2px solid var(--border)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '480px',
  },

  imageWrapper: {
    height: '220px',
    minHeight: '220px',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  },

  projectInfo: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },

  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1rem',
    minHeight: '1.5em',
  },

  projectDescription: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
    flexGrow: 1,
    minHeight: '3em',
  },

  techBar: {
    display: 'flex',
    gap: '0.7rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
    minHeight: '2rem',
    alignItems: 'center',
  },

  techIcon: {
    fontSize: '1.3rem',
    color: 'var(--accent)',
  },

  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: 'auto',
  },

  liveBtn: {
    flex: 1,
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    background: 'var(--gradient)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    transition: 'all 0.3s ease',
    height: '48px',
  },

  repoBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '1.1rem',
    flexShrink: 0,
  },
};