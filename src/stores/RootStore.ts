import { AuthStore } from "./auth/AuthStore";
import { OnboardingStore } from "./onboarding/OnboardingStore";
import { NavigationStore } from "./navigation/NavigationStore";

export class RootStore {
  authStore: AuthStore;
  onboardingStore: OnboardingStore;
  navigationStore: NavigationStore;

  constructor() {
    this.authStore = new AuthStore();
    this.onboardingStore = new OnboardingStore();
    this.navigationStore = new NavigationStore();
  }

  reset() {
    this.authStore.logout();
    this.onboardingStore.resetOnboarding();
  }
}
