export type BiologicalRhythm = "morning" | "afternoon" | "night";
export type StudyPreference = "solo" | "group" | "both";
export type VARKStyle = "visual" | "auditory" | "reading" | "kinesthetic";
export type MultipleIntelligence =
  | "linguistic"
  | "logical"
  | "spatial"
  | "musical"
  | "bodily"
  | "interpersonal"
  | "intrapersonal"
  | "naturalist";

export interface OnboardingData {
  bestStudyPeriod: BiologicalRhythm;
  studyPreference: StudyPreference;
  varkPrimary: VARKStyle;
  varkSecondary?: VARKStyle;
  multipleIntelligences: MultipleIntelligence[];
  challenges: string[];
  goals: string[];
  availableHoursPerDay: number;
}

export interface OnboardingState {
  data: OnboardingData | null;
  isCompleted: boolean;
  isSkipped: boolean;
  currentStep: number;
}
