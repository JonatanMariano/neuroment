import { makeAutoObservable } from "mobx";
import type { User, LoginCredentials, SignUpData, AuthState } from "../../types";

export class AuthStore implements AuthState {
  isAuthenticated = false;
  user: User | null = null;
  token: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("token");
      
      if (savedUser && savedToken) {
        this.user = JSON.parse(savedUser);
        this.token = savedToken;
        this.isAuthenticated = true;
      }
    }
  }

  private saveToStorage() {
    if (typeof window !== "undefined") {
      if (this.user && this.token) {
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token);
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }

  login(credentials: LoginCredentials) {
    // Simulação - Em produção, fazer chamada à API
    console.log("Login:", credentials);
    
    const mockUser: User = {
      id: "1",
      name: credentials.email.split("@")[0],
      email: credentials.email,
      userType: "student",
    };

    const mockToken = "mock-jwt-token-" + Date.now();

    this.user = mockUser;
    this.token = mockToken;
    this.isAuthenticated = true;
    this.saveToStorage();
  }

  signUp(data: SignUpData) {
    // Simulação - Em produção, fazer chamada à API
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      userType: data.userType,
    };

    const mockToken = "mock-jwt-token-" + Date.now();

    this.user = newUser;
    this.token = mockToken;
    this.isAuthenticated = true;
    this.saveToStorage();
  }

  completeAuthentication() {
    if (this.user) {
      const mockToken = "mock-jwt-token-" + Date.now();
      this.token = mockToken;
      this.isAuthenticated = true;
      this.saveToStorage();
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.user = null;
    this.token = null;
    this.saveToStorage();
  }

  // Computed values
  get isLoggedIn(): boolean {
    return this.isAuthenticated && this.user !== null;
  }

  get displayName(): string {
    return this.user?.name || "Usuário";
  }

  get userEmail(): string {
    return this.user?.email || "";
  }

  get userType(): string | null {
    return this.user?.userType || null;
  }
}