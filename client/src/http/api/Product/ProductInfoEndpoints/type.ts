export interface IProduct {
  _id: string,
  name: string,
  price: number,
  count: number,
  description?: string,
  imagesUrl: string[]
}

export interface IBanner {
  title: string,
  productIds: string[]
}
