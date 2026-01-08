//El trabajo del "layout.js" es envolver todas las páginas de la aplicación
//y proporcionar una estructura común para ellas.

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
