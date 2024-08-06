import { Input, Social, Item, FooterList } from "../components";

export const Footer = () => {
  const sectionsList = [
    {
      title: "Servicio al cliente",
      items: [
        "Contáctenos",
        "Cambios y devoluciones",
        "Políticas de la tienda",
        "Políticas de datos",
      ],
    },
    {
      title: "Mi cuenta",
      items: ["Mis pedidos", "Mis devoluciones"],
    },
    {
      title: "Recursos",
      items: ["Tiendas", "Devoluciones"],
    },
    {
      title: "Newsletter",
      content: (
        <>
          <p className="text-gray-500 normal-case">
            Regístrate para ser el primero en recibir nuestras noticias
          </p>
          <form action="#">
            <Input placeholder="E-mail" />
          </form>
        </>
      ),
    },
  ];

  return (
    <footer className="mt-10">
      <Social />
      <nav className="grid place-content-center sm:grid-cols-2 md:grid-cols-4 text-center md:text-left p-20 gap-5 md:gap-2">
        {sectionsList.map((section, index) => (
          <FooterList key={index} title={section.title}>
            {section.items
              ? section.items.map((item, idx) => (
                  <Item key={idx} title={item} />
                ))
              : section.content}
          </FooterList>
        ))}
      </nav>
    </footer>
  );
};
