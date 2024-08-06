interface ProductDetailProps {
  title: string;
  description: string;
}

export const ProductDetail = ({ title, description }: ProductDetailProps) => {
  return (
    <section className="mt-10">
      <h2 className="uppercase text-gray-600 font-bold text-2xl border-b pb-1 border-gray-400">
        {title}
      </h2>
      <p className="mt-5 text-xl  text-gray-500">{description}</p>
    </section>
  );
};
