import React from 'react';
import Suscripcion from './Suscripcion';

const MostrarSuscripcion = ({suscripciones, borrarSuscripcion, editarId}) => {

    return ( 
        <>
            <h2>Subscripciones</h2>
            {
                suscripciones.map((item) => (
                    < Suscripcion
                        key={item.id}
                        id={item.id}
                        tipoDeSuscripcion={item.tipoDeSuscripcion}
                        precio={item.precio}
                        borrarSuscripcion={borrarSuscripcion}
                        editarId={editarId}
                    />    
                ))
            }
        </>    
    );
}
 
export default MostrarSuscripcion;