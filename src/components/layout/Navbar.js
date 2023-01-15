import { Link } from 'react-router-dom'
import React from "react"

function Navbar() {

    return (
        <div className='styles.navbar'>
            <React.Fragment>
            <h1>Projeto - Seguro</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Clientes">Clientes</Link>
                </li>
                <li>
                    <Link to="/Produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/Tecnicos">Técnicos</Link>
                </li>
                <li>
                    <Link to="/TiposServico">Tipos de Serviço</Link>
                </li>
                <li>
                    <Link to="/OrdemServico">Ordem de Serviços</Link>
                </li>
            </ul>
            </React.Fragment>
        </div>
    )
}

export default Navbar;