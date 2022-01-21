import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function ItemCount({ stock, initial, onAdd}) {
    const [count, setCount] = useState(1);
    const handleAdd = () =>{
        setCount(count+1);
    }
    const handleRemove = () =>{
        setCount(count-1);
    }
    return (
        <>  
            <div>
                <IconButton 
                    disabled = {count === 1 ? true : false}
                    onClick={handleRemove} 
                    aria-label='remove'
                >
                    <RemoveIcon color={count===1 ? '': 'primary'}/>
                </IconButton>
                <span>{count}</span>
                <IconButton 
                    disabled = {(count<stock ? false:true)} 
                    onClick={handleAdd} 
                    aria-label="add"
                >
                    <AddIcon color={count<stock ? 'primary' : '' }/>
                </IconButton>
            </div>
            <div>
                <Button 
                    disabled = {(stock<=0 ? true : false)} 
                    onClick={()=> onAdd(count)} 
                    variant="contained"
                >
                    {stock>0 ? 'Añadir al carrito' : 'Fuera de Stock'}
                </Button>
            </div>
                
        </>
    )
}

export default ItemCount
