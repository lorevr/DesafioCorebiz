import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    margin: 1rem;
    `;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 958px;
    img {
        width: 100px;
        height: 30px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1.5rem;
    border-bottom: solid #D8D8D8;
    width: 50%;
    input {
        font-size: 0.7rem;
        text-align: left;
        border: none;
        background-color: transparent;
        padding: 0;
    }
    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    div {
        font-size: 0.7rem;
        text-align: left;
    } 
`;
export const Cart = styled.div`
    display: flex;
    
    span {
        background-color: #DF0101;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        font-size: 0.7rem;
        color: #fff;
        margin-left: 0.4rem;
        text-align: center;
        line-height: 1.3;
    }
`;

