import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import HeaderViews from './../../UICommonComp/HeaderViews';
import { formatCategory } from '../../../assets/js/formaters'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import SnackBar from '../../UICommonComp/SnackBar';
import { invokeData } from '../../../assets/js/mockupData';


function ItemListContainer() {
    //consts for snackbar
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [message,setMessage] = useState("");
    const [type, setType] = useState("");

    //const for ItemsList 
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
            try{
                let getAllItems = await getDocs(queryItemsCollection);
                docsSetter(getAllItems);
            }
            //If firebase throws an error, this component will load tre mockup data
            catch(e){
                setMessage(`Error con firebase: ${e.message}`);
                setType("error");
                setOpen(true)
                setDataLoaded(await invokeData)
                console.log(e)
            }
        }

        //Funcition for getting items filtered by category
        const getDocsByCategory = async(category) => {
            try {
                let queryByCategory = query(queryItemsCollection,
                    where('category', '==', category));
                
                let getItemsByCategory = await getDocs(queryByCategory);
                
                docsSetter(getItemsByCategory);
            }
            //If firebase throws an error, this component will load tre mockup data
            catch(e){
                setMessage(`Error con firebase: ${e.message}`);
                setType("error");
                setOpen(true);
                console.log(e);
                let data = await invokeData
                setDataLoaded(data?.filter(item => item.category === categoryName))
            }
            
        }

        //Function for loading the request data from the database
        const load = async() => {
            if(categoryName){
                getDocsByCategory(categoryName);
            }
            else{
               getAllDocs();
            }
        }
        load();
    }, [categoryName])

    return (
        <div>
            <HeaderViews viewTittle={(categoryName) ? `${formatCategory[categoryName]}` : 'Principales Ofertas'}/>
            <ItemList dataLoaded={dataLoaded}/>
            <SnackBar
                open={open} 
                handleClose={handleClose} 
                type={type} 
                message={message}/>
        </div>
    )
}

export default ItemListContainer
