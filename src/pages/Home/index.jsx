import React, { useState, useEffect, Fragment } from 'react';
import Slideshow from "../../components/Slideshow";
import { Container, List, Unit } from "./styles";
import api from "../../services/api";
import imageStore from '../../assets/images-store/cinturon.png'
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';


export const Home = () => {

    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        async function getStoreList() {
            const { data } = await api.get('/store');
            setStoreList(data);
        }
        getStoreList();
    }, []);

    return(
        <>
            <Slideshow />
            <Container>
                <List>
                    {storeList.map( (el) => (
                        <Unit key={ el.productId }>
                            <img src={ imageStore } alt="Product" />
                            <p className="product-title">{ el.productName }</p>
                            <span className="stars-calificacion">⭐⭐⭐</span>
                            <p className="descuento">de ${ el.listPrice }</p>
                            <strong className="precio font-strong">por ${ el.price }</strong>
                            <p className='enPagos'>o en { el.stars } pagos de ${ (el.price / el.stars).toFixed(2) }</p>
                            <button type="button">Comprar</button>
                        </Unit>   
                    ))}
                </List>
            </Container>
            <Newsletter />
            <Footer />
        </>
    )
        
};