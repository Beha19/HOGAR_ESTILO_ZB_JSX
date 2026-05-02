import { Link } from "react-router-dom"
import Wsp from "../assets/Wsp 3.png"
import Fb from "../assets/Fb 1.png"
import TikTok from "../assets/Tik Tok1.png"
import Insta from "../assets/Insta 2.png"

function Navbar() {
    return(
        <section id="Barra_Navegador">
            <div className="Navegador">
                <nav>
                    <Link to="">Inicio</Link>
                    <Link to="">Nosotros</Link>
                    <Link to="">Tienda</Link>
                    <Link to="">Contacto</Link>
                    <Link to="">Formas de Pago</Link>
                </nav>
            </div>
            <div className="Redes_Header">
                <nav>
                    <img src={Wsp} alt="WhastApp"></img>
                    <img src={Fb} alt="Facebook"></img>
                    <img src={TikTok} alt="Tik Tok"></img>
                    <img src={Inta} alt="Instagram"></img>
                </nav>
            </div>
        </section>
    )
}

export default Navbar