// pizza.controller.js
import { PizzaServices } from '../services/pizza.services.js';

export class PizzaController {
    constructor() {
        this.pizzaService = new PizzaServices();
    }

    getAll = (req, res, next) => {
        try {
            const pizzas = this.pizzaService.getAll();
            res.json(pizzas);
        } catch (error) {
            next(error);
        }
    };

}
