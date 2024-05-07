import React, { useState } from 'react';
import Header from './Componentes/Header';
import "./App.css"
import Formulario from './Componentes/Formulario';
import MainControl from './Componentes/MainControl';

const App = () => {

    const [contador, setContador] = useState(0);
    const [controlValido, setControlValido] = useState(false);

    const controlPrincipal = controlValido
                            ? <MainControl contador={contador} />
                            : <Formulario setContador={setContador} setControlValido={setControlValido}/>
    return ( 
        <div className="App">
            <Header />
            {controlPrincipal}
        </div>
    );
}
 
export default App;