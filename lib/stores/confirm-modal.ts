import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ConfirmModalState {
  text: string;
  action: () => void;
}

interface ConfirmModalAction {
  setConfirmModal: (text: string, action: () => void) => void;
  confirm: () => void;
  cancel: () => void;
}

export const useConfirmModal = create(
  devtools<ConfirmModalState & ConfirmModalAction>((set) => ({
    text: "",
    action: () => {},
    setConfirmModal: (text: string, action: () => void) =>
      set(() => ({ text, action })),
    confirm: () =>
      set((state) => {
        state.action();
        return { text: "", action: () => {} };
      }),
    cancel: () => set(() => ({ text: "", action: () => {} })),
  })),
);
