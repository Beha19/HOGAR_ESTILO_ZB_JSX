function HeaderBuscador(){
    return(
        <section id="Logo_Header">
            <div className="Logo1">
                <img src="/HOGAR_ESTILO_ZB_JSX/src/assets/Logo3.png" alt="Logo Hogar & Estilo ZB"></img>
            </div>
            <div className="Barra_Busquedad">
                <div className="Buscador">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Buscar productos ........"></input>
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