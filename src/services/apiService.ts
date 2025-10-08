import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { createHttpClient } from "./http/httpCliente";
class ApiService {
    private static instance: ApiService;
    private client: AxiosInstance;

    private constructor() {
        this.client = createHttpClient();
    }
    static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }
    setAuthToken(token: string){
        this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    clearAuthToken(){
        delete this.client.defaults.headers.common['Authorization'];
    }
    // funcao para fazer uma requisicao http get( buscar dados)
    async get<T = unknown>(url: string, config?: AxiosRequestConfig) {
        const response = await this.client.get<T>(url, config);
        return { data: response.data, status: response.status };
      }
      // Funcao para Substituir dados ( atualizar dados do aluno ou qualquer outro dado)
    async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig){
        const response = await this.client.put<T>(url, data, config);
        return{data: response.data, status: response.status};
    }
    // funcao para criar dados (add novo item/dados)
    async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig){
        const response = await this.client.post<T>(url, data, config);
        return{data: response.data, status: response.status}
    }
    // mesma coisa do put porem atualiza uma parte do dado
    async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig){
        const response = await this.client.patch<T>(url, data, config);
        return{data: response.data, status: response.status}
    }
    // levar dado de obtido e apagar
    async delete<T = unknown>(url: string, config?: AxiosRequestConfig){
        const response = await this.client.delete<T>(url,config);
        return{data: response.data, status: response.status}
    }
}
export const apiService =  ApiService.getInstance();