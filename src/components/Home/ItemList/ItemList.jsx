import React, { useState, useEffect } from 'react'
import {invokeData} from '../../../assets/js/mockupData'
import Item from './Item';

function ItemList() {
    const [dataLoaded, setDataLoaded] = useState([]);
    const load = async () => {
        try {
            let data = await invokeData;
            setDataLoaded(data)
        }
        catch (err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
        load();
    }, [])
    return (
        <div>
            <Item/>
            {console.log(dataLoaded)}
        </div>
    )
}

export default ItemList
