import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/**Ejemplo de como hacer un ruteo con "Link" de Next.js */}

      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
