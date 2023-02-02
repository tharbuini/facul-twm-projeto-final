import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Produtos() {

    const [product_name, setProductName] = useState("");
    const [product_client_name, setProductClientName] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_id, setProductId] = useState("");
    const [product_category, setProductCategory] = useState("");
    const [product_id_rem, setProductIDRemove] = useState("");

    // ---------------CADASTRAR---------------

    const product_cadastro = {
        "nome" : product_name,
        "nome-cliente": product_client_name,
        "descricao": product_description,
        "id" : product_id,
        "categoria" : product_category
    };
    
    const product_cadastro_json = JSON.stringify(product_cadastro, null, 4);

    const options_cadastro = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin",
        },
        body: product_cadastro_json
    }

    function CadastraProduto() {
        fetch('http://localhost:5000/produto', options_cadastro)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    // ---------------REMOVER----------------
    
    const product_remover = {
        "id" : product_id_rem
    }

    const product_remover_json = JSON.stringify(product_remover, null, 4);

    const options_remover = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Vary": "Origin",
        },
        body: product_remover_json
    }

    function RemoveProduto() {
        fetch('http://localhost:5000/produto', options_remover)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.cadastroContainer}>
                <h1>Cadastro de Produtos</h1>
                <form>
                    <div className={styles.cadastroForm}>
                        <div>
                            <label htmlFor="product_name">Nome do Produto </label>
                            <input
                                type="text"
                                id="product_name"
                                name="product_name"
                                placeholder="Digite o nome do produto"
                                autocomplete="off"
                                onChange={(event) => setProductName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_client_name">Nome do Cliente Solicitante </label>
                            <input
                                type="text"
                                id="product_client_name"
                                name="product_client_name"
                                placeholder="Digite o nome do cliente"
                                autocomplete="off"
                                onChange={(event) => setProductClientName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_description">Descrição do Produto </label>
                            <input
                                type="text"
                                id="product_description"
                                name="product_description"
                                placeholder="Digite a descrição do produto"
                                autocomplete="off"
                                onChange={(event) => setProductDescription(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_id">ID do Produto </label>
                            <input
                                type="text"
                                id="product_id"
                                name="product_id"
                                placeholder="Digite o ID do produto"
                                autocomplete="off"
                                onChange={(event) => setProductId(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_category">Categoria </label>
                            <select name="product_category" id="product_category" onChange={(event) => setProductCategory(event.target.value)}>
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
                        <input type="button" value="Cadastrar" onClick={CadastraProduto}/>
                    </div>

                    <div className={styles.cadastroForm}>
                        <label htmlFor="product_id_rem">ID do Produto </label>
                                <input
                                    type="text"
                                    id="product_id_rem"
                                    name="product_id_rem"
                                    placeholder="Digite o ID para remover"
                                    autocomplete="off"
                                    onChange={(event) => setProductIDRemove(event.target.value)} />
                        <div className={styles.cadastroBotao}>
                            <input 
                                type="button" 
                                value="Remover" 
                                onClick={RemoveProduto}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Produtos;