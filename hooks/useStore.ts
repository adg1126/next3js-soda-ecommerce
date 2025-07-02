import { create } from "zustand";

export const useStore = create<{
  ready: boolean;
  setReady: () => void;
}>((set) => ({
  ready: false,
  setReady: () => set({ ready: true }),
}));
