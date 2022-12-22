import React, {useState,useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {


    
    const [inventoryData, setInventoryData] = useState([])
    const [ reorderInventory, setReorderInventory] = useState([])
    const [reload, setReload] = useState(true)


    useEffect(()=>{
        fetch('http://localhost:8001/inventory')
        .then(response=> response.json())
        .then(data =>{
            setInventoryData(data)
        })
    },[reload])


    function addToReorder (product) {
        const foundIndex = reorderInventory.findIndex(item => item.id === product.id);
        if ( foundIndex === -1) {
            setReorderInventory([...reorderInventory,product])
        } else {
            alert(' Oh Pls, we got enought of this.. lets buy some Cheesecake instead');
        }
    }

    // stop delete after reach this line is gone

    function addToReoderFilter (product) {
        const filtered = reorderInventory.filter((item) => item.id !== product.id);               
        setReorderInventory(filtered)
        console.log(filtered);
    }


    function removeFromReoder (product) {
        const foundIndex = reorderInventory.findIndex(item => item.id === product.id);
        if (foundIndex === -1) {
            console.log('if Statement ran');
        } else {
            const temporaryArr = [...reorderInventory];
            temporaryArr.splice(foundIndex,1);
            setReorderInventory(temporaryArr);
                }
    }


    function deletePermanetely (product) {

        fetch('http://localhost:8001/inventory/'+product.id,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        });
        
        alert('Ok then, I will give this to my dog');
        setReload(!reload);
    }
    


    return(
        <div className="container">
            <CurrentInventoryList inventoryData={inventoryData} addToReorder={addToReorder} deletePermanetely={deletePermanetely}/>
            <ReorderInventoryList reorderInventory={reorderInventory} removeFromReoder={removeFromReoder}/>
        </div>
    );
}

export default InventoryManager;