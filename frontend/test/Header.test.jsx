import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../src/components/Header.jsx';

jest.mock('../src/components/OrdersModal', () => ({
    __esModule: true,
    OrdersModal: (props) => (
        <div data-testid="orders-modal">
            Ordenes
            <button onClick={props.onClose}>Cerrar</button>
        </div>
    ),
}));

describe('Header Component', () => {
    test('renders logo and navigation links', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const logo = screen.getByAltText(/Pizza App Logo/i);
        expect(logo).toBeInTheDocument();
        expect(screen.getByText(/Ordenes/i)).toBeInTheDocument();

    });

    test('opens and closes Orders modal when the Orders button is clicked', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        // Encuentra el botón "Ordenes" y haz clic en él
        const ordersButton = screen.getByRole('button', { name: /Ordenes/i });
        fireEvent.click(ordersButton);

        // Verifica que el modal se muestre usando data-testid
        const modal = screen.getByTestId('orders-modal');
        expect(modal).toBeInTheDocument();

        // Simula el clic en el botón "Cerrar" del modal
        const closeButton = screen.getByRole('button', { name: /Cerrar/i });
        fireEvent.click(closeButton);

        // Verifica que el modal se haya cerrado
        expect(screen.queryByTestId('orders-modal')).not.toBeInTheDocument();
    });
});
