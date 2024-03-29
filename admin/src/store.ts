import {create} from 'zustand';

interface UserState {
  bears: number;
  setBears: (value: number) => void;
}

const useStore = create<UserState>((set) => ({
  bears: 0,
  setBears: (value) => set((state) => ({bears: value}))
}));

export default useStore;
