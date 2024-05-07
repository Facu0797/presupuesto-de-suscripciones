import React, { useEffect } from 'react';
import { formatearMoneda } from '../formatearMoneda';

const Balance = ({contador, gasto, setGasto, suscripciones}) => {

    const actualizarBalance = () => {
        const loGastado = suscripciones.reduce((total, item) => Number(item.precio) + total, 0);
        setGasto(loGastado)
    }

    useEffect(() => {
        actualizarBalance()
    }, [suscripciones])
    
    return ( 
        <div className="balance">
            <h3>Presupuesto: {formatearMoneda(Number(contador))} </h3>
            <h3>Disponible: {formatearMoneda(Number(contador - gasto))}</h3>
            <h3>Gastado: {formatearMoneda(Number(gasto))}</h3>
        </div>
    );
}
 
export default Balance;