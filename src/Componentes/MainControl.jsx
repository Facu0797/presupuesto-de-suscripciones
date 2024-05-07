import React, { useState } from 'react';
import Balance from './Balance';
import MostrarSuscripcion from './MostrarSuscripcion';
import AgregarSuscripcion from "./AgregarSuscripcion"

const MainControl = ({contador}) => {

    const [suscripciones, setSuscripciones] = useState([]);
    const [tipoDeSuscripcion, setTipoDeSuscripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [editId, setEditId] = useState("");
    const [gasto, setGasto] = useState(0);

    const borrarSuscripcion = (id) => {
        const nuevaLista = suscripciones.filter((subs) => subs.id != id)
        setSuscripciones(nuevaLista)
    }

    const editarId = (id) => {
        setEditId(id)
        suscripciones.map((item) => {
            if (item.id === id) {
                setTipoDeSuscripcion(item.tipoDeSuscripcion)
                setPrecio(item.precio)
            }
        })
    }

    return (
        <>
            <div className="main-form">
                <Balance 
                    contador={contador}
                    gasto={gasto}
                    setGasto={setGasto}
                    suscripciones={suscripciones}
                />
                <AgregarSuscripcion 
                    tipoDeSuscripcion={tipoDeSuscripcion}
                    setTipoDeSuscripcion={setTipoDeSuscripcion}
                    precio={precio}
                    setPrecio={setPrecio}
                    suscripciones={suscripciones}
                    setSuscripciones={setSuscripciones}
                    editId={editId}
                    setEditId={setEditId}
                    gasto={gasto}
                    contador={contador}
                />
            </div>
            <MostrarSuscripcion 
                suscripciones={suscripciones} 
                tipoDeSuscripcion={tipoDeSuscripcion} 
                precio={precio} 
                borrarSuscripcion={borrarSuscripcion} 
                editarId={editarId}
            />
        </>
    );
}

export default MainControl;