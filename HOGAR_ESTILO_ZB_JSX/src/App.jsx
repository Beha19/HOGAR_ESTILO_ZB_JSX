import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import FormasPago from "./pages/FormasPago"

import "./styles/estilos.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/formas-pago" element={<FormasPago />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App