// src/app/layout.js
import '@/app/globals.css';

export const metadata = {
  title: 'Raul Antonio Suarez Polanco - Portfolio',
  description: 'Portafolio de desarrollo web y soluciones empresariales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* FontAwesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}