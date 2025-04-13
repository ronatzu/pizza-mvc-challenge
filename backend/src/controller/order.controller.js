import { OrderServices } from "../services/order.services.js";

export class OrderController {
    constructor(orderService = new OrderServices()) {
        this.orderService = orderService;
    }

    getAll = (req, res, next) => {
        try {
            const orders = this.orderService.getAll();
            res.status(200).json(orders.map((order) => order.toJSON()));
        } catch (error) {
            next(error);
        }
    };

    getById = (req, res, next) => {
        try {
            const order = this.orderService.getById(req.params.id);

            if (!order)
                return res.status(404).json({ message: "Order not found" });
            res.status(200).json(order.toJSON());
        } catch (error) {
            next(error);
        }
    };

    create = (req, res, next) => {
        try {
            const newOrder = this.orderService.createOrder(req.body.items);
            console.log(newOrder);
            res.status(201).json(newOrder.toJSON());
        } catch (error) {
            next(error);
        }
    };
}
