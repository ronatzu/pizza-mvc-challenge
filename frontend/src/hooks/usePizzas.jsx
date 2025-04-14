import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePizzas = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/pizzas`);
                setPizzas(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    return { pizzas, loading, error };
};

