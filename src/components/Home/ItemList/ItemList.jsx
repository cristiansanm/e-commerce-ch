import React from 'react'
import SkeletonLoader from '../../UICommonComp/SkeletonLoader';
import Item from './Item';
import './../../../assets/css/Item.scss'

function ItemList({ dataLoaded }) {
    return (
        <div className="item__list__container">
            {dataLoaded?.length ? (dataLoaded?.map((el, key) => 
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
