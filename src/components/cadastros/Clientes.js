import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Clientes() {

    const [client_name, setClientName] = useState("");
    const [client_address, setClientAddress] = useState("");
    const [client_email, setClientEmail] = useState("");
    const [client_celnumber, setClientCelNumber] = useState("");
    const [client_name_rem, setClientNameRemove] = useState("");

    // ---------------CADASTRAR---------------

    const client_cadastro = {
        "nome" : client_name,
        "endereco" : client_address,
        "email" : client_email,
        "celular" : client_celnumber
    };
    
    const client_cadastro_json = JSON.stringify(client_cadastro, null, 4);

    const options_cadastro = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin",
        },
        body: client_cadastro_json
    }

    function CadastraCliente() {
        fetch('http://localhost:5000/cliente', options_cadastro)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    // ---------------REMOVER----------------
    
    const client_remover = {
        "nome" : client_name_rem
    }

    const client_remover_json = JSON.stringify(client_remover, null, 4);

    const options_remover = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Vary": "Origin",
        },
        body: client_remover_json
    }

    function RemoveCliente() {
        fetch('http://localhost:5000/cliente', options_remover)
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
                    
                    <div className={styles.cadastroForm}>
                        <label htmlFor="client_nome_rem">Nome </label>
                                <input
                                    type="text"
                                    id="client_nome_rem"
                                    name="client_nome_rem"
                                    placeholder="Digite o nome para remover"
                                    onChange={(event) => setClientNameRemove(event.target.value)} />
                        <div className={styles.cadastroBotao}>
                            <input 
                                type="button" 
                                value="Remover" 
                                onClick={RemoveCliente}
                            />
                        </div>
                    </div>
                </form>
                
            </div>
        </section>
    )
};

export default Clientes;