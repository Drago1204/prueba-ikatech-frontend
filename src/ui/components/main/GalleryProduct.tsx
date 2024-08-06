interface GalleryProductProps {
  photo: string;
}

export const GalleryProduct = ({ photo }: GalleryProductProps) => {
  return (
    <>
      <img
        src={`./img/${photo}`}
        alt="imagen zapato"
        className="border-b border-b-gray-500 inline-block w-full h-auto  md:w-3/4 md:h-3/4"
      />
      <div className="flex items-center  mt-5 gap-2">
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
        <button>
          <img
            src={`./img/${photo}`}
            alt="imagen zapato"
            className="w-16 h-auto inline-block"
          />
        </button>
      </div>
    </>
  );
};
