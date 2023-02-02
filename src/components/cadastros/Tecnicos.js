import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Tecnicos() {

    const [technical_name, setTechnicalName] = useState("");
    const [technical_email, setTechnicalEmail] = useState("");
    const [technical_celnumber, setTechnicalCelNumber] = useState("");
    const [technical_area, setTechnicalArea] = useState("");
    const [technical_name_rem, setTechnicalNameRemove] = useState("");

    // ---------------CADASTRAR---------------

    const technical_cadastro = {
        "nome" : technical_name,
        "email" : technical_email,
        "celular" : technical_celnumber,
        "area-servico" : technical_area
    };
    
    const technical_cadastro_json = JSON.stringify(technical_cadastro, null, 4);

    const options_cadastro = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin",
            "originWhitelist" : "*"
        },
        body: technical_cadastro_json
      }


    function CadastraTecnico() {
        fetch('http://localhost:5000/tecnico', options_cadastro)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    // ---------------REMOVER----------------
    
    const technical_remover = {
        "nome" : technical_name_rem
    }

    const technical_remover_json = JSON.stringify(technical_remover, null, 4);

    const options_remover = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Vary": "Origin",
        },
        body: technical_remover_json
    }

    function RemoveTecnico() {
        fetch('http://localhost:5000/tecnico', options_remover)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

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
                                autocomplete="off"
                                onChange={(event) => setTechnicalName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_email">Email </label>
                            <input
                                type="text"
                                id="technical_email"
                                name="technical_email"
                                placeholder="Digite o email do técnico"
                                autocomplete="off"
                                onChange={(event) => setTechnicalEmail(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_celnumber">Celular </label>
                            <input
                                type="text"
                                id="technical_celnumber"
                                name="technical_celnumber"
                                placeholder="Digite seu número de celular"
                                autocomplete="off"
                                onChange={(event) => setTechnicalCelNumber(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="technical_area">Área de Serviço </label>
                            <select 
                                name="technical_area" 
                                id="technical_area" 
                                onChange={(event) => setTechnicalArea(event.target.value)}>
                                <option value="" selected disabled hidden>Escolha a categoria</option>
                                <option value="veiculos">Veículos</option>
                                <option value="equipamentos">Equipamentos</option>
                                <option value="residencial">Moradia</option>
                                <option value="viagem">Viagem</option>
                                <option value="saude">Saúde</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.cadastroBotao}>
                        <input type="button" value="Cadastrar" onClick={CadastraTecnico} />
                    </div>

                    <div className={styles.cadastroForm}>
                        <label htmlFor="tecnico_nome_rem">Nome do Técnico </label>
                                <input
                                    type="text"
                                    id="tecnico_nome_rem"
                                    name="tecnico_nome_rem"
                                    placeholder="Digite o nome para remover"
                                    autocomplete="off"
                                    onChange={(event) => setTechnicalNameRemove(event.target.value)} />
                        <div className={styles.cadastroBotao}>
                            <input 
                                type="button" 
                                value="Remover" 
                                onClick={RemoveTecnico}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Tecnicos;