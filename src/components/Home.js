import { Link } from 'react-router-dom'

import styles from './css/Home.module.css';
import seguro1 from '../img/seguro1.svg';

function Home() {

    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo(a) ao <span>Thiago Seguros</span></h1>
            <p>Faça sua ordem de serviço agora mesmo.</p>
            <span className={styles.solicitar_servico}><Link to="/ordemservico">Solicitar serviço</Link></span>
            <img src={seguro1} alt="Seguro" />
        </section>
    )
}

export default Home;