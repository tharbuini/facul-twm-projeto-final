import './App.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import React from "react";

import Clientes from './components/cadastros/Clientes.js';
import Produtos from './components/cadastros/Produtos.js';
import Tecnicos from './components/cadastros/Tecnicos.js';
import OrdemServico from './components/cadastros/OrdemServico.js';
import TiposServico from './components/cadastros/TiposServico.js';

import Home from './components/Home.js'
import Footer from './components/layout/Footer';

function App() {
    return (
        <div>
            {/* <Navbar /> */}

            {/* <BrowserRouter>
                <Home />
            </BrowserRouter> */}

            <Clientes />
            <Produtos />
            <Tecnicos />
            <TiposServico />

            <Footer />

            {/* <Footer /> */}
        </div>
    );
}

export default App;
