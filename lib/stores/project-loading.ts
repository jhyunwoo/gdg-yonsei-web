import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ProjectLoadingState {
  state: string;
  percentage: number;
}

interface ProjectLoadingAction {
  setProjectLoading: (message: string, percentage: number) => void;
  clearLoading: () => void;
}

export const useProjectLoading = create(
  devtools<ProjectLoadingState & ProjectLoadingAction>((set) => ({
    state: "",
    percentage: 0,
    setProjectLoading: (message: string, percentage: number) =>
      set(() => ({ state: message, percentage: percentage })),
    clearLoading: () => set(() => ({ state: "", percentage: 0 })),
  })),
);
