import React from 'react';

export const ConfirmedModal = ({ orderId, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div
                data-testid="orders-modal-backdrop"
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white p-6 rounded shadow-md z-10 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold mb-4">Orden Realizada!</h3>
                <p className="mb-4">Order ID: {orderId}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

