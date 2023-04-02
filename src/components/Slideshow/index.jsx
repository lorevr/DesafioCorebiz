import { CarouselContainer, SlideshowContainer } from "./styles";
import ola1 from '../../assets/images/slideshow/ola1.png';
import ola2 from '../../assets/images/slideshow/ola2.png';
import ola3 from '../../assets/images/slideshow/ola3.png';
import ola4 from '../../assets/images/slideshow/ola4.png';
import cobro1 from '../../assets/images/slideshow/imagenCobro.png';
import cobro2 from '../../assets/images/slideshow/imagenCobro2.jpg';
import cobro3 from '../../assets/images/slideshow/imagenCobro3.png';

const Slideshow = () => {
    return (
        <SlideshowContainer>
            <CarouselContainer>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="imagenSlide w-100">
                                <img src={ola1} className="d-block imgSlide1" alt="ola" />
                                <img src={cobro1} className="d-block w-100 imgSlide2" alt="forma pago" />
                            </div>
                            <div className="carousel-caption etiquetas-carousel-caption">
                                <h5>¡Hola! ¿Qué es lo que buscas?</h5>
                                <p>Crear o migrar tu comercio electrónico?</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="imagenSlide  w-100">
                                <img src={ola2} className="d-block imgSlide1" alt="ola" />
                                <img src={cobro2} className="d-block w-100 imgSlide2" alt="forma de pago" />
                            </div>
                            <div className="carousel-caption etiquetas-carousel-caption">
                                <h5>¡Hola! ¿Qué es lo que buscas?</h5>
                                <p>Crear o migrar tu comercio electrónico?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="imagenSlide  w-100">
                                <img src={ola3} className="d-block imgSlide1" alt="ola" />
                                <img src={cobro3} className="d-block w-100 imgSlide2" alt="forma de pago" />
                            </div>
                            <div className="carousel-caption etiquetas-carousel-caption">
                                <h5>¡Hola! ¿Qué es lo que buscas?</h5>
                                <p>Crear o migrar tu comercio electrónico?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="imagenSlide  w-100">
                                <img src={ola4} className="d-block imgSlide1" alt="ola" />
                                <img src={cobro2} className="d-block w-100 imgSlide2" alt="forma de pago" />
                            </div>
                            <div className="carousel-caption etiquetas-carousel-caption">
                                <h5>¡Hola! ¿Qué es lo que buscas?</h5>
                                <p>Crear o migrar tu comercio electrónico?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselContainer>
        </SlideshowContainer>
    );
}

export default Slideshow;