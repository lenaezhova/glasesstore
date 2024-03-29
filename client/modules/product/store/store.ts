import {create} from 'zustand';
import { IProduct } from '@/modules/product/type/type';

export interface ProductStore {
  product: IProduct;
  count: number;
  setProduct: (product: IProduct) => void;
  setCount: (count: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  product: {} as IProduct,
  count: 0,
  setProduct: (product) => set({product}),
  setCount: (count) => set({count})
}));
