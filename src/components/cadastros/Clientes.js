import styles from '../css/Cadastro.module.css'
import { useState, useEffect } from 'react';

function Clientes() {

    const [client_name, setClientName] = useState();
    const [client_address, setClientAddress] = useState();
    const [client_email, setClientEmail] = useState();
    const [client_celnumber, setClientCelNumber] = useState();

    const client = {
        "nome" : client_name,
        "endereco" : client_address,
        "email" : client_email,
        "celular" : client_celnumber
    };
    
    var data = new FormData();
    data.append("json", JSON.stringify( client ));
    

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
                            type="submit" 
                            value="Cadastrar" 
                            onClick={
                                useEffect(() => {
                                    fetch('/clientes', {method: "POST",
                                                        body: data}
                                    ).then(
                                        function(res)
                                        { 
                                            return res.json(); 
                                        }
                                    ).then(
                                        function(data)
                                        { 
                                            alert( data ) 
                                        }
                                    )
                                }, [])} 
                        />
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Clientes;