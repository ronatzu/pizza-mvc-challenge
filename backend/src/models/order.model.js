// src/models/order.model.js
import { v7 as uuid } from "uuid";

export class Order {
    constructor(items) {
        this._id = uuid();
        this._items = items;
    }

    get id() {
        return this._id;
    }

    get items() {
        return this._items;
    }

    get totalAmount() {
        return this._items.reduce(
            (sum, item) => sum + (item.totalPrice || 0),
            0
        );
    }

    toJSON() {
        return {
            id: this.id,
            items: this.items,
            totalAmount: this.totalAmount,
        };
    }
}
