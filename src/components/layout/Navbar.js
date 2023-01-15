import { Link } from 'react-router-dom'
import React from "react"

import styles from '../css/Navbar.module.css';
import logo from '../../img/logo.png';

import Container from './Container.js';

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="Seguro" />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/clientes">Clientes</Link></li>
                <li className={styles.item}><Link to="/produtos">Produtos</Link></li>
                <li className={styles.item}><Link to="/tecnicos">Técnicos</Link></li>
                <li className={styles.item}><Link to="/tiposservico">Tipos de Serviço</Link></li>
                <li className={styles.item}><Link to="/ordemservico">Ordem de Serviço</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;