export interface IPostRegisterRequest {
  email: string,
  password: string,
  name: string,
  surname: string
}

export interface IPostLoginRequest {
  email: string,
  password: string,
}

export interface IPostLoginResponse {accessToken: string, refreshToken: string, userId: string}

export interface IPostRefreshRequest {
  refreshToken: string | null;
}

export interface IPostRefreshResponse {
  refreshToken: string;
  accessToken: string;
  userId: string;
}

export interface IPostAddFavorite {
  userId: string;
  productId: string;
}

export type TBasketTypeAction = 'delete' | 'add' | 'remove'

export interface IPostAddBasket {
  userId: string;
  productId: string;
  count?: number;
  typeAction?: TBasketTypeAction;
}

export const countBasketTypeAction = {
  delete: undefined,
  add: 1,
  remove: -1
};
