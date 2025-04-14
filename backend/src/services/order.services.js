import {Order} from "../models/order.model.js";
import {PizzaServices} from "./pizza.services.js";
import {OrderItem} from "../models/orderItems.model.js";


export class OrderServices {

    constructor() {
        this.pizzaService = new PizzaServices();
        this.orders = [];
    }

    getAll() {
        return this.orders;
    }

    getById(id) {
        return this.orders.find(order => order.id === id);
    }

    createOrder(items) {
        if (!Array.isArray(items) || items.length === 0) {
            throw new Error('No items in the order');
        }
        const orderItems = items.map(({ pizzaId, quantity }) => {
            const pizza = this.pizzaService.getById(pizzaId);
            console.log(pizza);
            if (!pizza) {
                const err = new Error(`Pizza with ID not found`);
                err.status = 404;
                throw err;
            }
            return new OrderItem(pizza, quantity);
        });

        const newOrder = new Order(orderItems);
        this.orders.push(newOrder);
        return newOrder;
    }

}