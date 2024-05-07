import React, { useState } from 'react';

const AgregarSuscripcion = ({tipoDeSuscripcion, setTipoDeSuscripcion, precio, setPrecio, suscripciones, setSuscripciones, editId, setEditId, gasto, contador}) => {

    const [error, setError] = useState(false)
    const [errorGasto, setErrorGasto] = useState(false)

    const handleSuscripciones = (e) => {
        e.preventDefault();

        // Validamos que los inputs sean correctos
        if (tipoDeSuscripcion === "" || precio === "" || Number(precio) < 0 ) {
            setError(true)
            return;
        }

        // Validamos que el presupuesto sea positivo
        if (contador - gasto < Number(precio)) {
            setErrorGasto(true);
            return;
        }
        setError(false)
        setErrorGasto(false)

            // Editando suscripcion
        if (editId != "") {
            setEditId("")
            const editSuscripcion = suscripciones.map((item) => {
                if (item.id === editId) {
                    item.tipoDeSuscripcion = tipoDeSuscripcion;
                    item.precio = precio;
                }
                return item
            })
            setSuscripciones(editSuscripcion);

            // Agregando suscripcion
        } else {
            const dataSuscripciones = {
                tipoDeSuscripcion: tipoDeSuscripcion,
                precio: precio,
                id: Date.now()
            }
            setSuscripciones([...suscripciones, dataSuscripciones])
        }
        
        // Se setean los inputs
        setTipoDeSuscripcion("")
        setPrecio("")
    }

    return ( 
        <div className="add-subscription">
            <form onSubmit={handleSuscripciones}>
                <p>Servicio</p>
                <select value={tipoDeSuscripcion} onChange={(e) => setTipoDeSuscripcion(e.target.value)}>
                    <option value="">-- Elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple Tv</option>
                </select>

                <p>Cantidad</p>
                <input value={precio} type="number" placeholder='20€' onChange={(e) => setPrecio(e.target.value)}/>
                <input type="submit" value={editId != "" ? "Guardar" : "Agregar"} />
                
            </form>

            {error ? <p className="error">Campos invalidos</p> : null}
            {errorGasto ? <p className='error'> No tienes saldo disponible</p> : null}
            
        </div>
    );
}
 
export default AgregarSuscripcion;