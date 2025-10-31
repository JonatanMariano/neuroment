export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  ONBOARDING: 'onboarding',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ONBOARDING_CHOICE: '/onboarding-choice',
  ONBOARDING: '/onboarding',
  DASHBOARD: '/dashboard',
  QUESTIONS: '/questions',
} as const;

export const USER_TYPES = {
  STUDENT: 'student',
  AUTODIDACT: 'autodidact',
} as const;
