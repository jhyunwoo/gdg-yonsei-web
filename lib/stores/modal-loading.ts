import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalLoadingState {
  state: string;
  percentage: number;
}

interface ModalLoadingAction {
  setModalLoading: (message: string, percentage: number) => void;
  clearLoading: () => void;
}

export const useModalLoading = create(
  devtools<ModalLoadingState & ModalLoadingAction>((set) => ({
    state: "",
    percentage: 0,
    setModalLoading: (message: string, percentage: number) =>
      set(() => ({ state: message, percentage: percentage })),
    clearLoading: () => set(() => ({ state: "", percentage: 0 })),
  })),
);
