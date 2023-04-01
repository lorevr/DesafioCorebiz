import styled from 'styled-components';

export const SlideshowContainer = styled.div`

.imgSlide1 {
    width: 100vw;
    max-height: 300px;
    z-index: 1;
}

.imgSlide2 {
    position:absolute;
    height:100%;
    max-width: 60vw;
    top: 0;
    right: 0;
    z-index: -1;
} 

.etiquetas-carousel-caption{
    margin: auto;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    max-width: 858px;
    margin: auto;
    padding-top: 1.25rem;
    padding-bottom: 3.25rem;
    left: 10px;
}
    
p {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: bold;
    width: 50%;
}
   
`;