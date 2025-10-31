import { makeAutoObservable } from "mobx";
import type { NavigationPage, NavigationState } from "../../types";

export class NavigationStore implements NavigationState {
  currentPage: NavigationPage = "/";
  previousPage: NavigationPage | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  navigateTo(page: NavigationPage) {
    console.log(`Navegando de ${this.currentPage} para ${page}`);
    this.previousPage = this.currentPage;
    this.currentPage = page;
  }

  goBack() {
    if (this.previousPage) {
      const temp = this.previousPage;
      this.previousPage = this.currentPage;
      this.currentPage = temp;
    }
  }

  // Computed helpers
  get isOnLanding(): boolean {
    return this.currentPage === "/";
  }

  get isOnLogin(): boolean {
    return this.currentPage === "/login";
  }

  get isOnSignUp(): boolean {
    return this.currentPage === "/signup";
  }

  get isOnOnboardingChoice(): boolean {
    return this.currentPage === "/onboarding-choice";
  }

  get isOnOnboarding(): boolean {
    return this.currentPage === "/onboarding";
  }

  get isOnDashboard(): boolean {
    return this.currentPage === "/dashboard";
  }

  get isOnQuestions(): boolean {
    return this.currentPage === "/questions";
  }
}
