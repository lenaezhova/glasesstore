import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface navigationStore {
    isOpen: { state: boolean, key: null | number };
    toggle: (key?: number) => void;
    close: (key?: number) => void;
    open: (key?: number) => void;
}

export const useMainMenuStore = create<navigationStore>()(
  devtools(
    immer((setState) => ({
      isOpen: { state: false, key: null },
      toggle: (key?: number) =>
        setState((store) => {
          if (store.isOpen.key === key) {
            store.isOpen = { state: !store.isOpen.state, key: null };
          } else {
            store.isOpen = { state: true, key: key || null };
          }
        }),
      close: (key?: number) =>
        setState((store) => {
          store.isOpen = { state: false, key: key || null };
        }),
      open: (key?: number) =>
        setState((store) => {
          store.isOpen = { state: true, key: key || null };
        })
    }))
  )
);
