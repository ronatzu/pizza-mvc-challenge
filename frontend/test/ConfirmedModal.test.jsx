import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmedModal } from '../src/components/ConfirmedModal.jsx';


describe('ConfirmedModal', () => {
    const orderId = '0196324c-3429-7457-8c5a-08cdbd3cdf9a';
    const onCloseMock = jest.fn();

    beforeEach(() => {
        onCloseMock.mockClear();
        render(<ConfirmedModal orderId={orderId} onClose={onCloseMock} />);
    });

    test('renders order id and title', () => {
        expect(screen.getByText('Orden Realizada!')).toBeInTheDocument();
        expect(screen.getByText(new RegExp(`Order ID: ${orderId}`, 'i'))).toBeInTheDocument();
    });

    test('calls onClose when clicking close button', () => {
        const closeButton = screen.getByRole('button', { name: /Cerrar/i });
        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    test('calls onClose when clicking the backdrop', () => {
        const backdrop = screen.getByTestId('orders-modal-backdrop');
        fireEvent.click(backdrop);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
