import Wsp from "../assets/Wsp2.png"
import Fb from "../assets/Fb2.png"
import TikTok from "../assets/TikTok2.png"
import Insta from "../assets/Insta2.png"

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
                <a href="https://wa.me/51928025303" target="_blank">
                    <img src={Wsp} alt="Whatsaap"></img>
                </a>
                <a href="https://www.facebook.com/share/1BLAzR6YT8/" target="_blank">
                    <img src={Fb} alt="Facebook"></img>
                 </a>
                <a href="" target="_blank">
                    <img src={TikTok} alt="Tik Tok"></img>
                </a>
                <a href="https://www.instagram.com/lourdeszea38?igsh=eW9kdW1reDRjbXNr" target="_blank">
                    <img src={Insta} alt="Instagram"></img>
                </a>
            </div>
        </section>
    )
}

export default Navbar;