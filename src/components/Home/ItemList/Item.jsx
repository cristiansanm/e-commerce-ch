import React from 'react'
import SkeletonLoader from '../../UICommonComp/SkeletonLoader';
import ItemCount from './ItemCount'

function Item({data}) {
    const onAdd = (count) => {
        console.log("Se pide ", count);
    }
    return (
        <div>
            {
                data ? (
                    <ItemCount stock={data?.stock} onAdd={onAdd}/>
                ):(
                    <SkeletonLoader/>
                )
            }
            
        </div>
    )
}

export default Item
