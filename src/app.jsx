import { Routing } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/global';
import { Navbar } from "./components/Navbar";


export const App = () => {
    return(
        <>
            <BrowserRouter>
            <Navbar />
                <Routing />
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
}