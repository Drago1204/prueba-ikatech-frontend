import {
  Breadcrumbs,
  GalleryProduct,
  ProductDetail,
  ProductInfo,
  ProductsSlider,
} from "../components";
import { useAppSelector } from "../../hooks";
import { Product } from "../../interfaces/Product";

const sections = [
  {
    title: "Detalles de Producto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel egestas mi. Ut imperdiet dui velit, ac sagittis erat dapibus et. Nullam nec ligula volutpat, sodales sapien vel, varius dui. Nulla sed enim at mi tempor ornare. Nunc purus arcu, viverra vitae varius vel, interdum facilisis orci. Integer in lobortis massa. ",
  },
  {
    title: "Tecnologías",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel egestas mi. Ut imperdiet dui velit, ac sagittis erat dapibus et.",
  },
];

export const Main = () => {
  const { active, products } = useAppSelector((state) => state.products);

  return (
    <div className="md:px-32 mt-5 px-5 pb-5">
      <Breadcrumbs />
      <main className="mt-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <GalleryProduct photo={(active as Product).photo} />
          </div>
          <div className="md:w-1/2">
            <ProductInfo {...(active as Product)} />
          </div>
        </div>
      </main>
      {sections.map((section) => (
        <ProductDetail key={section.title} {...section} />
      ))}
      <ProductsSlider
        title="Completa tu look"
        products={products}
        showButton={true}
      />
      <ProductsSlider
        title="Productos Recomendados"
        products={products}
        showButton={false}
      />
    </div>
  );
};
