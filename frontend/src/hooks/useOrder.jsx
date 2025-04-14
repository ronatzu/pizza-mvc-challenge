
import { useState } from 'react';

export const useOrder = () => {
    const [orderItems, setOrderItems] = useState([]);

    const addPizza = (pizza, qty = 1) => {
        setOrderItems((prevItems) => {
            if (prevItems.find(item => item.id === pizza.id)) return prevItems;
            return [...prevItems, { ...pizza, quantity: qty }];
        });
    };

    const updatePizzaQuantity = (pizza, qty) => {
        setOrderItems((prevItems) =>
            prevItems.map(item =>
                item.id === pizza.id ? { ...item, quantity: qty } : item
            )
        );
    };

    const removePizza = (pizza) => {
        setOrderItems((prevItems) =>
            prevItems.filter(item => item.id !== pizza.id)
        );
    };

    const clearOrder = () => setOrderItems([]);

    const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return { orderItems, addPizza, updatePizzaQuantity, removePizza, clearOrder, totalAmount };
};

