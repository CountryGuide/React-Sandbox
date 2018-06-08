import axios from 'axios';


export function config() {
    window.axios = axios;
    window.axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                window.location.replace('/auth/google');
            }
            return Promise.reject(error);
        });
}
