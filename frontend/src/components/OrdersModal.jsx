// src/components/OrdersModal.jsx
import React, { useState } from 'react';
import {useOrdersData} from "../hooks/useOrdersData.jsx";


export const OrdersModal = ({ onClose }) => {
    const { orders, loading, error, loadOrders, searchOrderById } = useOrdersData();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            await loadOrders();
        } else {
            await searchOrderById(searchQuery.trim());
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                data-testid="orders-modal-backdrop"
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white p-6 rounded shadow-md z-10 max-w-3xl w-full mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center">Ordenes</h3>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar por ID"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border p-2 rounded mb-2"
                    />
                    <button
                        onClick={handleSearch}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                    >
                        Buscar
                    </button>
                </div>

                {loading ? (
                    <p>Cargando Ordenes...</p>
                ) : error ? (
                    <p className="text-red-500">Error: {error.message}</p>
                ) : orders.length === 0 ? (
                    <p>No se encontraron ordenes .</p>
                ) : (
                    <ul className="space-y-4 max-h-96 overflow-y-auto">
                        {orders.map((order) => (
                            <li key={order.id} className="border p-4 rounded">
                                <p className="font-bold">Order ID: {order.id}</p>
                                <ul className="ml-4 mt-2">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="text-sm">
                                            {item.pizza.name} x {item.quantity} = ${item.totalPrice}
                                        </li>
                                    ))}
                                </ul>
                                <p className="font-bold mt-2">Total: ${order.totalAmount}</p>
                            </li>
                        ))}
                    </ul>
                )}

                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};


