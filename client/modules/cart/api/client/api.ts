import {IProduct} from '@/modules/product/type/type';
import {IProduct as IMyProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';


export interface ICartProduct {
  product: IProduct;
  count: number;
}

export function getCart(): ICartProduct[] {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

export function clearCart() {
  localStorage.removeItem('cart');
}

export function getSingleProductInCart(id: number | string): ICartProduct | undefined {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].product.id === id) {
      return arrCart[i];
    }
  }
}

export function checkProductInCart(id: number | string) {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].product.id === id) {
      return true;
    }
  }
  return false;
}

export async function addProductInCart(product: IProduct | IMyProduct, count: number) {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  // @ts-ignore
  const newArrCart: ICartProduct[] = [...arrCart, {product, count}];
  localStorage.setItem('cart', JSON.stringify(newArrCart));
  return newArrCart;
}

export async function removeProductInCart(id: any) {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const newArrCart = arrCart.filter((el) => el.product.id !== id);
  localStorage.setItem('cart', JSON.stringify(newArrCart));
  return newArrCart;
}

export async function addNewInfoInCart(id: number | string, count: number) {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const newArrCart = arrCart.reduce((acc, el, index) => {
    if (el.product.id === id) {
      acc.push({
        product: el.product,
        count: el.count + count
      });
    } else {
      acc.push(el);
    }
    return acc;
  }, [] as ICartProduct[]);

  localStorage.setItem('cart', JSON.stringify(newArrCart));
  return newArrCart;
}

export async function getCountInProduct(id: string | number): Promise<number> {
  const arrCart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = arrCart.reduce((acc, el) => {
    if (el.product.id === id) {
      acc = acc + el.count;
    }
    return acc;
  }, 0);

  return count;
}
