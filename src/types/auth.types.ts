export type UserType = "student" | "autodidact";

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}
