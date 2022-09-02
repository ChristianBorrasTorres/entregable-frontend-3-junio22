import { useState } from "react";

export default function Item(props) {
  const [stock, setStock] = useState(props.stock)
  
  function button(){setStock(stock -1)}

  return (
    <div className='producto' id={props.id} key={props.id}>
      {/* maquetar Item aquí */}
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock: {stock > 0 ? stock : <span>agotado</span>}</h5>

      <button onClick = {() => {button()
        return props.increase()}}
        disabled = {stock <= 0 ? true : false}>
        {stock<=0?'Sin Stock':'Comprar'}</button>
    </div>
  )
}
