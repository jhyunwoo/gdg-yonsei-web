"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type SideBarStore,
  createSideBarStore,
  initSideBarStore,
} from "@/lib/stores/sidebar-state";

export type SidebarStoreApi = ReturnType<typeof createSideBarStore>;

export const SidebarStoreContext = createContext<SidebarStoreApi | undefined>(
  undefined,
);

export interface SidebarStoreProviderProps {
  children: ReactNode;
}

export const SidebarStoreProvider = ({
  children,
}: SidebarStoreProviderProps) => {
  const storeRef = useRef<SidebarStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSideBarStore(initSideBarStore());
  }

  return (
    <SidebarStoreContext.Provider value={storeRef.current}>
      {children}
    </SidebarStoreContext.Provider>
  );
};

export const useSidebarStore = <T,>(
  selector: (store: SideBarStore) => T,
): T => {
  const sideBarStoreContext = useContext(SidebarStoreContext);

  if (!sideBarStoreContext) {
    throw new Error(`useSidebarStore must be used within SidebarStoreProvider`);
  }

  return useStore(sideBarStoreContext, selector);
};
