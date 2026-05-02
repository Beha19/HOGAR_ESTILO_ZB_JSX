import Marquee from "./components/Marquee"
import HeaderBuscador from "./components/HeaderBuscador"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Ventajas from "./components/Ventajas"
import Ofertas from "./components/Ofertas"

import "./styles/Estilos.css";

function App() {
    return(
        <div>
            <Marquee/>
            <HeaderBuscador/>
            <Navbar/>
            <Banner/>
            <Ventajas/>
            <Ofertas/>
        </div>    
    );
}

export default App