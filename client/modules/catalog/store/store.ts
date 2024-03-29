import {create} from 'zustand';
import { IProduct } from '@/modules/product/type/type';

export interface CatalogStore {
  total: number,
  products: IProduct[],
  id: number,
  offset: number,
  categoryName: string;
  categories: string[];
  setCategories: (categories: string[]) => void;
  setProducts: (products: IProduct[]) => void;
  setId: (numb: number) => void;
  setOffset: (offset: number) => void;
  setTotal: (total: number) => void;
  setCategoryName: (name: string) => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  id: 0,
  products: [],
  offset: 1,
  total: 0,
  categoryName: '',
  categories: [],
  setCategories: (categories) => set({categories}),
  setProducts: (products) => set({products}),
  setId: (numb) => set({id: numb}),
  setOffset: (offset) => set({offset}),
  setTotal: (total: number) => set({total}),
  setCategoryName: (name: string) => set({categoryName: name})
}));
