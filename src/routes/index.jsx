import {Cart} from "../pages/Cart";
import {Home} from "../pages/Home";
import { Routes, Route } from "react-router-dom";

export const Routing = () => {
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
        </Routes>

    );
 }