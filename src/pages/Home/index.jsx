import React, { useState, useEffect, useContext } from 'react';
import { Container, List, Unit } from "./styles";
import CartContext from '../../context/cart';
import api from "../../services/api";
import imageStore from '../../assets/images-store/cinturon.png'
import { SaveLocalStorage } from '../../components/Store/SaveStore';


export const Home = () => {

    const [storeList, setStoreList] = useState([]);
    const {state, setState} = useContext(CartContext);

    useEffect(() => {
        async function getStoreList() {
            const { data } = await api.get('/store');
            setStoreList(data);
        }
        getStoreList();
    }, []);

    const handleAddToCart = ( product ) => {
        const copyCart = [...state.cart];
        const storeIndex = copyCart.findIndex((el) => el.productId === product.productId );
        if( storeIndex >= 0 ){
            copyCart[storeIndex].quantity += 1;
            SaveLocalStorage(copyCart);
        }
        else {
            copyCart.push({ ...product, quantity: 1 });
            SaveLocalStorage(copyCart);
        }
        
        setState({
            cart: copyCart,
        });

    }

    return (
            <Container>
                <List>
                    {storeList.map((el) => (
                        <Unit key={el.productId}>
                            <img src={imageStore} alt="Product" />
                            <p className="product-title">{el.productName}</p>
                            <span className="stars-calificacion">⭐⭐⭐</span>
                            <p className="descuento">de ${el.listPrice}</p>
                            <strong className="precio font-strong">por ${el.price}</strong>
                            <p className='enPagos'>o en {el.stars} pagos de ${(el.price / el.stars).toFixed(2)}</p>
                            <button type="button" onClick={ () => handleAddToCart( el ) }>Comprar</button>
                        </Unit>
                    ))}
                </List>
            </Container>
    )

};