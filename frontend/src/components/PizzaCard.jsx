import React, { useState, useEffect } from 'react';

export const PizzaCard = ({ pizza, onAdd, onUpdate, onRemove, currentQuantity }) => {
    const [quantity, setQuantity] = useState(currentQuantity);

    useEffect(() => {
        setQuantity(currentQuantity);
    }, [currentQuantity]);

    const handleAdd = () => {
        setQuantity(1);
        onAdd(pizza, 1);
    };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onUpdate(pizza, newQuantity);
    };

    const handleDecrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity < 1) {
            setQuantity(0);
            onRemove(pizza);
        } else {
            setQuantity(newQuantity);
            onUpdate(pizza, newQuantity);
        }
    };

    return (
        <div className="flex border rounded p-4 shadow hover:shadow-lg transition bg-white">
            <div className="w-1/3 flex-shrink-0">
                <img
                    src={`../src/imagen/${pizza.name}.webp`}
                    alt={pizza.name}
                    className="w-full h-32 object-cover rounded"
                />
            </div>
            <div className="w-2/3 pl-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold mb-1">{pizza.name}</h3>
                    <p className="text-gray-600 mb-1">{pizza.ingredients.join(', ')}</p>
                    <p className="text-gray-800 font-semibold">Precio: ${pizza.price}</p>
                </div>
                <div className="mt-3">
                    {quantity < 1 ? (
                        <button
                            onClick={handleAdd}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                            Añadir Pedido
                        </button>
                    ) : (
                        <div className="flex items-center">
                            <button
                                onClick={handleDecrement}
                                className="bg-blue-200 text-gray-800 px-3 py-1 rounded-l hover:bg-blue-100 transition"
                            >
                                -
                            </button>
                            <span className="px-4 py-1">{quantity}</span>
                            <button
                                onClick={handleIncrement}
                                className="bg-blue-200 text-gray-800 px-3 py-1 rounded-l hover:bg-blue-100 transition"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


