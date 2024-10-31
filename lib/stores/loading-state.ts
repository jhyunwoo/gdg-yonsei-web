// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type LoadingState = {
  loading: string;
};

export type LoadingActions = {
  setLoading: (text: string) => void;
  clearLoading: () => void;
};

export type LoadingStore = LoadingState & LoadingActions;

export const initLoadingStore = (): LoadingState => {
  return { loading: "" };
};

export const defaultInitState: LoadingState = {
  loading: "",
};

export const createLoadingStore = (
  initState: LoadingState = defaultInitState,
) => {
  return createStore<LoadingStore>()((set) => ({
    ...initState,
    setLoading: (text: string) => set(() => ({ loading: text })),
    clearLoading: () => set(() => ({ loading: "" })),
  }));
};
