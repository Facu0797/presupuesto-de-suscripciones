import React from 'react';
import { formatearMoneda } from '../formatearMoneda';

const Suscripcion = ({tipoDeSuscripcion, precio, id, borrarSuscripcion, editarId}) => {

const eliminarSuscripcion = (e) => {
    e.preventDefault()
    // Preguntamos si esta seguro de eliminar
    const preguntaEliminar = window.confirm(`Desea eliminar ${tipoDeSuscripcion}`)
    if(preguntaEliminar) {
        borrarSuscripcion(id)
    }
}

const editarSuscripcion = (e) => {
    e.preventDefault()

    editarId(id)
}

const urlImagen = `/Imagenes/${tipoDeSuscripcion}.png`;
    
    return ( 
        <div className="single-item">
            <img src={urlImagen} alt="services" />
            <h3>precio: {formatearMoneda(Number(precio))} </h3>
            <a className='delete' onClick={eliminarSuscripcion} href="">Borrar</a>
            <a className='edit' onClick={editarSuscripcion} href="">Editar</a>
        </div>    
    );
}
 
export default Suscripcion;