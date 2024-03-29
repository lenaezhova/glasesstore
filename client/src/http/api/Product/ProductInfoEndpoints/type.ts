export interface IProduct {
  _id: string,
  name: string,
  price: number,
  count: number,
  description?: string,
  imagesUrl: string[]
}