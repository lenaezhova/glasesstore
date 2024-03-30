export interface IFavoriteResponse {
  productsId: string[];
}

export interface IBasketResponse {
  productsId: string[];
}

export interface ICartProduct {
  productId: string,
  count: number
}
