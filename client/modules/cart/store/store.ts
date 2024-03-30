import {create} from 'zustand';
import {ICartProduct} from "@/src/http/api/User/UserInfoEndpoints/type";
import {countBasketTypeAction, IPostAddBasket} from "@/src/http/api/User/UserRegisterEndpoints/type";
import {deleteElementFromArrayByIndex} from "@/src/helpers/deleteElementFromArrayByIndex";
import {persist} from "zustand/middleware";

export interface CartStore {
  products: ICartProduct[];
  addProductInCart: (request: Omit<IPostAddBasket, 'userId'>) => void;
  clearCartFromStore: () => void;
}

export const useCartStore = create(persist<CartStore>((set, getState) => ({
  products: [],
  clearCartFromStore: () => set({products: []}),
  addProductInCart: (request => {
    const {productId, typeAction} = request;
    const state = getState();
    const count = request.typeAction ? countBasketTypeAction[request.typeAction] : request.count;
    let productsData = state.products;
    const indexProduct = productsData.findIndex(el => el.productId === productId);
    if (indexProduct >= 0) {
      const newCount = count !== undefined ? productsData[indexProduct].count + count : 0;
      if (newCount === 0) {
        productsData = deleteElementFromArrayByIndex(state.products, indexProduct);
      } else {
        productsData[indexProduct] = {
          productId,
          count: newCount
        }
      }
    } else {
      productsData.push({
        productId,
        count: count || 1
      })
    }
    set({products: productsData});
  })
}), {
  name: 'cartStore',
  version: 1
}));
