import { OrderServices } from '../src/services/order.services.js';
import { PizzaServices } from '../src/services/pizza.services.js';
import { Order } from '../src/models/order.model.js';
import { OrderItem } from '../src/models/orderItems.model.js';

jest.mock('../src/services/pizza.services.js');

describe('OrderServices', () => {
    let orderService;
    let mockPizzaService;

    beforeEach(() => {
        mockPizzaService = new PizzaServices();
        mockPizzaService.getById = jest.fn();
        orderService = new OrderServices();
        orderService.pizzaService = mockPizzaService;
    });

    test('getAll should return an empty array initially', () => {
        const orders = orderService.getAll();
        expect(Array.isArray(orders)).toBe(true);
        expect(orders.length).toBe(0);
    });

    test('getById should return the correct order if it exists', () => {
        const order = new Order([
            {
                "pizzaId": "01963060-5772-7518-ab70-ff61c309f324",
                "quantity": 3
            },
            {
                "pizzaId": "0196305c-619f-7453-9194-d7bbec238e47",
                "quantity": 10
            }
        ]);
        orderService.orders.push(order);
        const foundOrder = orderService.getById(order.id);
        expect(foundOrder).toBe(order);
    });

    test('getById should return undefined if the order does not exist', () => {
        const foundOrder = orderService.getById('asdwqqw12das');
        expect(foundOrder).toBeUndefined();
    });

    test('createOrder should create an order successfully', () => {
        mockPizzaService.getById.mockReturnValue({
            "id": "01963060-5772-7518-ab70-ff61c309f324",
            "name": "Margherita",
            "price": 5,
            "ingredients": [
                "tomato",
                "mozzarella"
            ]
        });

        const items = [{ pizzaId: '01963060-5772-7518-ab70-ff61c309f324', quantity: 2 }];
        const newOrder = orderService.createOrder(items);

        expect(newOrder).toBeInstanceOf(Order);
        expect(newOrder.items.length).toBe(1);
        expect(newOrder.items[0]).toBeInstanceOf(OrderItem);
        expect(orderService.orders.length).toBe(1);
    });

    test('createOrder should throw an error if there are no items', () => {
        expect(() => orderService.createOrder([])).toThrow('No items in the order');
    });

    test('createOrder should throw an error if a pizza does not exist', () => {
        mockPizzaService.getById.mockReturnValue(null);

        const items = [{ pizzaId: '999', quantity: 1 }];
        expect(() => orderService.createOrder(items)).toThrow('Pizza with ID not found');
    });
});