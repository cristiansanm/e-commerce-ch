import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import HeaderViews from './../../UICommonComp/HeaderViews';
import { formatCategory } from '../../../assets/js/formaters'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


function ItemListContainer() {

    const { categoryName } = useParams();
    const [dataLoaded, setDataLoaded] = useState([]);

    //Function for setting data up when is loaded
    const docsSetter = (data) =>{
        let res = data?.docs.map( elements => 
            ({id: elements.id, ...elements.data()})
         )
        return setDataLoaded(res);
    }

    useEffect( ()=>{
        const db = getFirestore();
        const queryItemsCollection = collection(db, 'items');
        
        //Function for getting all items in the collection
        const getAllDocs = async() =>{
            let getAllItems = await getDocs(queryItemsCollection);

            docsSetter(getAllItems);
        }

        //Funcition for getting items filtered by category
        const getDocsByCategory = async(category) => {
            let queryByCategory = query(queryItemsCollection,
                where('category', '==', category));
            
            let getItemsByCategory = await getDocs(queryByCategory);
            
            docsSetter(getItemsByCategory);
        }

        //Function for loading the request data from the database
        const load = async() => {
            try {
                if(categoryName){
                    getDocsByCategory(categoryName);
                }
                else{
                   getAllDocs();
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
