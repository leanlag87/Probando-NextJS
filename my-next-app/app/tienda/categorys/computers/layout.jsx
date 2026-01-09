import Link from "next/link";

const ComputersLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h2>Sub Categorias de Computadoras</h2>
        <ul>
          <li>
            {" "}
            <Link href="/tienda/categorys/computers/desktop">
              Computadora de Escritorio
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/tienda/categorys/computers/notebook">
              Computadora Portatil
            </Link>{" "}
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
};

export default ComputersLayout;
