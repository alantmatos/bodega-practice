import React from 'react'

function InventoryItemCard({product, addToReorder, handleDelete}) {

    function handleClick(e, product){
        e.stopPropagation()
        handleDelete(product)
    }

    return(
        <div className="card" onClick={() => {addToReorder(product)}}>
            <img src={product.image} alt={product.name}></img>
            <h3>I{product.name}</h3>
            <h4>{product.price}</h4>
            <button onClick={(e) =>{handleClick(e,product)}}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;