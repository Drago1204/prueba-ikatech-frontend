import { GridLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="bg-gray-50 absolute top-1 left-1 right-1 bottom-1 flex justify-center items-center">
      <GridLoader
        color="#7A4A58"
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
