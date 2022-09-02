import React from 'react'
import Objetos from './data.json'
import Item from './Item'


export default function Listado(props) {
  return (
    <div className="container">
      {/* renderizamos los Item aquí */}
      {Objetos.map((e) => {
        return (
          <Item key={e.id} id={e.id} nombre={e.producto.nombre} descripcion={e.producto.descripcion} stock={e.stock} increase={props.handleMount}
          />
        )
      })}
    </div>
  )
}
