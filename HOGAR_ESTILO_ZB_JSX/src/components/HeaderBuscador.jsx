import Logo from "../assets/Logo3.png"

function HeaderBuscador(){
    return(
        <section id="Logo_Header">
            <div className="Logo1">
                <img src={Logo} alt="Logo Hogar & Estilo ZB"></img>
            </div>
            <div className="Barra_Busquedad">
                <div className="input-group Buscador">
                    <input type="text" className="form-control" placeholder="Buscar productos ........"/>
                    <span className="input-group-text">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div className="Envios_Compras">
                <div className="Envios_1">
                    <i className="bi bi-truck"></i>
                </div>
                <div className="Compras_1">
                    <i className="bi bi-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default HeaderBuscador