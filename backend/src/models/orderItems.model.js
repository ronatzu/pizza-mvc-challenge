
export class OrderItem {
    constructor(pizza, quantity) {
        this._pizza = pizza;
        this._quantity = quantity;
    }

    get pizza() {
        return this._pizza;
    }

    get quantity() {
        return this._quantity;
    }

    get totalPrice() {
        return this._pizza.price * this._quantity;
    }

    toJSON() {
        return {
            pizza: this._pizza,
            quantity: this._quantity,
            totalPrice: this.totalPrice
        };
    }

}
