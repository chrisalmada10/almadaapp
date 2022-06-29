import React, { useState } from 'react'

  const ItemCount = ( {stock, initial, onAdd} ) =>{
  const [count, setCount] = useState (initial)
    
  const sumar= () =>{
    if (stock > count){
      setCount(count+1)
      }
  } 

  const restar= ()=>{
    if (count > 1 ){
      setCount(count - 1)
    }
  }
const AgregarCantidad = ()=> {
  onAdd (count)
}
  

return (
  
  <><div className='containerButton'>
    <button className='Boton 1' onClick={restar}> - </button>
    <label> {count} </label>
    <button className='Boton 1' onClick={sumar}> + </button>
    </div><button className='Agregar al Carrito' onClick={AgregarCantidad}> AGREGAR AL CARRITO</button></>
  )
}

export default ItemCount 