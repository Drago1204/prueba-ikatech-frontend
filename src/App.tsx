import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loading } from "./ui/components";
import { useAppSelector } from "./hooks";
import { Footer, Header, Main } from "./ui/layouts";
import { getProducts } from "./store/thunk";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAppSelector((state) => state.products);

  useEffect(() => {
    // @ts-expect-error: Ignoring type error 
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
