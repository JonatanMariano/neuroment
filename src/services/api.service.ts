import { APP_CONFIG } from '../config/app.config';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = APP_CONFIG.apiUrl;
  }

  async login(email: string, password: string) {
    // Simulação - substituir por chamada real
    console.log('API Login:', { email, password });
    return {
      user: { id: '1', name: email.split('@')[0], email },
      token: 'mock-token-' + Date.now(),
    };
  }

  async signUp(data: any) {
    // Simulação - substituir por chamada real
    console.log('API SignUp:', data);
    return {
      user: { id: Date.now().toString(), ...data },
      token: 'mock-token-' + Date.now(),
    };
  }

  async saveOnboarding(data: any) {
    // Simulação - substituir por chamada real
    console.log('API Save Onboarding:', data);
    return { success: true };
  }
}

export const apiService = new ApiService();
