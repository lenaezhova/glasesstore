import { ICategory } from '@/modules/catalog/type/type';

export interface IProduct {
  brand: string;
  category: ICategory;
  description: string;
  discountPercentage: number;
  id: string | undefined;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;

}
