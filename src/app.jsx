import { Routing } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/global';
import { Navbar } from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/cart";

export const App = () => {
    return(
        <CartContextProvider>
            <BrowserRouter>
            <Navbar />
            <Slideshow />
                <Routing />
            <Footer />
            </BrowserRouter>
            <GlobalStyle />
        </CartContextProvider>
    );
}