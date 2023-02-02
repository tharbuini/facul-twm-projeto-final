import styles from '../css/Solicita.module.css'
import { useState } from 'react';

function OrdemServico() {

    const [order_id, setOrderID] = useState("");
    const [order_description, setOrderDescription] = useState("");
    const [order_clientname, setOrderClientName] = useState("");
    const [order_productname, setOrderProduct] = useState("");
    const [order_service, setOrderService] = useState("");
    const [order_category, setOrderCategory] = useState("");
    const [order_id_rem, setOrderIDRemove] = useState("");

    // ---------------CADASTRAR----------------

    const order_cadastro = {
        "id" : order_id,
        "descricao" : order_description,
        "nome-cliente" : order_clientname,
        "nome-produto" : order_productname,
        "servico" : order_service,
        "categoria" : order_category,
    };
    
    const order_cadastro_json = JSON.stringify(order_cadastro, null, 4);

    const options_cadastro = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "http://localhost:5000",
            "Vary": "Origin"
        },
        body: order_cadastro_json
      }


    function CadastraOrdemServico() {
        fetch('http://localhost:5000/ordens-servico', options_cadastro)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    // ---------------REMOVER----------------
    
    const order_remover = {
        "id" : order_id_rem
    }

    const order_remover_json = JSON.stringify(order_remover, null, 4);

    const options_remover = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Vary": "Origin",
        },
        body: order_remover_json
    }

    function RemoveOrdem() {
        fetch('http://localhost:5000/ordens-servico', options_remover)
        .then((response) => response)
        .catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <section className={styles.ajusteContainer}>
            <div className={styles.solicitaContainer}>
                <h1>Solicitação de Serviço</h1>
                <form>
                    <div className={styles.solicitaForm}>
                        <div>
                            <label htmlFor="order_id">ID da Ordem </label>
                            <input
                                type="text"
                                id="order_id"
                                name="order_id"
                                placeholder="Digite sua solicitação"
                                onChange={(event) => setOrderID(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="order_description">Descrição </label>
                            <input
                                type="text"
                                id="order_description"
                                name="order_description"
                                placeholder="Digite sua solicitação"
                                onChange={(event) => setOrderDescription(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="order_clientname">Cliente </label>
                            <input
                                type="text"
                                id="order_clientname"
                                name="order_clientname"
                                placeholder="Digite o nome do cliente"
                                onChange={(event) => setOrderClientName(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="order_productname">Produto </label>
                            <input
                                type="text"
                                id="order_productname"
                                name="order_productname"
                                placeholder="Digite o nome do produto"
                                onChange={(event) => setOrderProduct(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="order_service">Serviço </label>
                            <input
                                type="text"
                                id="order_service"
                                name="order_service"
                                placeholder="Digite o nome do produto"
                                onChange={(event) => setOrderService(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="order_category">Categoria do Produto </label>
                            <select name="order_category" id="order_category" required onChange={(event) => setOrderCategory(event.target.value)}>
                                <option value="" selected disabled hidden>Escolha a categoria</option>
                                <option value="joias">Joias</option>
                                <option value="veiculos">Veículos</option>
                                <option value="equipamentos">Equipamentos</option>
                                <option value="residencial">Residencial</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.solicitaBotao}>
                        <input type="button" value="Cadastrar" onClick={CadastraOrdemServico}/>
                    </div>

                    <div className={styles.solicitaForm}>
                        <label htmlFor="order_id_rem">ID da Ordem de Serviço </label>
                                <input
                                    type="text"
                                    id="order_id_rem"
                                    name="order_id_rem"
                                    placeholder="Digite o ID para remover"
                                    onChange={(event) => setOrderIDRemove(event.target.value)} />
                        <div className={styles.solicitaBotao}>
                            <input 
                                type="button" 
                                value="Remover" 
                                onClick={RemoveOrdem}
                            />
                        </div>
                    </div>
                </form>    
            </div>
            
            
        </section>
    )
};

export default OrdemServico;