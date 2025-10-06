import { makeAutoObservable } from "mobx";
import type {LoginFormData,AuthResponse} from "../../types/formLogin/auth";
import type { User } from "../../types/user";

class AuthStore{
    user?: User ;
    token?: string;
    isLoading = false;
    error?: string | null;
    constructor(){
        makeAutoObservable(this);
    }
    async login(formData: LoginFormData){
        this.isLoading = true;
        this.error = null;
        try{
            const response = await fetch()
        }
    }
}