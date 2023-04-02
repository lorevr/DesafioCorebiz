import { Container, NewsletterContain } from "./styles";

const Newsletter = () => {
    return (
        <NewsletterContain>
            <Container>
                <div>¡Únete a nuestras novedades y promociones!</div>
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <button type="submit"></button>
                </form>
            </Container>
        </NewsletterContain>
    );
}

export default Newsletter;