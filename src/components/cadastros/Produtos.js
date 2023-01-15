import styles from '../css/Cadastro.module.css'
import { useState } from 'react';

function Produtos() {

    const [product_name, setProductName] = useState();
    const [product_id, setProductId] = useState();
    const [product_supply, setProductSupply] = useState();

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
                            <label htmlFor="product_supply">Estoque </label>
                            <input
                                type="text"
                                id="product_supply"
                                name="product_supply"
                                placeholder="Digite a quantidade em estoque"
                                onChange={(event) => setProductSupply(event.target.value)} />
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

export default Produtos;