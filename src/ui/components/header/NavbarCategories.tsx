import { BsBag } from "react-icons/bs";
import { Item } from "../common";
export const NavbarCategories = () => {
  return (
    <div className="md:flex md:justify-between text-center items-end">
      <nav className="p-2">
        <ul className="md:flex gap-10 text-gray-500 font-semibold uppercase">
          <Item title="Hombre" />
          <Item title="Mujer" />
          <Item title="Blog" />
          <Item title="Historia" />
          <Item title="Tiendas" />
        </ul>
      </nav>
      <div className="uppercase flex items-center font-semibold text-sm text-gray-600 p-2 ">
        <BsBag className=" mr-2" />
        <span>Carrito 0</span>
      </div>
    </div>
  );
};
