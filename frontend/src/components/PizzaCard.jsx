import React from 'react';


export const PizzaCard = ({ pizza, onAdd }) => {
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
                    <p className="text-gray-600 mb-1">
                        {pizza.ingredients.join(', ')}
                    </p>
                    <p className="text-gray-800 font-semibold">Precio: ${pizza.price}</p>
                </div>
                <button
                    onClick={() => onAdd(pizza)}
                    className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                >
                    Añadir al Pedido
                </button>
            </div>
        </div>
    );
};
