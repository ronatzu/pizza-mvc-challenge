import React from 'react';

export const ConfirmOrderButton = ({ onConfirm, disabled }) => {
    return (
        <button
            onClick={onConfirm}
            disabled={disabled}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-200 disabled:opacity-50"
        >
            Confirmar Pedido
        </button>
    );
};
