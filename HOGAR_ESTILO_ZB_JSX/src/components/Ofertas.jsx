import { useState, useEffect } from "react"
import Cojines1 from "../assets/productos/Cojines de peluches angora entero_1.jpg"
import Cojines2 from "../assets/productos/Cojines con pompones_3.jpg"
import Cojines3 from "../assets/productos/Cojín de peluche pelo corto_4.jpg"
import Alfombra1 from "../assets/productos/tapetesecadorapido2.jpg"
import Alfombra2 from "../assets/productos/Alfombras de cocina 1 ( 2 piezas).jpg"
import Alfombra3 from "../assets/productos/Toallitas humedas1.jpg"

const cardsOfertas = [
  [ { img: Cojines1, nombre: "Cojines de Peluches Angora", precio: "S/. 25.00" },
    { img: Cojines2, nombre: "Cojines con Pompones", precio: "S/. 22.00" },
    { img: Cojines3, nombre: "Cojín de Peluche Pelo Corto", precio: "S/. 18.00" },
  ],
  [ { img: Alfombra1, nombre: "Tapetes Secado Rápido", precio: "S/. 15.00" },
    { img: Alfombra2, nombre: "Alfombras de Cocina", precio: "S/. 15.00" },
    { img: Alfombra3, nombre: "Toallitas Húmedas", precio: "S/. 10.00" },
  ]
]

function Ofertas() {
  const [i, setI] = useState(0)
  const anterior = () => setActual((prev) => (prev - 1 + cardsOfertas.length) % cardsOfertas.length)
  const siguiente = () => setActual((prev) => (prev + 1) % cardsOfertas.length)
  useEffect(() =>{
    const intervalo= setInterval(() =>{
        setI((prev) => (prev+1)%cardsOfertas.length)
    },3000)
    return() => clearInterval(intervalo)
  }, [])

  return (
    <section id="ProductosOfertas">
        <h2>Productos en Oferta</h2>
        <div className="Carrusel_Ofertas">
            <button onClick={anterior}>{"<"}</button>
            <div className="Cards">
                {cardsOfertas[i].map((producto, i) => (
                <div className="Card_Ofer" key={i}>
                    <img src={producto.img} alt={producto.nombre}></img>
                    <h5>{producto.nombre}</h5>
                    <p className="precio">{producto.precio}</p>
                    <button>Comprar</button>
                </div>))}
            </div>
            <button onClick={siguiente}>{">"}</button>
        </div>
    </section>
  )
}

export default Ofertas;