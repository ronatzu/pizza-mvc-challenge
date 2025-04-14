import React from 'react';

export const OrderSummary = ({ orderItems, total }) => {
    return (
        <div className="bg-white p-4 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tu pedido</h2>
            {orderItems.length === 0 ? (
                <p>No hay pizzas en el pedido.</p>
            ) : (
                <ul className="mb-4 space-y-2">
                    {orderItems.map(item => (
                        <li key={item.id} className="flex justify-between border-b pb-1">
                            <span>{item.name} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    );
};


