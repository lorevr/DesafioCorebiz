import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import { Cart, Container, HeaderContainer, LoginContainer, SearchContainer } from './styles';

export const Navbar = () => {
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
                        <span>0</span>
                    </Cart>
                </Link>
            </HeaderContainer>
        </Container>
    )
}