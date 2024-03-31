import $glassesApi from '@/src/http';
import {IBasketResponse, ICartProduct, IFavoriteResponse} from '@/src/http/api/User/UserInfoEndpoints/type';

export default class UserInfoEndpoints {
  static getUserInfo = async ({id}: {id: string | undefined}) => {
    const {data} = await $glassesApi.get(
      '/user',
      {
        params: {
          id
        }
      }
    );

    return data;
  };

  static getFavorite = async ({userId}: {userId: string}): Promise<IFavoriteResponse> => {
    const {data} = await $glassesApi.get(
      '/favorite',
      {
        params: {
          userId
        }
      }
    );

    return data;
  };

  static getBasket = async ({userId}: {userId: string}): Promise<{products: ICartProduct[]}> => {
    const {data} = await $glassesApi.get(
      '/basket',
      {
        params: {
          userId
        }
      }
    );

    return data;
  };
}
