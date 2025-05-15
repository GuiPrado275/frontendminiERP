import api from '../services/api.jsx';

export const authService = {
    async login(email, password) {
        const response = await api.post('/login', { email, password });
        console.log('Login response data:', response);
        return response.data;
    },

    async register(userData) {
        const response = await api.post('/register', userData);
        return response.data;
    },

    async getMe() {
        const response = await api.get('/user/me');
        return response.data;
    },

    logout() {
        // Limpa o token do localStorage
        localStorage.removeItem('token');
    }
};
