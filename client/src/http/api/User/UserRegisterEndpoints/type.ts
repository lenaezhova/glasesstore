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
