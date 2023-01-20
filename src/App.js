import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

import Clientes from './components/cadastros/Clientes.js';
import Produtos from './components/cadastros/Produtos.js';
import Tecnicos from './components/cadastros/Tecnicos.js';
import OrdemServico from './components/cadastros/OrdemServico.js';
import TiposServico from './components/cadastros/TiposServico.js';

import Home from './components/Home.js'
import Cadastro from './components/Cadastro.js'
import Footer from './components/layout/Footer.js';
import Navbar from './components/layout/Navbar.js';

function App() {
    return (
        <div>
            <Router>
                <Navbar />

                <Routes> 
                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/cadastro" element={<Cadastro />} />

                    <Route exact path="/clientes" element={<Clientes />} />

                    <Route exact path="/produtos" element={<Produtos />} />

                    <Route exact path="/tecnicos" element={<Tecnicos />} />

                    <Route exact path="/tiposservico" element={<TiposServico />} />

                    <Route exact path="/ordemservico" element={<OrdemServico />} />
                </Routes>

                <Footer />
            </Router>  
        </div>
    );
}

export default App;
