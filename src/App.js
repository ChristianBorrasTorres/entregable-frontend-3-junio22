import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="App">
      <Cabecera quantity={quantity}/>
      <Listado handleMount={()=>setQuantity(quantity+1)}/>
    </div>
  )
}

export default App;
