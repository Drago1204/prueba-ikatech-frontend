import { useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";import { Button } from "../common/";

const tallas = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

interface ProductInfoProps {
  name: string;
  price: number;
  reference: string;
  photo: string;
}

export const ProductInfo = ({
  name,
  price,
  reference,
  photo,
}: ProductInfoProps) => {
  const [active, setActive] = useState(tallas[0]);
  const [isLoved, setIsLoved] = useState(false);

  const onClick = (index: number) => setActive(index);

  return (
    <form>
      <h1 className="uppercase text-2xl text-gray-500 font-bold">{name}</h1>
      <p className="text-ferra font-bold text-lg">${price}</p>
      <p className="text-gray-400">Cod. de producto {reference}</p>
      <div className="mt-10">
        <p className="uppercase text-lg text-gray-600 font-bold">Color</p>
        <div className="w-1/6 border border-gray-600 cursor-pointer mt-2">
          <img
            src={`./img/${photo}`}
            alt="color 1 de zapato"
            className="w-max h-auto inline-block"
          />
        </div>
        <div className="mt-10">
          <p className="uppercase text-lg text-gray-600 font-bold">Talla</p>
          <div className="grid grid-cols-5 gap-3 w-auto md:w-96">
            {tallas.map((talla) => (
              <button
                key={talla}
                type="button"
                className={`font-bold w-14 h-14  flex items-center justify-center transition-colors  ${
                  talla === active ? "bg-gray-200" : "bg-gray-400"
                }`}
                onClick={() => onClick(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="text-gray-500 border-b-2 border-b-gray-500  inline-block mt-5 uppercase font-bold"
          >
            Guía de tallas
          </a>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-2">
        <Button text="Añadir al carrito" />
        <button
          type="button"
          onClick={() => setIsLoved(isLoved ? false : true)}
        >
          <TiHeartFullOutline
            className={`text-gray-400 text-6xl  ${
              isLoved ? " text-pink-900" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </form>
  );
};
