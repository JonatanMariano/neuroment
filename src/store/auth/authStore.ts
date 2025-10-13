import { makeAutoObservable, runInAction } from 'mobx';
import { authService } from '../../services/auth/authService';
import { apiService } from '../../services/apiService';
import type { LoginFormData } from '../../types/formLogin/auth';
import type { User } from '../../types/user';

class AuthStore {
  user: User | null = null;
  token: string | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.restoreFromStorage();
  }

  get isAuthenticated(): boolean {
    return !!this.token && !!this.user;
  }

  private restoreFromStorage(): void {
    const token = localStorage.getItem('@neuroment:token') || 
                  sessionStorage.getItem('@neuroment:token');
    const user = localStorage.getItem('@neuroment:user') || 
                 sessionStorage.getItem('@neuroment:user');
    
    if (token && user) {
      this.token = token;
      this.user = JSON.parse(user);
      apiService.setAuthToken(token);
    }
  }

  private persistToStorage(token: string, user: User, remember = true): void {
    const storage = remember ? localStorage : sessionStorage;
    
    // Limpa o outro storage
    const otherStorage = remember ? sessionStorage : localStorage;
    otherStorage.removeItem('@neuroment:token');
    otherStorage.removeItem('@neuroment:user');
    
    // Salva no storage escolhido
    storage.setItem('@neuroment:token', token);
    storage.setItem('@neuroment:user', JSON.stringify(user));
  }

  private clearStorage(): void {
    localStorage.removeItem('@neuroment:token');
    localStorage.removeItem('@neuroment:user');
    sessionStorage.removeItem('@neuroment:token');
    sessionStorage.removeItem('@neuroment:user');
  }

  async login(formData: LoginFormData, remember = true): Promise<void> {
    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      const data = await authService.login(formData);
      
      runInAction(() => {
        this.token = data.token || null;
        this.user = data.user || null;
      });

      if (data.token && data.user) {
        apiService.setAuthToken(data.token);
        this.persistToStorage(data.token, data.user, remember);
      }
      
    } catch (error: any) {
      runInAction(() => {
        this.error = error?.message || 'Erro ao fazer login';
      });
      throw error;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async logout(): Promise<void> {
    try {
      await authService.logout();
    } finally {
      runInAction(() => {
        this.user = null;
        this.token = null;
        this.error = null;
      });
      this.clearStorage();
    }
  }

  async validateToken(): Promise<boolean> {
    if (!this.token) return false;
    
    try {
      const isValid = await authService.validate();
      if (!isValid) {
        this.logout();
      }
      return isValid;
    } catch {
      this.logout();
      return false;
    }
  }
}

export const authStore = new AuthStore();