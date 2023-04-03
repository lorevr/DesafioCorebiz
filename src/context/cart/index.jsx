import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
    state: {
        cart: [],
    },
    setState: () => {},
};

// const getInitialState = () => {
//     const cart = localStorage.getItem('cart');
//     return cart ? JSON.parse(cart) : [];
// }

const CartContext = createContext(DEFAULT_VALUE);


const CartContextProvider = ({ children }) => {
    const [ state, setState ]= useState( DEFAULT_VALUE.state );
    // const [ state, setState ] = useState( getInitialState );

    return(
        <CartContext.Provider value={{ state, setState }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContextProvider };
export default CartContext;