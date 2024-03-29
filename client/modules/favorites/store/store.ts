import {create} from 'zustand';
import { IProduct } from '@/modules/product/type/type';

export interface FavoriteStore {
  products: IProduct[];
  setProductsInFavoritesStore: (arr: IProduct[]) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  products: [],
  setProductsInFavoritesStore: (arr: IProduct[]) => set({products: arr})
}));
