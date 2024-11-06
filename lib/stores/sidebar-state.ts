import { createStore } from "zustand/vanilla";

export type SideBarState = {
  open: boolean;
};

export type SideBarActions = {
  setSideBar: (value: boolean) => void;
};

export type SideBarStore = SideBarState & SideBarActions;

export const initSideBarStore = (): SideBarState => {
  return { open: false };
};

export const defaultInitState: SideBarState = {
  open: false,
};

export const createSideBarStore = (
  initState: SideBarState = defaultInitState,
) => {
  return createStore<SideBarStore>()((set) => ({
    ...initState,
    setSideBar: (value: boolean) => set(() => ({ open: value })),
  }));
};
