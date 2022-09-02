import React from 'react'

export default function Cabecera(props) {
  
  return (
    <header>
        {/* maquetar Cabecera aquí */}
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos: <span>{props.quantity}</span></p>
    </header>
  )                                     
}
