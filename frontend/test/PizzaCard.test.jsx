import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {PizzaCard} from "../src/components/PizzaCard.jsx";


describe('PizzaCard Component', () => {
    const mockPizza = {
        id: '0196324c-3429-7457-8c5a-08cdbd3cdf9a',
        name: 'Margherita',
        price: 5,
        ingredients: ['tomato', 'mozzarella'],
    };

    test('renders pizza information correctly and shows "Añadir a pedido" button when quantity is 0', () => {
        render(
            <PizzaCard
                pizza={mockPizza}
                onAdd={jest.fn()}
                onUpdate={jest.fn()}
                onRemove={jest.fn()}
                currentQuantity={0}
            />
        );

        expect(screen.getByText(/Margherita/i)).toBeInTheDocument();
        expect(screen.getByText(/tomato, mozzarella/i)).toBeInTheDocument();
        expect(screen.getByText(/Precio: \$5/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Añadir Pedido/i })).toBeInTheDocument();
    });

    test('renders increment and decrement controls when quantity is greater than 0', () => {
        const mockOnUpdate = jest.fn();
        render(
            <PizzaCard
                pizza={mockPizza}
                onAdd={jest.fn()}
                onUpdate={mockOnUpdate}
                onRemove={jest.fn()}
                currentQuantity={2}
            />
        );

        // Verifica que se muestren los botones para incrementar y decrementar
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    test('calls onAdd with quantity 1 when "Añadir a pedido" button is clicked', () => {
        const onAddMock = jest.fn();
        render(
            <PizzaCard
                pizza={mockPizza}
                onAdd={onAddMock}
                onUpdate={jest.fn()}
                onRemove={jest.fn()}
                currentQuantity={0}
            />
        );

        const addButton = screen.getByRole('button', { name: /Añadir Pedido/i });
        fireEvent.click(addButton);
        expect(onAddMock).toHaveBeenCalledWith(mockPizza, 1);
    });

    test('calls onUpdate and onRemove correctly when increment and decrement buttons are clicked', () => {
        const onUpdateMock = jest.fn();
        const onRemoveMock = jest.fn();

        // Inicia con currentQuantity 2
        render(
            <PizzaCard
                pizza={mockPizza}
                onAdd={jest.fn()}
                onUpdate={onUpdateMock}
                onRemove={onRemoveMock}
                currentQuantity={2}
            />
        );

        const incrementButton = screen.getByRole('button', { name: '+' });
        fireEvent.click(incrementButton);
        // De 2 a 3
        expect(onUpdateMock).toHaveBeenCalledWith(mockPizza, 3);

        const decrementButton = screen.getByRole('button', { name: '-' });
        // Primer decrement: de 3 a 2
        fireEvent.click(decrementButton);
        expect(onUpdateMock).toHaveBeenCalledWith(mockPizza, 2);

        // Segundo decrement: de 2 a 1
        fireEvent.click(decrementButton);
        expect(onUpdateMock).toHaveBeenCalledWith(mockPizza, 1);

        // Tercer decrement: de 1 a 0 => llama a onRemove
        fireEvent.click(decrementButton);
        expect(onRemoveMock).toHaveBeenCalledWith(mockPizza);
    });
});
