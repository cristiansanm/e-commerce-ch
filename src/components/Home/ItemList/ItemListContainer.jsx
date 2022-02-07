import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { invokeData } from '../../../assets/js/mockupData';
import HeaderViews from './../../UICommonComp/HeaderViews';
import { formatCategory } from '../../../assets/js/formaters'
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';

function ItemListContainer() {
    const { categoryName } = useParams();
    const [dataLoaded, setDataLoaded] = useState([]);
    // const [dataDb, setDataDb]= useState([])
    useEffect(()=>{
        // const db = getFirestore();

        // const queryCollection = collection(db, 'items');

        // getDocs(queryCollection)
        // .then(res => console.log(res))
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
