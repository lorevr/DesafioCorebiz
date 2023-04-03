import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    margin-top: 55px;
    max-width: 958px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const List = styled.ul`
    max-width: 958px;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media only screen and (max-width: 758px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 370px) {
        grid-template-columns: 1fr;
    }
`;

export const Unit = styled.li`
    background-color: #FAFAFA;
    display: flex;
    font-weight: 400;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
        max-width: 170px;
        padding: 10px 0;
    }

    p {
        font-size: 0.9rem;
    }

    .product-title {
        text-transform: uppercase;
    }

    .font-strong {
        font-weight: 700;
        font-size: 1.2rem;
    }
    
    .stars-calificacion {
        font-size: 0.8rem;
    }

    .descuento {
        text-decoration:line-through;
    }

    .enPagos {
        font-size: 0.7rem;
    }

    button {
        background-color: #071418;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.8rem;
        border: 0;
        border-radius: 5px;
        padding: 8px 35px;
        margin-bottom: 10px;
    }

`;
