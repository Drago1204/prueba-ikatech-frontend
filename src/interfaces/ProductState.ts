import { Product } from "./Product";

export interface ProductState {
  products: Product[];
  active: Product | null;
  isLoading: boolean;
}
