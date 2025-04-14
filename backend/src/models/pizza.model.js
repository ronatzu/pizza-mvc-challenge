import { v7 as uuid} from "uuid";

export class Pizza{
    constructor(name, price, ingredients) {
        this._id = uuid();
        this._name = name;
        this._price = price;
        this._ingredients = ingredients;
    }

    get id() {
        return this._id;
    }


    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get ingredients() {
        return this._ingredients;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            ingredients: this.ingredients,
        };
    }

}