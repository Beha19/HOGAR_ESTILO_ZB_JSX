import Productos from "../assets/Economico.png"
import Importaciones from "../assets/Calidad.png"
import Articulos from "../assets/Nuevo.png"
import Envios from "../assets/Envios 2.png"

function Ventajas() {
    return(
        <section id="Ventajas">
            <div className="Ventaja1">
                <img src={Productos} alt="Economico"></img>
                <p>Productos<br/>muy económicos</p>
            </div>
            <div className="Ventaja2">
                <img src={Importaciones} alt="Calidad"></img>
                <p>Importaciones<br/>de buena calidad</p>
            </div>
            <div className="Ventaja3">
                <img src={Articulos} alt="New"></img>
                <p>Artículos<br/>novedosos</p>
            </div>
            <div className="Ventaja4">
                <img src={Envios} alt="Envio"></img>
                <p>Envíos<br/>rápidos y seguros</p>
            </div>
        </section>
    )
}

export default Ventajas