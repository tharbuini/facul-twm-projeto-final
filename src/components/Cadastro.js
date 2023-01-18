import { Link } from 'react-router-dom'
import React from "react"

import styles from './css/Cadastro.module.css';

function Cadastro() {

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.cadastroContainer}>
                <h1>O que quer cadastrar?</h1>
                <ul className={styles.cadastroCategorias}>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/tecnicos">Técnicos</Link></li>
                    <li><Link to="/tiposservico">Tipos de Serviço</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Cadastro;