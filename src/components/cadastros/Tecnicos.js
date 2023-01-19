import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Tecnicos() {

    const [technical_name, setTechnicalName] = useState();
    const [technical_email, setTechnicalEmail] = useState();
    const [technical_celnumber, setTechnicalCelNumber] = useState();

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.cadastroContainer}>
                <h1>Cadastro de Técnicos</h1>
                <form>
                    <div className={styles.cadastroForm}>
                        <div>
                            <label htmlFor="technical_name">Nome </label>
                            <input
                                type="text"
                                id="technical_name"
                                name="technical_name"
                                placeholder="Digite o nome completo"
                                onChange={(event) => setTechnicalName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_email">Email </label>
                            <input
                                type="text"
                                id="technical_email"
                                name="technical_email"
                                placeholder="Digite o email do técnico"
                                onChange={(event) => setTechnicalEmail(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_celnumber">Celular </label>
                            <input
                                type="text"
                                id="technical_celnumber"
                                name="technical_celnumber"
                                placeholder="Digite seu número de celular"
                                onChange={(event) => setTechnicalCelNumber(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_area">Área de Serviço </label>
                            <select name="technical_area" id="technical_area">
                                <option value="" selected disabled hidden>Escolha a categoria</option>
                                <option value="joias">Joias</option>
                                <option value="veiculos">Veículos</option>
                                <option value="equipamentos">Equipamentos</option>
                                <option value="residencial">Residencial</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.cadastroBotao}>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Tecnicos;