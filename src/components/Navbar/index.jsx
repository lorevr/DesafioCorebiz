import React, { useContext } from 'react';
import CartContext from '../../context/cart';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import { Cart, Container, HeaderContainer, LoginContainer, SearchContainer } from './styles';

export const Navbar = () => {
    const { state } = useContext(CartContext);

    const totalQuantity = state.cart.reduce(
        ( acc, product ) => acc + product.quantity, 0,
    );

    return(
        <Container>
            <HeaderContainer>
                <Link to='/'>
                    <img src={ logo } alt='Logo' />
                </Link>
                <SearchContainer>
                    <input 
                        className='form-control inputBuscar'
                        placeholder='¿Qué estás buscando'
                    />
                    <button className='btn btn-success'>
                        <BiSearchAlt2 size={ 17 } color='#000' />
                    </button>
                </SearchContainer>
                <LoginContainer>
                    <AiOutlineUser size={ 20 } />
                    <div> Mi Cuenta </div>
                </LoginContainer>
                <Link to='/cart'>
                    <Cart>
                        <TiShoppingCart size={ 25 } color='#000' />
                        <span>{ totalQuantity }</span>
                    </Cart>
                </Link>
            </HeaderContainer>
        </Container>
    );
}