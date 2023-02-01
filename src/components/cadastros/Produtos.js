import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Produtos() {

    const [product_name, setProductName] = useState();
    const [product_id, setProductId] = useState();
    const [product_category, setProductCategory] = useState();

    const product = {
        "nome" : product_name,
        "id" : product_id,
        "categoria" : product_category
    };
    
    const product_json = JSON.stringify(product, null, 4);

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
        body: product_json
      }


    function CadastraProduto() {
        fetch('http://localhost:5000/produto', options)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    //CRIAR FUNCAO GET PARA SELECIONAR UM CLIENTE NO SELECT E ASSOCIAR ELE AO PRODUTO

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
                                onChange={(event) => setProductName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_id">ID do Produto </label>
                            <input
                                type="text"
                                id="product_id"
                                name="product_id"
                                placeholder="Digite o ID do produto"
                                onChange={(event) => setProductId(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="product_category">Categoria </label>
                            <select name="oproduct_category" id="product_category" onChange={(event) => setProductCategory(event.target.value)}>
                                <option value="" selected disabled hidden>Escolha a categoria</option>
                                <option value="joias">Joias</option>
                                <option value="veiculos">Veículos</option>
                                <option value="equipamentos">Equipamentos</option>
                                <option value="residencial">Residencial</option>
                            </select>
                            </div>
                    </div>

                    <div className={styles.cadastroBotao}>
                        <input type="button" value="Cadastrar" onClick={CadastraProduto}/>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Produtos;