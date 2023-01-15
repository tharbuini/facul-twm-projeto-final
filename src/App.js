import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

import Clientes from './components/cadastros/Clientes.js';
import Produtos from './components/cadastros/Produtos.js';
import Tecnicos from './components/cadastros/Tecnicos.js';
import OrdemServico from './components/cadastros/OrdemServico.js';
import TiposServico from './components/cadastros/TiposServico.js';

import Home from './components/Home.js'
import Footer from './components/layout/Footer.js';
import Navbar from './components/layout/Navbar.js';
// import Container from './components/layout/Container.js';
import { Container } from "react-bootstrap";

function App() {
    return (
        <div>
            <Router>
                <Navbar />

                <Routes> 
                    {/* <Container> */}
                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/Clientes" element={<Clientes />} />

                    <Route exact path="/produtos" element={<Produtos />} />

                    <Route exact path="/tecnicos" element={<Tecnicos />} />

                    <Route exact path="/tiposservico" element={<TiposServico />} />

                    <Route exact path="/ordemservico" element={<OrdemServico />} />
                    {/* </Container> */}
                </Routes>

                <Footer />
            </Router>

            {/* <Clientes />
                <Produtos />
                <Tecnicos />
                <TiposServico /> */}

                
        </div>
    );
}

export default App;
