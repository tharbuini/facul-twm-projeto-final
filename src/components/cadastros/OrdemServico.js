import styles from '../css/Solicita.module.css'
import { useState } from 'react';

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
                                <label htmlFor="order_category">Categoria do Serviço </label>
                                <select name="order_category" id="order_category" required>
                                    <option value="" selected disabled hidden>Escolha a categoria</option>
                                    <option value="joias">Joias</option>
                                    <option value="veiculos">Veículos</option>
                                    <option value="vida">Vida</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.solicitaBotao}>
                            <input type="submit" value="Cadastrar" />
                        </div>
                </form>    
            </div>
            
            
        </section>
    )
};

export default OrdemServico;