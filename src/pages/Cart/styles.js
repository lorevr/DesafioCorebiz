import styled from "styled-components";

export const Container = styled.ul`
    background-color: #F2F2F2;
    width: 100%;
    max-width: 958px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    padding: 36px 44px;
    align-items: center;
    margin: 20px auto; 
`;

export const StoreItem = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 10px 0;
    border-bottom: 1px solid #666;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100px;
    }

    @media only screen and (max-width: 550px) {
        padding: 10px;

        img {
            display: none;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
        font-weight: 700;
    }

    strong {
        margin-top: 10px;
        font-size: 1rem;
    }
`;

export const Quantity = styled.input`
    font-size: 1rem;
    color: #666;
    padding: 6px;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    text-align: center;
`;

export const Subtotal = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    align-items: right;

    p {
        margin-right: 30px;
    }

    button {
        border: none;
    }
`;

