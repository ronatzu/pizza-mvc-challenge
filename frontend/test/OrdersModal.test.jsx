import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {OrdersModal} from "../src/components/OrdersModal.jsx";


jest.mock('../src/hooks/useOrdersData', () => ({
    __esModule: true,
    useOrdersData: () => ({
        orders: [
            {
                id: '0196324c-3429-7457-8c5a-08cdbd3cdf9a',
                items: [
                    { pizza: { name: 'Margherita' }, quantity: 2, totalPrice: 10 }
                ],
                totalAmount: 10,
            },
        ],
        loading: false,
        error: null,
        loadOrders: jest.fn(),
        searchOrderById: jest.fn(),
    }),
}));


describe('OrdersModal Component', () => {
    test('renders orders modal with order details', () => {
        render(<OrdersModal onClose={jest.fn()} />);

        expect(screen.getByText(/Ordenes/i)).toBeInTheDocument();
        expect(screen.getByText(/Order ID: 0196324c-3429-7457-8c5a-08cdbd3cdf9a/i)).toBeInTheDocument();
        expect(screen.getByText(/Margherita/i)).toBeInTheDocument();
        expect(screen.getByText(/Total: \$10/i)).toBeInTheDocument();
    });

    test('calls onClose when the backdrop is clicked', () => {
        const onCloseMock = jest.fn();
        render(<OrdersModal onClose={onCloseMock} />);
        const backdrop = screen.getByTestId('orders-modal-backdrop');
        fireEvent.click(backdrop);
        expect(onCloseMock).toHaveBeenCalled();
    });

    test('renders search input and search button', () => {
        render(<OrdersModal onClose={jest.fn()} />);
        expect(screen.getByPlaceholderText(/Buscar por ID/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Buscar/i })).toBeInTheDocument();
    });
});
