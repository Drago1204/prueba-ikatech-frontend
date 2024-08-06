import { Banner, HeaderNavbar, Input, NavbarCategories } from "../components";

export const Header = () => {
  return (
    <header className="border-b border-b-gray-500">
      <Banner />
      <HeaderNavbar />
      <div className="md:px-32">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-end md:my-2">
          <a href="#" className="flex items-center">
            <img src="./img/logo.png" width={48} />
            <span className="text-3xl flex font-bold text-gray-600 ml-3">
              Hush Puppies
            </span>
          </a>
          <div className="flex flex-col items-center">
            <form action="#" className="md:self-end mb-4">
              <Input placeholder="Buscar" maxWidth />
            </form>
            <p className="text-ferra uppercase  text-center md:text-right">
              Envío gratis para pedidos superiores a $300.000
            </p>
          </div>
        </div>
        <NavbarCategories />
      </div>
    </header>
  );
};
