import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {OrdersModal} from "./OrdersModal.jsx";

export const Header = () => {

    const [showOrdersModal, setShowOrdersModal] = useState(false);

    return (
        <header className="bg-blue-400">
            <div className="w-full flex items-center px-4 py-3">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img src={'../imagen/pizza-logo.png'} alt="Pizza App Logo" className="w-16 h-16 object-contain" />
                    </Link>
                </div>
                <nav className="ml-4">
                    <ul className="flex gap-4">
                        <li>
                            <button onClick={() => setShowOrdersModal(true)} className="text-white hover:underline">
                                Ordenes
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {showOrdersModal && <OrdersModal onClose={() => setShowOrdersModal(false)} />}
        </header>
    );
};


