import $glassesApi from '@/src/http';
import {
  IPostAddBasket,
  IPostAddFavorite,
  IPostLoginRequest, IPostLoginResponse,
  IPostRefreshRequest, IPostRefreshResponse,
  IPostRegisterRequest
} from '@/src/http/api/User/UserRegisterEndpoints/type';

export default class UserRegisterEndpoints {
  static registration = async (request: IPostRegisterRequest) => {
    const {data} = await $glassesApi.post(
      '/registration',
      {...request}
    );

    return data;
  };

  static login = async (request: IPostLoginRequest): Promise<IPostLoginResponse> => {
    const {data} = await $glassesApi.post(
      '/login',
      {...request}
    );
    return data;
  };

  static refresh = async (request: IPostRefreshRequest): Promise<IPostRefreshResponse> => {
    const {data} = await $glassesApi.post(
      '/refresh',
      {...request}
    );

    return data;
  };

  static logout = async () => {
    const {data} = await $glassesApi.post('/logout');

    return data;
  };

  static addFavorite = async (request: IPostAddFavorite) => {
    const {data} = await $glassesApi.post(
      '/add/favorite',
      {...request}
    );

    return data;
  };

  static addBasket = async (request: IPostAddBasket) => {
    const {data} = await $glassesApi.post(
      '/add/basket',
      {...request}
    );

    return data;
  };
}
