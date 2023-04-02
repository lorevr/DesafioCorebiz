import React, { useContext } from 'react';
import CartContext from '../../context/cart';
import { MdDelete } from 'react-icons/md';
import { Container, StoreItem, Info, Quantity, Subtotal } from './styles';
import imagen from '../../assets/images-store/cinturon.png';

export const Cart = () => {
    const { state } = useContext(CartContext);
    return (
            <Container>
                {state.cart.map((el) => (
                    <StoreItem key={el.productId}>
                        <img src={ imagen } alt="" />
                        <Info>
                            <p>{el.productName}</p>
                            <strong>${el.price}</strong>
                        </Info>
                        <Quantity readOnly type='number' value={ el.quantity } />
                        <Subtotal>
                            <p>${ el.quantity * el.price }</p>
                            <button type="button">
                                <MdDelete size={24} color='#2E2E2E' />
                            </button>
                        </Subtotal>
                    </StoreItem>
                ))}
            </Container>
    )
}