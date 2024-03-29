import {create} from 'zustand';

export interface AuthModalStore {
  isVisibleAuthModal: boolean;
  setIsVisibleAuthModal: (bool: boolean) => void;
}

export const useAuthModalStore = create<AuthModalStore>((set) => ({
  isVisibleAuthModal: false,
  setIsVisibleAuthModal: (bool) => set({isVisibleAuthModal: bool})
}));
