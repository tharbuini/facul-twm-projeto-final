import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function TiposServico() {

    const [service_name, setServiceName] = useState("");
    const [service_id, setServiceId] = useState("");
    const [service_id_rem, setServiceIDRemove] = useState("");
    
    // ---------------CADASTRAR---------------

    const service_cadastro = {
        "nome" : service_name,
        "id" : service_id
    };
    
    const service_cadastro_json = JSON.stringify(service_cadastro, null, 4);

    const options_cadastro = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin",
            "originWhitelist" : "*"
        },
        body: service_cadastro_json
      }


    function CadastraTipoServico() {
        fetch('http://localhost:5000/tipos-servico', options_cadastro)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    // ---------------REMOVER----------------
    
    const service_remover = {
        "nome" : service_id_rem
    }

    const service_remover_json = JSON.stringify(service_remover, null, 4);

    const options_remover = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Vary": "Origin",
        },
        body: service_remover_json
    }

    function RemoveServico() {
        fetch('http://localhost:5000/tipos-servico', options_remover)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.cadastroContainer}>
                <h1>Cadastro de Serviço</h1>
                <form>
                    <div className={styles.cadastroForm}>
                        <div>
                            <label htmlFor="service_name">Nome do Serviço </label>
                            <input
                                type="text"
                                id="service_name"
                                name="service_name"
                                placeholder="Digite o nome do serviço"
                                onChange={(event) => setServiceName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="service_id">ID do Serviço </label>
                            <input
                                type="text"
                                id="service_id"
                                name="service_id"
                                placeholder="Digite o ID do serviço"
                                onChange={(event) => setServiceId(event.target.value)} />
                        </div>
                    </div>

                    <div className={styles.cadastroBotao}>
                        <input type="button" value="Cadastrar" onClick={CadastraTipoServico}/>
                    </div>

                    <div className={styles.cadastroForm}>
                        <label htmlFor="service_id_rem">ID do Serviço </label>
                                <input
                                    type="text"
                                    id="service_id_rem"
                                    name="service_id_rem"
                                    placeholder="Digite o ID para remover"
                                    onChange={(event) => setServiceIDRemove(event.target.value)} />
                        <div className={styles.cadastroBotao}>
                            <input 
                                type="button" 
                                value="Remover" 
                                onClick={RemoveServico}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default TiposServico;