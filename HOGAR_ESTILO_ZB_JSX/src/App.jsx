import Marquee from "./components/Marquee"
import HeaderBuscador from "./components/HeaderBuscador"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Tiempo from "./components/Tiempo"
import Ventajas from "./components/Ventajas"
import Ofertas from "./components/Ofertas"
import ReelFb from "./components/ReelsFb"
import Comentarios from "./components/Comentarios"
import Beneficios from "./components/Beneficios"
import Footer from "./components/Footer"

import "./styles/estilos.css";

function App() {
    return(
        <div>
            <Marquee/>
            <HeaderBuscador/>
            <Navbar/>
            <Banner/>
            <Tiempo/>
            <Ventajas/>
            <Ofertas/>
            <ReelFb/>
            <Comentarios/>
            <Beneficios/>
            <Footer/>
        </div>    
    );
}

export default App;