import {create} from 'zustand';
import {deleteElementFromArrayByIndex} from "@/src/helpers/deleteElementFromArrayByIndex";
import {persist} from "zustand/middleware";

export interface FavoriteStore {
  productsId: string[];
  addProductInFavorite: (productId: string) => void;
  setProductsInFavoritesStore: (arr: string[]) => void;
}

export const useFavoriteStore = create(persist<FavoriteStore>(
  (set, getState) => ({
    productsId: [],
    addProductInFavorite: (productId: string) => {
      const state = getState();
      const indexProduct = state.productsId.findIndex(el => el === productId);
      let newArrayProducts = state.productsId;
      if (indexProduct >= 0) {
        newArrayProducts = deleteElementFromArrayByIndex(state.productsId, indexProduct);
      } else {
        newArrayProducts.push(productId);
      }
      set({productsId: newArrayProducts})
    },
    setProductsInFavoritesStore: (arr: string[]) => set({productsId: arr})
  }), {
    name: 'favoriteStore',
    version: 1
  }));
