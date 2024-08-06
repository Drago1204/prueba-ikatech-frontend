export const HeaderNavbar = () => {
  return (
    <nav className="bg-gray-300 text-xs py-2 px-2">
      <ul className="text-center *:px-2 md:flex md:justify-end gap-2 text-gray-600 font-bold md:container">
        <li className="mb-2 md:mb-0">
          <a href="#" className="uppercase">
            Directorio de tiendas
          </a>
        </li>
        <li className="mb-2 md:mb-0">
          <a href="#" className="uppercase">
            Servicio al cliente
          </a>
        </li>
        <li>
          <a href="#" className="uppercase">
            Mi cuenta
          </a>
        </li>
      </ul>
    </nav>
  );
};
