import React, { createContext, useContext, ReactNode } from "react";
import { RootStore } from "./RootStore";

const rootStore = new RootStore();

const StoreContext = createContext<RootStore>(rootStore);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStores deve ser usado dentro de um StoreProvider");
  }
  return context;
};

export const useAuthStore = () => {
  const { authStore } = useStores();
  return authStore;
};

export const useOnboardingStore = () => {
  const { onboardingStore } = useStores();
  return onboardingStore;
};

export const useNavigationStore = () => {
  const { navigationStore } = useStores();
  return navigationStore;
};
