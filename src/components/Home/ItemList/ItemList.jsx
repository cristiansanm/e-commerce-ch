import React, { useState, useEffect } from 'react'
import {invokeData} from '../../../assets/js/mockupData'
import SkeletonLoader from '../../UICommonComp/SkeletonLoader';
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
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', padding:'3rem 0'}}>
            {dataLoaded.length ? (dataLoaded?.map((el, key) => 
                <div key={key}>
                    <Item data={el}/>
                </div>
            )):(
                <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '3rem'}}>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                    <SkeletonLoader/>
                </div>
                
            )}
        </div>
    )
}

export default ItemList
