import styled from 'styled-components';

export const NewsletterContain = styled.div`
    background-color: #D8D8D8;
    padding: 20px;
    font-family: 'Raleway', sans-serif;
`;

export const Container = styled.div`
    margin: auto;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 

    form {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    h5 {
        font-weight: 700;
        font-size: 1.2rem;
    }

    input {
        border: none;
        font-size: 0.9rem;
    }

    .formButton {
        height: 32px;
        padding: 0 10px;
        border: none;
    }

    p {
        color: #DF0101;
        font-size: 0.95rem;
        font-weight: bold;
        margin: 0;
    }

    @media only screen and (max-width: 520px) {
        height:20vh;
        text-align: center;
        width: 70%;

        form {
            flex-direction: column;
            gap: 7px;
            width: 90%;
        }

    }
`;
