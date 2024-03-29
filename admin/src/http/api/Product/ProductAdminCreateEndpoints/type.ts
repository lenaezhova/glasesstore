export interface ICreateResponse {
  name: string;
}

export interface ICreateProductResponse {
  name: string,
  price: number,
  count: number,
  description?: string,
  imgIds: string[],
  statusId?: string,
  brandId?: string,
  targetGroupId?: string,
  colorId?: string,
  materialId?: string,
  typeId?: string,
  typeLensId?: string,
  designId?: string

}
