import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({inventoryData, addToReorder, deletePermanetely}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {
                    inventoryData.map(product => ( <InventoryItemCard key={product.id} handleDelete={deletePermanetely} addToReorder={addToReorder} product={product}/> ))
                }
            </div>
        </div>
    );
}

export default CurrentInventoryList;