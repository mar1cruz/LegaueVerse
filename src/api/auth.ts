import {instance} from "./instance";

export const authApi = {
    login: (body: { email: string, password: string }) => {
        return instance.post('/users/auth/jwt/create/', body);
    },
    register: (body: { email: string, password: string }) => {
        return instance.post('/users/auth/users/', body);
    },
    logOut:() => {

    }
}