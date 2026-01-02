"use client";

import ThemeToggle from '@/components/ThemeToggle';
import FloatingLogos from '@/components/FloatingLogos';
import Link from 'next/link';
import Image from 'next/image';
import { games } from '@/data/portfolio';

const FLOATING_ICONS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  top: `${12 + i * 10}%`,
  left: `${(i * 19) % 85}%`,
  duration: 8 + i * 2,
}));

export default function GamesPage() {
  return (
    <div style={styles.pageWrapper}>
      <ThemeToggle />
      <FloatingLogos />

      {/* Fondo animado */}
      <div style={styles.backgroundLayer}>
        {FLOATING_ICONS.map(icon => (
          <i
            key={icon.id}
            className="fas fa-gamepad"
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
          <h1 style={styles.name}>Laboratorio de Juegos</h1>
          <p style={styles.bio}>
            Prototipos interactivos donde exploro lógica, estado y toma de
            decisiones mediante mecánicas de juego.
          </p>
          <div style={styles.heroDivider} />
        </section>

        <section style={styles.projectsGrid}>
          {games.map(game => (
            <article
              key={game.id}
              style={styles.card}
              className="game-card"
            >
              <div style={styles.imageWrapper}>
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={styles.cardContent}>
                <div style={styles.buttonGroup}>
                  <Link
                    href={game.isReady ? game.link : '/en-construccion'}
                    target={game.isReady ? '_blank' : '_self'}
                    style={styles.playBtn}
                    className="btn-play"
                  >
                    <i className="fas fa-play" /> JUGAR
                  </Link>

                  <Link
                    href={game.repo}
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

      {/* Animaciones y hover */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }

        .game-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 50px rgba(34, 197, 94, 0.25);
        }

        .btn-play:hover {
          background: #16a34a;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
        }

        .btn-repo:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(255,255,255,0.15);
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
    opacity: 0.08,
  },

  floatingIcon: {
    position: 'absolute',
    fontSize: '2rem',
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
    marginBottom: '4rem',
  },

  name: {
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '1rem',
  },

  bio: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    maxWidth: '720px',
    margin: '0 auto',
    lineHeight: 1.7,
  },

  heroDivider: {
    width: '80px',
    height: '4px',
    background: '#22c55e',
    margin: '30px auto 0',
    borderRadius: '2px',
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },

  card: {
    background: 'var(--bg-secondary)',
    borderRadius: '18px',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
  },

  imageWrapper: {
    height: '220px',
    position: 'relative',
  },

  cardContent: {
    padding: '1.2rem',
  },

  buttonGroup: {
    display: 'flex',
    gap: '0.8rem',
  },

  playBtn: {
    flex: 1,
    background: '#22c55e',
    color: '#fff',
    padding: '0.65rem',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
  },

  repoBtn: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
  },
};
