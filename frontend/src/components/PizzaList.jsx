import React from 'react';

import {PizzaCard} from './PizzaCard';
import {usePizzas} from "../hooks/usePizzas.jsx";

export const PizzaList = ({ onAdd }) => {

    const { pizzas, loading, error } = usePizzas();

    if (loading) return <p>Horneando pizzas...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} onAdd={onAdd} />
                ))}
            </div>
        </div>
    );
};

