import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({reorderInventory, removeFromReoder}) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {
                    reorderInventory.map(product => ( <InventoryItemCard key={product.id} product={product} handleDelete={removeFromReoder}/>))
                
                }
            </div>
        </div>
    );
}

export default ReorderInventoryList;