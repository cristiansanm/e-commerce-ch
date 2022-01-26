import React, { useState , useEffect } from 'react';
import { invokeData } from "./../../assets/js/mockupData"
import { useParams } from 'react-router-dom';
import ItemDetailed from './ItemDetailed';

export const ItemDetailContainer = () => {
  const [dataItemDetail, setDataItemDetail] = useState();
  const { productId } = useParams();
  
  useEffect(()=>{
    const loadData = async() => {
      try{
        let dataInvoked = await invokeData;
        setDataItemDetail(dataInvoked?.find(item => String(item.id) === productId));
      }catch(e){
        console.log(e)
      }
    }
    loadData();
  }, [productId])
  return <><ItemDetailed itemData={dataItemDetail}/></>;
};
