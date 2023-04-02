import {Cart} from "../pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routing = () => {
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
        </Routes>

    );
 }