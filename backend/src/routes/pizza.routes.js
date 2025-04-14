import express from 'express';
import {PizzaController} from "../controller/pizza.controller.js";

const  PizzaRouter = express.Router();
const pizzaController = new PizzaController();

PizzaRouter.get('/', pizzaController.getAll);

export default PizzaRouter;