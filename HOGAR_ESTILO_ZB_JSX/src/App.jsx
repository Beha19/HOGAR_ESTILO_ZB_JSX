import Marquee from "./components/Marquee"
import HeaderBuscador from "./components/HeaderBuscador"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Ventajas from "./components/Ventajas"

import "./styles/Estilos.css";

function App() {
    return(
        <div>
            <Marquee/>
            <HeaderBuscador/>
            <Navbar/>
            <Banner/>
            <Ventajas/>
        </div>    
    );
}

export default App