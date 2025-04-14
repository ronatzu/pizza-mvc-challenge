import React from 'react';
import {Link} from 'react-router-dom';
import Pizza_Logo from '../imagen/pizza-logo.png';

export const Header = () => {


    return (
        <header className="bg-red-400">
            <div className="w-full flex items-center px-4 py-3">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src={Pizza_Logo}
                            alt="Pizza App Logo"
                            className="w-20 h-20 object-contain bg-transparent"
                        />
                    </Link>
                </div>

                <nav className="ml-24">
                    <ul className="flex gap-10">
                        <li><Link to="/orders" className="text-white">Ordenes</Link></li>
                        <li><Link to="/order-summary" className="text-white">Resumen</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


