"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type LoadingStore,
  createLoadingStore,
  initLoadingStore,
} from "@/lib/stores/loading-state";

export type LoadingStoreApi = ReturnType<typeof createLoadingStore>;

export const LoadingStoreContext = createContext<LoadingStoreApi | undefined>(
  undefined,
);

export interface LoadingStoreProviderProps {
  children: ReactNode;
}

export const LoadingStoreProvider = ({
  children,
}: LoadingStoreProviderProps) => {
  const storeRef = useRef<LoadingStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createLoadingStore(initLoadingStore());
  }

  return (
    <LoadingStoreContext.Provider value={storeRef.current}>
      {children}
    </LoadingStoreContext.Provider>
  );
};

export const useLoadingStore = <T,>(
  selector: (store: LoadingStore) => T,
): T => {
  const loadingStoreContext = useContext(LoadingStoreContext);

  if (!loadingStoreContext) {
    throw new Error(`useLoadingStore must be used within LoadingStoreProvider`);
  }

  return useStore(loadingStoreContext, selector);
};
