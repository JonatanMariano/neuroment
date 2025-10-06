import type { User } from "../user";
export interface LoginFormData{
    email: string;
    password: string;
    remember: boolean;
}
export interface AuthResponse{
    user?: User;
    token?: string;
    message?: string;
}