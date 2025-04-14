import { useState, useEffect } from 'react';
import { fetchOrders, fetchOrderById } from '../services/api';

export const useOrdersData = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadOrders = async () => {
        setLoading(true);
        try {
            const data = await fetchOrders();
            setOrders(data);
            setError(null);
        } catch (err) {
            setError(err);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    const searchOrderById = async (orderId) => {
        setLoading(true);
        try {
            const order = await fetchOrderById(orderId);
            setOrders(order ? [order] : []);
            setError(null);
        } catch (err) {
            setError(err);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return { orders, loading, error, loadOrders, searchOrderById };
};


