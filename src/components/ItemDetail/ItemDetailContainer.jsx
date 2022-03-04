import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailed from './ItemDetailed';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { invokeData } from '../../assets/js/mockupData';

export const ItemDetailContainer = () => {
  const [dataItemDetail, setDataItemDetail] = useState({});
  const { productId } = useParams();
  
  useEffect(()=>{

    const db = getFirestore();

    //(database, collection, entry[ID])
    const singleItem = doc(db, 'items', productId);

    const loadData = async() => {
      try{
        //getDoc(item).data() => extract all the data from one item
        let getItemById = await getDoc(singleItem)
        let res = getItemById?.data()
        setDataItemDetail({id: productId, ...res});
      }
      //If firebase throws an error, this component will load tre mockup data
      catch(e){
        console.log(e)
        let convertId = Number(productId)
        let data = await invokeData
        setDataItemDetail(data?.find(item => item.id === convertId))
      }
    }
    loadData();
  }, [productId])

  return (
    <>
      <ItemDetailed itemData={dataItemDetail}/>
    </>
  )
};
