import { Routing } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/global'

export const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
}