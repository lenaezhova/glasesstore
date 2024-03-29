import { IProduct } from '@/modules/product/type/type';

export function getFavorites (): IProduct[] {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export function clearFavorite () {
  localStorage.removeItem('favorites');
}

export async function removeProductFromFavorites (id: number | string): Promise<IProduct[]> {
  const arrFavorites : IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  const newArrFavorites = arrFavorites.filter(el => el.id !== id);
  localStorage.setItem('favorites', JSON.stringify(newArrFavorites));
  return newArrFavorites;
}

export function checkProductInFavorites (id: number | string) {
  const arrFavorites : IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  for (let i = 0; i < arrFavorites.length; i++) {
    if (arrFavorites[i].id === id) {
      return true;
    }
  }
  return false;
}

export async function addProductInFavorites (product: IProduct): Promise<IProduct[]> {
  const arrFavorites : IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  const newArrFavorites : IProduct[] = [...arrFavorites, product];
  localStorage.setItem('favorites', JSON.stringify(newArrFavorites));
  return newArrFavorites;
}
