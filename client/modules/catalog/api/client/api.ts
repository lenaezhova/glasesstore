import { routeProductInCategory } from '@/src/const/api/route';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/modules/product/type/type';

interface IDataProductsInCategory {
  total: number;
  limit: number;
  skip: number;
  products: IProduct[];
}

export async function getProductsInCategory(categoryName: string, offset?: number, limit? : number): Promise<IDataProductsInCategory> {
  const res = await fetch(routeProductInCategory(categoryName, offset, limit));

  return res.json();
}

async function getAllProductsInCategory(categoryName: string) {
  const res = await (fetch(routeProductInCategory(categoryName)));

  return res.json();
}

export function useProductsInCategory (categoryName: string, offset: number, limit = 10) {
  return useQuery<IDataProductsInCategory, Error>(
    ['catalog', categoryName, offset],
    () => getProductsInCategory(categoryName, offset, limit),
    {keepPreviousData: true}
  );
}

export function useAllProductsInCategory (categoryName: string) {
  return useQuery<IDataProductsInCategory, Error>(
    ['catalog', categoryName],
    () => getAllProductsInCategory(categoryName),
    {keepPreviousData: true}
  );
}
