import {create} from 'zustand';
import {AuthStore} from '@/modules/user/store/type';

export const useAuthStore = create<AuthStore>((set) => ({
  userId: undefined,
  isAuth: false,
  isAuthLoading: true,
  setUserId: (userId) => set({userId}),
  setIsAuth: (isAuth) => set({isAuth}),
  setIsAuthLoading: (isAuthLoading) => set({isAuthLoading})
}));
