import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function TiposServico() {

    const [service_name, setServiceName] = useState();
    const [service_id, setServiceId] = useState();

    const service = {
        "nome" : service_name,
        "id" : service_id
    };
    
    const service_json = JSON.stringify(service, null, 4);

    const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin",
            "originWhitelist" : "*"
        },
        body: service_json
      }


    function CadastraTipoServico() {
        fetch('http://localhost:5000/tecnico', options)
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
                </form>
            </div>
        </section>
    )
};

export default TiposServico;