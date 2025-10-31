export type NavigationPage =
  | "/"
  | "/login"
  | "/signup"
  | "/onboarding-choice"
  | "/onboarding"
  | "/dashboard"
  | "/questions";

export interface NavigationState {
  currentPage: NavigationPage;
  previousPage: NavigationPage | null;
}
