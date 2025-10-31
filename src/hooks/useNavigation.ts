import { useNavigate } from "react-router-dom";
import { useNavigationStore } from "../stores/StoreProvider";
import type { NavigationPage } from "../types";

export const useNavigation = () => {
  const navigate = useNavigate();
  const navigationStore = useNavigationStore();

  const navigateTo = (page: NavigationPage) => {
    navigationStore.navigateTo(page);
    navigate(page);
  };

  const goBack = () => {
    navigationStore.goBack();
    navigate(-1);
  };

  return {
    // State
    currentPage: navigationStore.currentPage,
    previousPage: navigationStore.previousPage,
    isOnLanding: navigationStore.isOnLanding,
    isOnLogin: navigationStore.isOnLogin,
    isOnSignUp: navigationStore.isOnSignUp,
    isOnOnboardingChoice: navigationStore.isOnOnboardingChoice,
    isOnOnboarding: navigationStore.isOnOnboarding,
    isOnDashboard: navigationStore.isOnDashboard,
    isOnQuestions: navigationStore.isOnQuestions,
    
    // Actions
    navigateTo,
    goBack,
  };
};
