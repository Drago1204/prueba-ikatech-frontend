import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 p-10">
      <h2 className="text-4xl text-gray-500 font-semibold">@HUSHPUPPIESCO</h2>
      <div className="w-44 border border-gray-500 mt-5"></div>
      <div className="flex mt-5 gap-5 text-gray-500">
        <a href="#">
          <FaFacebookF size={24} />
        </a>
        <a href="#">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};
