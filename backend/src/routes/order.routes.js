import express from "express";
import { OrderController } from "../controller/order.controller.js";
import {createOrderValidation} from "../validators/createOrder.validation.js";
import {validateRequest} from "../middleware/requestValidator.js";


export const OrderRouter = express.Router();
const orderController = new OrderController();

OrderRouter.get("/", orderController.getAll);
OrderRouter.get("/:id", orderController.getById);
OrderRouter.post("/", createOrderValidation,  validateRequest,orderController.create);
