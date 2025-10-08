export const environment = {
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  API_TIMEOUT_MS: import.meta.env.VITE_API_TIMEOUT_MS || 10000,
} as const;