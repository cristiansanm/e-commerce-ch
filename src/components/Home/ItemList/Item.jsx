import React from 'react'
import ItemCount from './ItemCount'

function Item({data}) {
    const onAdd = (count) => {
        console.log("Se pide ", count);
    }
    return (
        <div>
            <ItemCount stock={data?.stock} onAdd={onAdd}/>
        </div>
    )
}

export default Item
