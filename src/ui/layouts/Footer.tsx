import { Input, Social, Item, FooterList } from "../components";

export const Footer = () => {
  return (
    <footer className="mt-10">
      <Social />
      <nav className="grid place-content-center sm:grid-cols-2 md:grid-cols-4 text-center md:text-left  p-20 gap-5 md:gap-2">
        <FooterList title="Servicio al cliente">
          <Item title="Contáctenos" />
          <Item title="Cambios y devoluciones" />
          <Item title="Políticas de la tienda" />
          <Item title="Políticas de datos" />
        </FooterList>
        <FooterList title="Mi cuenta">
          <Item title="Mis pedidos" />
          <Item title="Mis devoluciones" />
        </FooterList>
        <FooterList title="Recursos">
          <Item title="Tiendas" />
          <Item title="Devoluciones" />
        </FooterList>
        <FooterList title="Newsletter">
          <p className="text-gray-500 normal-case">
            Regístrate para ser el primero en recibir nuestras noticias
          </p>
          <form action="#">
            <Input placeholder="E-mail" />
          </form>
        </FooterList>
      </nav>
    </footer>
  );
};
