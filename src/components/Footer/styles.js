import styled from 'styled-components';

export const FooterContain = styled.footer`
    background-color: #1C1C1C;
    padding: 20px;

    @media only screen and (max-width: 598px) {
        padding: 10px 20px;
    }
`;

export const Container = styled.header`
    max-width: 958px;
    margin: auto;
    height: 130px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    padding: 15px 0;

    .ubication-title {
        font-size: 0.9rem;
        line-height: 0.2; 
    }

    p {
        color: #fafafa;
        font-size: 0.6rem;
    }

    @media only screen and (max-width: 598px) {
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 2fr 1fr;
        height: 30vh;
        gap: 10px;
        width: 85%;
        padding: 0;
    }
`;

export const Ubication = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

export const ContactButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    button {
        background-color: #F2F2F2;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 0.5fr 3fr;
        align-items: center;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        padding: 8px;
        width: 80%;
        max-width: 245px;

    }

`;

export const Logos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    gap: 30px;

    p {
        margin-bottom: 5px;
    }

    img {
        width: 72px;
    }

    @media only screen and (max-width: 598px) {
        justify-content: space-around;
    }

`;