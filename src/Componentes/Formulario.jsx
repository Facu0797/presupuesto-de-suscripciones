import React, { useState } from 'react';

const Formulario = ( {setContador, setControlValido} ) => {
    const [input, setInput] = useState(0);
    const [error, setError] = useState(false);

    // Funcion para enviar el formulario
    const handleForm = (e) => {
        e.preventDefault()

        // Comprobamos si el input esta vacio o si tiene un numero negativo
        if (input === Number("") || input < 0 ) {
            setError(true)
            return;
        }
        setError(false);
        setContador(input);
        setControlValido(true)
        
    }

    return ( 
        
        <div className="form-add-money">
            <form onSubmit={handleForm}> 
                <p>Agregar presupuesto</p>
                <input type="number" placeholder='200€' onChange={(e) => setInput(e.target.value)}/>
                <input type="submit" value="Agregar"/>
            </form>
            {error ? <p>Ingrese un presupuesto valido</p> : null
            }
        </div>  
    );
}
 
export default Formulario;