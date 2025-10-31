import { makeAutoObservable } from "mobx";
import type { OnboardingData, OnboardingState } from "../../types";

export class OnboardingStore implements OnboardingState {
  data: OnboardingData | null = null;
  isCompleted = false;
  isSkipped = false;
  currentStep = 0;

  constructor() {
    makeAutoObservable(this);
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("onboarding");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        this.data = parsed.data;
        this.isCompleted = parsed.isCompleted;
        this.isSkipped = parsed.isSkipped;
      }
    }
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "onboarding",
        JSON.stringify({
          data: this.data,
          isCompleted: this.isCompleted,
          isSkipped: this.isSkipped,
        })
      );
    }
  }

  setOnboardingData(data: OnboardingData) {
    this.data = data;
    this.isCompleted = true;
    this.isSkipped = false;
    this.saveToStorage();
    console.log("Onboarding completed:", data);
  }

  skipOnboarding() {
    this.isSkipped = true;
    this.isCompleted = false;
    this.saveToStorage();
  }

  resetOnboarding() {
    this.data = null;
    this.isCompleted = false;
    this.isSkipped = false;
    this.currentStep = 0;
    this.saveToStorage();
  }

  setCurrentStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // Computed values
  get hasCompletedOnboarding(): boolean {
    return this.isCompleted || this.isSkipped;
  }

  get onboardingProfile(): OnboardingData | null {
    return this.data;
  }

  get bestStudyPeriod(): string | null {
    return this.data?.bestStudyPeriod || null;
  }

  get learningStyle(): string | null {
    return this.data?.varkPrimary || null;
  }

  get studyPreference(): string | null {
    return this.data?.studyPreference || null;
  }
}
