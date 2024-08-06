import { useState } from "react";
import Slider from "react-slick";
import { Product } from "../../../../interfaces";
import ProductItem from "./ProductItem";

interface ProductsSliderProps {
  title: string;
  products: Product[];
  showButton: boolean;
}

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ProductsSlider = ({
  title,
  products,
  showButton,
}: ProductsSliderProps) => {
  const [productLength] = useState(products.length);

  return (
    <section>
      <div className="mt-10 ">
        <h2
          className={`p-1 uppercase text-gray-600 font-semibold text-2xl ${
            showButton ? "bg-gray-200" : "border-b border-gray-400"
          }`}
        >
          {title}
        </h2>
        <Slider
          {...settings}
          slidesToShow={productLength > 3 ? 4 : productLength}
          slidesToScroll={productLength > 3 ? 4 : productLength}
        >
          {products.map((product, index) => (
            <ProductItem
              key={product.name}
              {...product}
              index={index}
              showButton={showButton}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
