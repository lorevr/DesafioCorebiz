import { Container, Ubication, ContactButtons, Logos, FooterContain } from "./styles";
import logoCorebiz from '../../assets/images/footer/corebiz.png';
import logoVtex from '../../assets/images/footer/vtex.png';
import { MdEmail } from "react-icons/md";
import { AiTwotoneCustomerService } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterContain>
            <Container>
                <Ubication>
                    <p className="ubication-title">Ubicación</p>
                    <p>_________</p>
                    <p>Avenida Andrómeda, 2000. Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </Ubication>
                <ContactButtons>
                    <button type="button">
                            <MdEmail size={17} color='#000' />
                        <span>Contáctanos</span>
                    </button>
                    <button type="button">
                            <AiTwotoneCustomerService size={17} color='#000' />
                        <span>Habla con un consultor</span>
                    </button>
                </ContactButtons>
                <Logos>
                    <div>
                        <p>Desarrollado por</p>
                        <img src={logoCorebiz} alt="Logo Corebiz" />
                    </div>
                    <div>
                        <p>Powered by</p>
                        <img src={logoVtex} alt="Logo VTEX" />
                    </div>
                </Logos>
            </Container>
        </FooterContain>
    );
}

export default Footer;