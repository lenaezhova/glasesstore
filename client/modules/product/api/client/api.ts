import {routeSingleProduct} from '@/src/const/api/route';
import {useQuery} from '@tanstack/react-query';
import {IProduct} from '@/modules/product/type/type';

async function getProductById(id: number): Promise<IProduct> {
  const res = await fetch(routeSingleProduct(id));

  return res.json();
}

export function useSingleProduct(id: number) {
  return useQuery<IProduct, Error>(['product', id], () => getProductById(id));
}

export const addNewProductInRecentlyStore = (product: IProduct) => {
  const res = localStorage.getItem('recentlyStore');
  // @ts-ignore
  const recentlyStore: IProduct[] = JSON.parse(res);
  const filterRecently = (recentlyStore || []).filter((el) => el.id !== product.id);
  const newRecentlyStore = [...filterRecently.reverse(), product].reverse();
  localStorage.setItem('recentlyStore', JSON.stringify(newRecentlyStore));
};

export const getProductsInRecentlyStore = (): IProduct[] => {
  const res = localStorage.getItem('recentlyStore');
  // @ts-ignore
  return JSON.parse(res) || [];
};
