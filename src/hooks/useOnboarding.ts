import { useOnboardingStore } from "../stores/StoreProvider";
import type { OnboardingData } from "../types";

export const useOnboarding = () => {
  const onboardingStore = useOnboardingStore();

  const complete = (data: OnboardingData) => {
    onboardingStore.setOnboardingData(data);
  };

  const skip = () => {
    onboardingStore.skipOnboarding();
  };

  const reset = () => {
    onboardingStore.resetOnboarding();
  };

  const setStep = (step: number) => {
    onboardingStore.setCurrentStep(step);
  };

  const nextStep = () => {
    onboardingStore.nextStep();
  };

  const previousStep = () => {
    onboardingStore.previousStep();
  };

  return {
    // State
    data: onboardingStore.data,
    isCompleted: onboardingStore.isCompleted,
    isSkipped: onboardingStore.isSkipped,
    currentStep: onboardingStore.currentStep,
    hasCompletedOnboarding: onboardingStore.hasCompletedOnboarding,
    profile: onboardingStore.onboardingProfile,
    bestStudyPeriod: onboardingStore.bestStudyPeriod,
    learningStyle: onboardingStore.learningStyle,
    studyPreference: onboardingStore.studyPreference,
    
    // Actions
    complete,
    skip,
    reset,
    setStep,
    nextStep,
    previousStep,
  };
};
