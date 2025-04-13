import { PizzaServices } from '../src/services/pizza.services.js';

describe('PizzaServices', () => {
    let pizzaService;

    beforeEach(() => {
        pizzaService = new PizzaServices();
    });

    test(' getAll should load pizzas from seed and return an array', () => {
        const pizzas = pizzaService.getAll();
        expect(Array.isArray(pizzas)).toBe(true);
        expect(pizzas.length).toBeGreaterThan(0);

    });

    test('getById should return the correct pizza if it exists', () => {
        const pizzas = pizzaService.getAll();
        const firstPizza = pizzas[0];
        const foundPizza = pizzaService.getById(firstPizza.id);
        expect(foundPizza).toBeDefined();
        expect(foundPizza.id).toBe(firstPizza.id);
    });


});
