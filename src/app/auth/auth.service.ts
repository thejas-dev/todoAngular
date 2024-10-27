import { Injectable } from "@angular/core";
import axios from 'axios';

@Injectable({
    providedIn:'root'
})

export class AuthService{
    email:string = '';
    password:string = '';

    isLoggedIn():boolean{
        const token = localStorage.getItem("token");
        console.log(token)
        if(token){
            const payload = atob(token?.split('.')[1]);
            console.log(payload);
            const parsedPayload = JSON.parse(payload);
            return parsedPayload.exp > Date.now() / 1000;
        }
        return false;
    }

    async login(email:string|null|undefined,password:string|null|undefined): Promise<boolean> {
        const body = {email,password};
        const response = await axios.post('http://localhost:3333/login',body);
        console.log(response.data.jwt);
        localStorage.setItem("token",JSON.stringify(response.data.jwt));
        if(response.status === 200){
            return true;
        }else{
            return false;
        }

    }

}