import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {ConfirmOrderButton} from "../src/components/ConfirmOrderButton.jsx";

describe('ConfirmOrderButton Component', () => {
    test('renders the button and calls onConfirm when clicked', () => {
        const onConfirmMock = jest.fn();
        render(<ConfirmOrderButton onConfirm={onConfirmMock} disabled={false} />);
        const button = screen.getByRole('button', { name: /Confirmar Pedido/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onConfirmMock).toHaveBeenCalledTimes(1);
    });

    test('button is disabled when disabled prop is true', () => {
        render(<ConfirmOrderButton onConfirm={jest.fn()} disabled={true} />);
        const button = screen.getByRole('button', { name: /Confirmar Pedido/i });
        expect(button).toBeDisabled();
    });
});
