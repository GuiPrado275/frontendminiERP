import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;  // insere token no header Authorization
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;

