import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../../interfaces/";

const initialState: ProductState = {
  products: [],
  active: null,
  isLoading: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      state.active = state.products[action.payload];
      state.isLoading = false;
    },
    startLoadProducts: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setProduct, setProducts, startLoadProducts } =
  productSlice.actions;
export default productSlice.reducer;
