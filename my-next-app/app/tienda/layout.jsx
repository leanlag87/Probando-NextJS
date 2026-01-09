import Link from "next/link";

const TiendaLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h2>Tienda Layout Navbar</h2>
        <ul>
          <li>
            {" "}
            <Link href="/tienda/categorys">Categorias</Link>
          </li>
          <li>
            {" "}
            <Link href="/tienda/categorys/computers">Computadoras</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/tienda/categorys/cellPhones">Celulares</Link>{" "}
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
};

export default TiendaLayout;

/**
 * Que estamos haciendo aqui?
 * 
 * const TiendaLayout = ({ children }) => {
  return (
    <>
{ children }
    </>
  )
}

    * Estamos creando un layout específico para la sección "tienda" de nuestra aplicación
    *Retormanos un fragment, como diciendo que no voy a retornar nada especial, solo lo que me envian como children
    *El children es todo lo que este dentro de la carpeta tienda, es decir todas las páginas que creemos dentro de tienda
    *Entonces este layout envolverá todas las páginas dentro de la carpeta tienda

 */
