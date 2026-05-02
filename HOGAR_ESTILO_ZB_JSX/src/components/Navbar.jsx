import Wsp from "../assets/Wsp 3.png"
import Fb from "../assets/Fb 1.png"
import TikTok from "../assets/Tik Tok 1.png"
import Insta from "../assets/Insta 2.png"

function Navbar() {
    return(
        <section id="Barra_Navegador">
            <nav>
                <ul className="Navegador">         
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Formas de Pago</a></li>
                </ul>
            </nav>
            <div className="Redes1">
                <a href="" target="_blank">
                    <img src={Wsp} alt="WhatsApp" />
                </a>
                <a href="" target="_blank">
                    <img src={Fb} alt="Facebook" />
                 </a>
                <a href="" target="_blank">
                    <img src={TikTok} alt="TikTok" />
                </a>
                <a href="" target="_blank">
                    <img src={Insta} alt="Instagram" />
                </a>
            </div>
        </section>
    )
}

export default Navbar;