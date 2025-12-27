// src/app/en-construccion/page.js
import Link from 'next/link';

export default function EnConstruccion() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧 Página en Construcción</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Estoy trabajando duro para traerte este proyecto lo antes posible.
      </p>
      <Link href="/" className="contact-btn" style={{ textDecoration: 'none' }}>
        Volver al Inicio
      </Link>
    </div>
  );
}