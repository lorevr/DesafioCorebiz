import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    margin: 1rem;

`;

export const LinkMenu = styled.div`
    display: none;

    @media only screen and (max-width: 598px) {
        display: block;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 958px;
    img {
        width: 100px;
        height: 30px;
    }

    @media only screen and (max-width: 598px) {
        display: grid;
        grid-template-columns: 1fr 4fr 2fr;
        grid-template-rows: 1fr 1fr;
        margin: auto;
        width: 90%;

        .linkLogo {
            text-align: center;
        }

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

    @media only screen and (max-width: 598px) {
        grid-column: 1 / span 3;
        grid-row: 2;
        width: 90%;
        align-self: center;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    div {
        font-size: 0.7rem;
        text-align: left;
    } 

    @media only screen and (max-width: 598px) {
        display: none;
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

    @media only screen and (max-width: 598px) {
        justify-content: flex-end;
    }
`;

