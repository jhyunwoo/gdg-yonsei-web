import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SidebarState {
  isOpen: boolean;
}

interface SidebarAction {
  open: () => void;
  close: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSidebar = create(
  devtools<SidebarState & SidebarAction>((set) => ({
    isOpen: false,
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
    setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
  })),
);
