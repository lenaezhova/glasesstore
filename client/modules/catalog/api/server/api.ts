import { routeAllCategories } from '@/src/const/api/route';
import { ICategory } from '@/modules/catalog/type/type';

export async function getCategories(): Promise<ICategory[]> {
  const res = await fetch(routeAllCategories);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
