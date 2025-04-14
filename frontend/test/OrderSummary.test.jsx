// src/components/OrderSummary.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {OrderSummary} from "../src/components/OrderSummary.jsx";


describe('OrderSummary Component', () => {
    const sampleOrderItems = [
        { id: '0196324c-3429-7457-8c5a-08cdbd3cdf9a', name: 'Margherita', price: 5, quantity: 2 },
        { id: '0196327b-71e0-776e-8efd-168c6631a202', name: 'Pepperoni', price: 6, quantity: 1 },
    ];
    const total = sampleOrderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    test('renders order summary with items and total', () => {
        render(<OrderSummary orderItems={sampleOrderItems} total={total} />);

        expect(screen.getByText(/Tu Pedido/i)).toBeInTheDocument();

        expect(screen.getByText(/Margherita x 2/i)).toBeInTheDocument();
        expect(screen.getByText(/\$10\.00/)).toBeInTheDocument(); // 5 x 2 = $10.00

        expect(screen.getByText(/Pepperoni x 1/i)).toBeInTheDocument();
        expect(screen.getByText(/\$6\.00/)).toBeInTheDocument(); // 6 x 1 = $6.00

        expect(screen.getByText(/Total/i)).toBeInTheDocument();
        expect(screen.getByText(/\$16\.00/)).toBeInTheDocument();
    });

    test('renders message when no items are in the order', () => {
        render(<OrderSummary orderItems={[]} total={0} />);
        expect(screen.getByText(/No hay pizzas en el pedido/i)).toBeInTheDocument();
    });
});
