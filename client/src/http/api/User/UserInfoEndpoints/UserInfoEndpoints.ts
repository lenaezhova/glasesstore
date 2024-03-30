import $glassesApi from '@/src/http';
import {IBasketResponse, IFavoriteResponse} from "@/src/http/api/User/UserInfoEndpoints/type";

export default class UserInfoEndpoints {
  static getUserInfo = async ({id}: {id: string | undefined}) => {
    const {data} = await $glassesApi.get(
      '/user',
      {params: {
          id
        }}
    );

    return data;
  };

  static getFavorite = async ({userId}: {userId: string}): Promise<IFavoriteResponse> => {
    const {data} = await $glassesApi.get(
      '/favorite',
      {params: {
          userId
        }}
    );

    return data;
  };

  static getBasket = async ({userId}: {userId: string}): Promise<IBasketResponse> => {
    const {data} = await $glassesApi.get(
      '/basket',
      {params: {
          userId
        }}
    );

    return data;
  };
}
