import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import PizzaRouter from "./routes/pizza.routes.js";
import {OrderRouter} from "./routes/order.routes.js";
import {errorHandler} from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pizzas', PizzaRouter);
app.use('/api/orders', OrderRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 3000);
