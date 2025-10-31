import { useAuthStore } from "../stores/StoreProvider";
import type { LoginCredentials, SignUpData } from "../types";

export const useAuth = () => {
  const authStore = useAuthStore();

  const login = (credentials: LoginCredentials) => {
    authStore.login(credentials);
  };

  const signUp = (data: SignUpData) => {
    authStore.signUp(data);
  };

  const logout = () => {
    authStore.logout();
  };

  const completeAuth = () => {
    authStore.completeAuthentication();
  };

  return {
    // State
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
    token: authStore.token,
    isLoggedIn: authStore.isLoggedIn,
    displayName: authStore.displayName,
    userEmail: authStore.userEmail,
    userType: authStore.userType,
    
    // Actions
    login,
    signUp,
    logout,
    completeAuth,
  };
};
