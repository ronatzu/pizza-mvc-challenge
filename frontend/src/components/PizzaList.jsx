import React from 'react';
import {usePizzas} from "../hooks/usePizzas.jsx";
import {PizzaCard} from "./PizzaCard.jsx";



export const PizzaList = ({ onAdd, onUpdate, onRemove, orderItems }) => {
    const { pizzas, loading, error } = usePizzas();

    if (loading) {
        return <p>Horneando Pizzas...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl text-center font-bold mb-4">Pizzas Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pizzas.map((pizza) => {
                    const currentItem = orderItems.find(item => item.id === pizza.id);
                    const currentQuantity = currentItem ? currentItem.quantity : 0;
                    return (
                        <PizzaCard
                            key={pizza.id}
                            pizza={pizza}
                            onAdd={onAdd}
                            onUpdate={onUpdate}
                            onRemove={onRemove}
                            currentQuantity={currentQuantity}
                        />
                    );
                })}
            </div>
        </div>
    );
};

