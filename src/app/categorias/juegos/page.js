"use client";
import React, { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import FloatingLogos from '@/components/FloatingLogos';
import Link from 'next/link';
import { games } from '@/data/portfolio';

export default function GamesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) return null;

  return (
    <div style={styles.pageWrapper}>
      <ThemeToggle />
      <FloatingLogos />

      {/* Fondo Animado sutil */}
      <div style={styles.backgroundLayer}>
        {[...Array(8)].map((_, i) => (
          <i key={i} className="fas fa-gamepad" style={{
            ...styles.floatingIcon,
            top: `${10 + (i * 12)}%`,
            left: `${Math.random() * 90}%`,
            animation: `float ${6 + i}s infinite ease-in-out`
          }} />
        ))}
      </div>

      <main className="container" style={styles.mainContainer}>
        {/* <div style={styles.header}>
            <h1 className="section-title">Laboratorio de Juegos</h1>
        </div> */}


        <section className='hero'>
            <h1 className="name">Laboratorio de Juegos</h1>
            <p className="bio">
              Prototipos interactivos donde exploro lógica, estado y toma de decisiones
              a través de pequeños juegos.
            </p>

          <div style={styles.heroDivider}></div>
        </section>

        <div className="projects-grid">
          {games.map((game) => (
            <div key={game.id} className="project-card" style={styles.card}>
              
              {/* Contenedor de Imagen */}
              <div style={styles.imageWrapper}>
                <img src={game.image} alt={game.title} style={styles.image}  priority={false} />
              </div>

              {/* Contenido de la Card */}
              <div className="project-info" style={styles.cardContent}>
                
                {/* Iconos de Tecnología (Pequeños) */}
                <div style={styles.techBar}>

                </div>

                {/* <h3 style={styles.cardTitle}>{game.title}</h3> */}
                
                <div style={styles.buttonGroup}>
                  <Link 
                    href={game.isReady ? game.link : "/en-construccion"} 
                    target={game.isReady ? "_blank" : "_self"}
                    style={styles.playBtn}
                    className="play-hover"
                  >
                    <i className="fas fa-play" style={{ fontSize: '0.8rem' }}></i> JUGAR
                  </Link>

                  <Link 
                    href={game.repo} 
                    target="_blank"
                    style={styles.repoBtn}
                    className="repo-hover"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .play-hover:hover { background: #1db954 !important; transform: scale(1.02); }
        .repo-hover:hover { background: rgba(255,255,255,0.15) !important; transform: scale(1.02); }
      `}} />
    </div>
  );
}

// --- HOJA DE ESTILOS (CSS-in-JS) ---
const styles = {
  pageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  backgroundLayer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none',
    opacity: 0.07,
  },
  floatingIcon: {
    position: 'absolute',
    fontSize: '1.8rem',
    color: 'var(--text-primary)',
  },
  mainContainer: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },
  header: {
    marginBottom: '40px',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    textDecoration: 'none',
    fontSize: '0.9rem'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '320px', // Aumentado un poco para dar aire al contenido inferior
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    background: 'var(--bg-secondary)', // Asegura que tenga fondo si la imagen tarda en cargar
  },
  imageWrapper: {
    height: '400px', // Proporción ideal para cards
    // width: '320px',
    overflow: 'hidden',
    position: 'relative', // Por si quieres poner badges encima
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  image: {
    height: '100%',
    width: '100%',
    // objectFit: 'cover', // Clave para que no se deforme
    objectPosition: 'center', // Centra la parte importante de la imagen
    display: 'block',
  },
  cardContent: {
    padding: '16px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  techBar: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
    opacity: 0.8,
  },
  techIcon: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  cardTitle: {
    fontSize: '0.9rem',
    marginBottom: '18px',
    fontWeight: '600',
    fontFamily: 'poppins',
    color:'#e2e8f0'
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    marginTop: 'auto',
  },
  playBtn: {
    flex: 3,
    background: '#22c55e',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: 'all 0.2s ease',
  },
  repoBtn: {
    flex: 1,
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  },
  //   hero: {
  //   maxWidth: '720px',
  //   margin: '0 auto 60px auto',
  //   textAlign: 'center',
  //   paddingTop: '40px',
  // },

  // heroTitle: {
  //   fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
  //   fontWeight: '800',
  //   letterSpacing: '-0.02em',
  //   marginBottom: '14px',
  //   color: 'var(--text-primary)',
  // },

  // heroSubtitle: {
  //   fontSize: '1rem',
  //   lineHeight: '1.6',
  //   color: 'var(--text-secondary)',
  //   opacity: 0.9,
  // },

  // heroDivider: {
  //   width: '120px',
  //   height: '2px',
  //   margin: '30px auto 0',
  //   background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)',
  //   opacity: 0.3,
  // },

}