import { useState } from "react";
import axios from "axios";
import { Container, NewsletterContain } from "./styles";

const Newsletter = () => {

    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState();

    const request = () => {
        const config = {
            method: 'POST',
            url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
            data: email
        }

        axios(config)
            .then((res) => {
                setError(res.data.message);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
    }

    const submit = ( evt ) => {
        evt.preventDefault();
        if ( email ) {
            request();
        }
    }

    const handleChange = (evt) => {
        const valor = evt.target.value;
        const regexMail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if ( valor ) {
            if( regexMail.test(valor)){
                setEmail(valor);
                setError('');
            } else {
                setEmail('');
                setError('Por favor, ingrese un correo válido');
            }
        } else {
            setEmail('');
            setError('Introduce un correo');
        }
        
    }
    return (
        <NewsletterContain>
            <Container>
                <h5>¡Únete a nuestras novedades y promociones!</h5>
                <form id="newsletter" method="post" onSubmit={(e) => submit(e)} >
                    <input 
                        className="form-control-sm"
                        type="text" 
                        id="inputMailNewsletter" 
                        name="inputMailNewsletter"
                        placeholder="Ingresa tu nombre" 
                    />
                    <input 
                        className="form-control-sm "
                        type="email" 
                        id="inputNombreNewsletter" 
                        name="inputNombreNewsletter"
                        placeholder="Ingresa tu email"
                        onChange={(e) => handleChange(e)}
                    />
                    <button className="btn btn-dark formButton" type="submit">Suscribirme</button>
                </form>
                <p className="errorNewsletter">{ error }</p>
            </Container>
        </NewsletterContain>
    );
}

export default Newsletter;