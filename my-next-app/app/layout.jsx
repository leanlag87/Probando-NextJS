//El trabajo del "layout.js" es envolver todas las páginas de la aplicación
//y proporcionar una estructura común para ellas.
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
