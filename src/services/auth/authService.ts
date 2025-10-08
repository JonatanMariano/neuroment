import { apiService } from '../apiService';
import { API_ENDPOINTS } from '../../config/apiEndpoints';
import type { LoginFormData, AuthResponse } from '../../types/formLogin/auth';

export const authService = {
  async login(credentials: LoginFormData): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN, 
      credentials
    );
    return response.data;
  },

  async validate(): Promise<boolean> {
    try {
      await apiService.get(API_ENDPOINTS.AUTH.VALIDATE);
      return true;
    } catch {
      return false;
    }
  },

  async logout(): Promise<void> {
    try {
      await apiService.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      apiService.clearAuthToken();
    }
  },
};
