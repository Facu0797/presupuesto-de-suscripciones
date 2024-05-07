export const  formatearMoneda = (cantidad) => {
    return cantidad.toLocaleString("es-EU", {
        style: "currency",
        currency: "EUR"
    })
}