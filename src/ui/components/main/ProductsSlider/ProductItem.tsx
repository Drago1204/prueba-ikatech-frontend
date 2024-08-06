import { useDispatch } from "react-redux";
import { setProduct } from "../../../../store/product/productSlice";
import { Button } from "../../common";

interface ProductItemProps {
  index: number;
  photo: string;
  name: string;
  price: number;
  showButton: boolean;
}

const ProductItem = ({
  index,
  photo,
  name,
  price,
  showButton,
}: ProductItemProps) => {
  const dispatch = useDispatch();

  const onClick = (index: number) => {
    dispatch(setProduct(index));
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      key={name}
      onClick={() => onClick(index)}
      className={`cursor-pointer hover:bg-gray-100 transition-colors p-5 ${
        !showButton && "border-b border-gray-400"
      }`}
    >
      <div className="w-60 h-60 flex items-center justify-center">
        <img src={`./img/${photo}`} alt={name} className="w-full h-auto" />
      </div>
      <div className="flex self-start items-end w-14 gap-5 mt-5 ">
        <img src={`./img/${photo}`} alt={name} className={`w-full h-auto`} />
        <img src={`./img/${photo}`} alt={name} className={`w-full h-auto`} />
        <img src={`./img/${photo}`} alt={name} className={`w-full h-auto`} />
      </div>
      <div className="flex flex-col text-center mt-5 mb-2">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <span className="mt-5 text-ferra font-bold text-lg">${price}</span>
      </div>
      {showButton && <Button text="Agregar al carrito" maxWidth />}
    </div>
  );
};

export default ProductItem;
