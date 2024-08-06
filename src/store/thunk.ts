import { AppDispatch } from './store'; 
import { getProductsService } from '../services/products.services';
import {
  setProduct,
  setProducts,
  startLoadProducts,
} from './product/productSlice';
import { Product } from '../interfaces'; 


export const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadProducts());

    try {
      const products: Product[] = await getProductsService();
      dispatch(setProducts({ products }));
      dispatch(setProduct(0)); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};