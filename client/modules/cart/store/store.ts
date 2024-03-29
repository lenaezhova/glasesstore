import {create} from 'zustand';
import { ICartProduct } from '@/modules/cart/api/client/api';

function totalSumInProducts (arr: ICartProduct[]): number {
  return arr.reduce((acc, el) => acc + (el.count * el.product.price), 0);
}

export interface CartStore {
  products: ICartProduct[];
  totalPrice: number;
  setProducts: (arr: ICartProduct[]) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  totalPrice: 0,
  setProducts: (arr: ICartProduct[]) => set({products: arr, totalPrice: totalSumInProducts(arr)})
}));
