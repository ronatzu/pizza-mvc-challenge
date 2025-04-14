import React, {useState} from 'react';
import {PizzaList} from "../components/PizzaList.jsx";
import {OrderSummary} from "../components/OrderSummary.jsx";
import {useOrder} from "../hooks/useOrder.jsx";
import {ConfirmOrderButton} from "../components/ConfirmOrderButton.jsx";
import {createOrder} from "../services/api.js";
import {ConfirmedModal} from "../components/ConfirmedModal.jsx";

function Home() {
    const { orderItems, addPizza, updatePizzaQuantity, removePizza, clearOrder, totalAmount } = useOrder();
    const [confirmedOrder, setConfirmedOrder] = useState(null);

    const handleConfirmOrder = async () => {
        try {
            const orderPayload = {
                items: orderItems.map(item => ({
                    pizzaId: item.id,
                    quantity: item.quantity
                }))
            };
            const result = await createOrder(orderPayload);
            setConfirmedOrder(result);
            clearOrder();

        } catch (error) {
            console.error('Error confirming order:', error);
            alert('There was an error confirming your order.');
        }
    };

    const closeModal = () => {
        setConfirmedOrder(null);
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/3">
                <PizzaList
                    onAdd={addPizza}
                    onUpdate={updatePizzaQuantity}
                    onRemove={removePizza}
                    orderItems={orderItems}
                />
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <OrderSummary orderItems={orderItems} total={totalAmount} />
                <ConfirmOrderButton onConfirm={handleConfirmOrder} disabled={orderItems.length === 0} />
            </div>
            {confirmedOrder && (
                <ConfirmedModal orderId={confirmedOrder.id} onClose={closeModal} />
            )}
        </div>
    );
}

export default Home;
