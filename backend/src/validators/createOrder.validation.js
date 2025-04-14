import {body} from 'express-validator';


export const createOrderValidation = [
    body('items')
        .isArray({ min: 1 })
        .withMessage('Order must have at least one item'),

    body('items.*')
        .custom(item => {
            const allowedFields = ['pizzaId', 'quantity'];
            const extraFields = Object.keys(item).filter(field => !allowedFields.includes(field));
            if (extraFields.length > 0) {
                throw new Error(`Invalid fields in order item`);
            }
            return true;
        })
        .bail(),

    body('items.*.pizzaId')
        .isUUID()
        .withMessage('Each pizzaId must be a valid UUID'),

    body('items.*.quantity')
        .isInt({ min: 1 })
        .withMessage('Each quantity must be at least 1'),
];
