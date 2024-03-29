export type TCurrentAdminPage = 'createProduct' | 'addAdmin'

export interface AuthStore {
  userId: string | undefined;
  isAuth: boolean;
  isAuthLoading: boolean;
  setUserId: (id: string | undefined) => void;
  setIsAuth: (bool: boolean) => void;
  setIsAuthLoading: (bool: boolean) => void;
}
