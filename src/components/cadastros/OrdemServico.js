import styles from '../css/Solicita.module.css'
// import { useState } from 'react';

function OrdemServico() {
    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.solicitaContainer}>
                <h1>Solicitação de Serviço</h1>
                <form>
                    <div className={styles.solicitaForm}>
                        <div>
                            <label htmlFor="order_description">Descrição </label>
                            <input
                                type="text"
                                id="order_description"
                                name="order_description"
                                placeholder="Digite sua solicitação"/>
                        </div>

                        <div>
                            <label htmlFor="order_clientname">Cliente </label>
                            <input
                                type="text"
                                id="order_clientname"
                                name="order_clientname"
                                placeholder="Digite o nome do cliente"/>
                        </div>

                        <div>
                            <label htmlFor="order_productname">Produto </label>
                            <input
                                type="text"
                                id="order_productname"
                                name="order_productname"
                                placeholder="Digite o nome do produto"/>
                        </div>

                        <div>
                            <label htmlFor="order_service">Serviço </label>
                            <input
                                type="text"
                                id="order_service"
                                name="order_service"
                                placeholder="Digite o nome do produto"/>
                        </div>

                        <div>
                            <label htmlFor="order_category">Categoria do Produto </label>
                            <select name="order_category" id="order_category" required>
                                <option value="" selected disabled hidden>Escolha a categoria</option>
                                <option value="joias">Joias</option>
                                <option value="veiculos">Veículos</option>
                                <option value="equipamentos">Equipamentos</option>
                                <option value="residencial">Residencial</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.solicitaBotao}>
                        <input type="submit" value="Solicitar" />
                    </div>
                </form>    
            </div>
            
            
        </section>
    )
};

export default OrdemServico;