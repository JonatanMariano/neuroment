import axios from "axios";
import type { AxiosInstance, AxiosError } from "axios";
import { environment } from "../../config/environment";

export const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: environment.API_BASE_URL,
    timeout: environment.API_TIMEOUT_MS,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const status = error.response?.status;
      const message =
        (error.response?.data as any)?.message ||
        error.message ||
        "Erro desconhecido";
      return Promise.reject({ message, status, code: error.code });
    }
  );

  return instance;
};