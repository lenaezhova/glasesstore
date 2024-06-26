import $glassesApi from '@/src/http';
import {IBanner, IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';
import {getImageUrl} from '@/src/helpers/getImagesUrl';

export default class ProductInfoEndpoints {
  static getAllProduct = async (): Promise<IProduct[]> => {
    const {data} = await $glassesApi.get(
      '/product/all'
    );
    return data.map((el: {
        imgIds: string[]
      }) => ({
      ...el,
      imagesUrl: el?.imgIds?.map(imgId => getImageUrl(imgId)) || []
    })
    );
  };

  static getNowBuyBanner = async (): Promise<IBanner> => {
    const {data} = await $glassesApi.get(
      '/product/get_banner', {
        params: {
          title: 'NowBuy'
        }
      }
    );
    return data;
  };

  static getOneProduct = async (id: string): Promise<IProduct> => {
    const {data} = await $glassesApi.get(
      '/product/one', {
        params: {
          id
        }
      }
    );

    return {
      ...data,
      imagesUrl: data?.imgIds?.map((imgId: string) => getImageUrl(imgId)) || []
    };
  };
}
