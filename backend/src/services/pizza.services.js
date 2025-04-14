import {PizzaSeed} from "../seed/pizza.seed.js";
import {Pizza} from "../models/pizza.model.js";

export class PizzaServices {
    static pizzas

    getAll() {
        if (!PizzaServices.pizzas) {
            const seedData = PizzaSeed();
            PizzaServices.pizzas = seedData.map(
                pizzaData => new Pizza(pizzaData.name, pizzaData.price, pizzaData.ingredients)
            );
        }
        return PizzaServices.pizzas;
    }

    getById(id) {
        const pizzas = this.getAll();
        return pizzas.find(pizza => pizza.id === id);
    }
}