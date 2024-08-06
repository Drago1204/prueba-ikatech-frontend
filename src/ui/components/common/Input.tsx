import { FaChevronRight } from "react-icons/fa"
interface InputProps {
  placeholder: string;
  maxWidth?: boolean;
}

export const Input = ({ placeholder, maxWidth = false }: InputProps) => {
  return (
    <div
      className={`border border-gray-500 mt-5 relative w-full ${
        !maxWidth && "md:w-2/3"
      } `}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full p-2 placeholder:font-semibold placeholder:uppercase placeholder:text-gray-500"
      />
      <button
        type="button"
        className=" hover:cursor-pointer absolute top-0 right-0 w-5 h-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
