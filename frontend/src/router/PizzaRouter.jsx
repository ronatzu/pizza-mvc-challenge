import NotFound from "../views/NotFound";
import { Routes, Route } from 'react-router-dom';
import Home from "../views/Home.jsx";


export const PizzaRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};