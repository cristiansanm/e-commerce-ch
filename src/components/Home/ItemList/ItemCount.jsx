import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function ItemCount({ stock , initial, onAdd}) {
    
    return (
        <>
            <IconButton aria-label='remove'>
                <RemoveIcon/>
            </IconButton>
            <span>1</span>
            <IconButton aria-label="add">
                <AddIcon/>
            </IconButton>
            {stock > 0 ? (
                <Button onClick={onAdd} variant="contained">Añadir al carrito</Button>
            ): (
                <Button disabled variant="contained">Añadir al carrito</Button>
            )}
            
        </>
    )
}

export default ItemCount
