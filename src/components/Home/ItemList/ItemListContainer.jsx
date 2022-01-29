import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { invokeData } from '../../../assets/js/mockupData';
import HeaderViews from './../../UICommonComp/HeaderViews';
import { formatCategory } from '../../../assets/js/formaters'

function ItemListContainer() {
    const { categoryName } = useParams();
    const [dataLoaded, setDataLoaded] = useState([]);
    useEffect(()=>{
        const load = async() => {
            try {
                if(categoryName){
                    let dataWithCategory = await invokeData;
                    setDataLoaded(dataWithCategory?.filter(item => item.category === categoryName))
                }
                else{
                   setDataLoaded(await invokeData) 
                }
            }
            catch (err){
                console.log(err);
            }
        }
        load();
    }, [categoryName])
    return (
        <div>
            <HeaderViews viewTittle={(categoryName) ? `${formatCategory[categoryName]}` : 'Principales Ofertas'}/>
            <ItemList dataLoaded={dataLoaded}/>
        </div>
    )
}

export default ItemListContainer
