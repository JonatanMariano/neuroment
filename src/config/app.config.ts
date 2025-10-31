export const APP_CONFIG = {
  name: 'NeuroMent',
  description: 'Plataforma de estudos baseada em neurociência',
  version: '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  environment: import.meta.env.MODE || 'development',
} as const;
