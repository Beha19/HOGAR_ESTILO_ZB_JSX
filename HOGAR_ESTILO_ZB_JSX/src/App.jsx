import Marquee from "./components/Marquee"
import HeaderBuscador from "./components/HeaderBuscador"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Ventajas from "./components/Ventajas"
import Ofertas from "./components/Ofertas"
import ReelFb from "./components/ReelsFb"

import "./styles/estilos.css";

function App() {
    return(
        <div>
            <Marquee/>
            <HeaderBuscador/>
            <Navbar/>
            <Banner/>
            <Ventajas/>
            <Ofertas/>
            <ReelFb/>
        </div>    
    );
}

export default App;