import {create} from 'zustand';

export interface AuthStore {
  userId: string | undefined;
  isAuth: boolean;
  isAuthLoading: boolean;
  setUserId: (id: string | undefined) => void;
  setIsAuth: (bool: boolean) => void;
  setIsAuthLoading: (bool: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userId: undefined,
  isAuth: false,
  isAuthLoading: true,
  setUserId: (userId) => set({userId}),
  setIsAuth: (isAuth) => set({isAuth}),
  setIsAuthLoading: (isAuthLoading) => set({isAuthLoading})
}));
