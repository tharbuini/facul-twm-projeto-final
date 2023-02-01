import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Clientes() {

    const [client_name, setClientName] = useState("");
    const [client_address, setClientAddress] = useState("");
    const [client_email, setClientEmail] = useState("");
    const [client_celnumber, setClientCelNumber] = useState("");

    const client = {
        "nome" : client_name,
        "endereco" : client_address,
        "email" : client_email,
        "celular" : client_celnumber
    };
    
    const client_json = JSON.stringify(client, null, 4);

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
        body: client_json
      }


    function CadastraCliente() {
        fetch('http://localhost:5000/cliente', options)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.cadastroContainer}>
                <h1>Cadastro de Clientes</h1>
                <form>
                    <div className={styles.cadastroForm}>
                        <div>
                            <label htmlFor="client_name">Nome </label>
                            <input
                                type="text"
                                id="client_name"
                                name="client_name"
                                placeholder="Digite o nome completo do cliente"
                                onChange={(event) => setClientName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="client_address">Endereço </label>
                            <input
                                type="text"
                                id="client_endereco"
                                name="client_endereco"
                                placeholder="Digite seu endereço"
                                onChange={(event) => setClientAddress(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="client_email">Email </label>
                            <input
                                type="text"
                                id="client_email"
                                name="client_email"
                                placeholder="Digite seu melhor email"
                                onChange={(event) => setClientEmail(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="client_celnumber">Celular </label>
                            <input
                                type="text"
                                id="client_celnumber"
                                name="client_celnumber"
                                placeholder="Digite seu número de celular"
                                onChange={(event) => setClientCelNumber(event.target.value)} />
                        </div>
                    </div>

                    <div className={styles.cadastroBotao}>
                        <input 
                            type="button" 
                            value="Cadastrar" 
                            onClick={CadastraCliente}
                        />
                    </div>
                </form>
                
            </div>
        </section>
    )
};

export default Clientes;