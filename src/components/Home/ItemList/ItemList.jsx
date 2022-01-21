import React, { useState, useEffect } from 'react'
import {invokeData} from '../../../assets/js/mockupData'
import SkeletonLoader from '../../UICommonComp/SkeletonLoader';
import Item from './Item';
import './../../../assets/css/Item.scss'
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
        <div className="item__list__container">
            {dataLoaded.length ? (dataLoaded?.map((el, key) => 
                <div key={key}>
                    <Item data={el}/>
                </div>
            )):(
                <div className="skeletons__container">
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
