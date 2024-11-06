import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface LoadingState {
  loading: string;
  type: "message" | "complete" | "error";
}

interface LoadingAction {
  setLoading: (message: string, type: LoadingState["type"]) => void;
  clearLoading: () => void;
}

export const useLoading = create(
  devtools<LoadingState & LoadingAction>((set) => ({
    loading: "",
    type: "message",
    setLoading: (message: string, type: LoadingState["type"]) =>
      set(() => ({ loading: message, type })),
    clearLoading: () => set(() => ({ loading: "", type: "message" })),
  })),
);
