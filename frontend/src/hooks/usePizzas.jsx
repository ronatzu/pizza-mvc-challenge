import { useEffect, useState } from 'react';
import { fetchPizzas } from '../services/api';

export const usePizzas = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const data = await fetchPizzas();
                setPizzas(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getPizzas();
    }, []);

    return { pizzas, loading, error };
};


