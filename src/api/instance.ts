import axios from "axios";
import {store} from "../store/store";

const getToken = () => {
    const state = store.getState();
    return state.auth.token;
};

export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
});

instance.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
