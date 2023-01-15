import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Clientes from './cadastros/Clientes.js';
import Produtos from './cadastros/Produtos.js';
import Tecnicos from './cadastros/Tecnicos.js';
import OrdemServico from './cadastros/OrdemServico.js';
import TiposServico from './cadastros/TiposServico.js';

function Home() {

    return(
        <>
            <Routes>
                <Route path="/" exact='true' element={<Home />} />
                <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="/Tecnicos" element={<Tecnicos />} />
                <Route path="/TiposServico" element={<TiposServico />} />
                <Route path="/OrdemServico" element={<OrdemServico />} />
            </Routes>
        </>
    )
}

export default Home;