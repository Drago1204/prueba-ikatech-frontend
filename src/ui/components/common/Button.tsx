interface ButtonProps {
  text: string;
  maxWidth?: boolean;
}

export const Button = ({ text, maxWidth }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-ferra uppercase hover:bg-darkferra w-full py-3 text-white font-bold ${
        !maxWidth && "md:w-auto md:px-20"
      }`}
    >
      {text}
    </button>
  );
};
