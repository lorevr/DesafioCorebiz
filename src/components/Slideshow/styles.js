import styled from 'styled-components';

export const SlideshowContainer = styled.header`
    max-width: 100vw;
    `;

export const CarouselContainer = styled.div`

    .imgSlide1 {
        width: 100vw;
        max-height: 300px;
        z-index: 1;
    }

    .imgSlide2 {
        position:absolute;
        height:100%;
        width: 60vw;
        max-width: 60vw;
        top: 0;
        right: 0;
        z-index: -1;
    } 
    
    .etiquetas-carousel-caption{
        left: 20px;
        max-width: 803px;
        font-family: 'Raleway', sans-serif;
        text-align: left;
        width: 100vw;
        margin: auto;
        padding: 0;
        padding-top: 1.25rem;
        padding-bottom: 3.25rem;
    }
        
    p {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 1.2;
        font-weight: bold;
        width: 50%;
    }

    @media only screen and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);

        h5 {
            text-align: center;
            margin-bottom: 10px;

        }

        p {
            margin: auto;
            font-size: 1.3rem;
            line-height: 1.2;
            text-align: center;
        }

        img{
            filter: brightness(30%);  
        } 

        .etiquetas-carousel-caption{
            left: 0;
            padding-bottom: 2rem; 
        }
    }
   
`;