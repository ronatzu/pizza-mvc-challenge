import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchPizzas = async () => {
    const response = await apiClient.get('/api/pizzas');  // La barra inicial es importante
    return response.data;
};

export const createOrder = async (orderData) => {
    const response = await apiClient.post('/api/orders', orderData);
    return response.data;
};

export const fetchOrders = async () => {
    const response = await apiClient.get('/api/orders');
    return response.data;
};

export const fetchOrderById = async (id) => {
    const response = await apiClient.get(`/api/orders/${id}`);
    return response.data;
};