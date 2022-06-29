import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListConteiner = ( {greeting} )=>{
    const onAdd = (cantidad)=>{
        console.log ((cantidad))
    }
    return (
        <div className="landing">
        <span>{greeting}</span>
        
        <ItemCount stock = {5} initial= {1} onAdd = {onAdd}/>
        </div>

    )
}

export default ItemListConteiner