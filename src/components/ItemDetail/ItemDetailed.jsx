import React, { useState } from 'react';
import { MAGIC_NUMBER } from '../../assets/js/helpers'
import HeaderViews from '../UICommonComp/HeaderViews';
import Rating from '@mui/material/Rating';
import '../../assets/css/ItemDetailed.scss';
import Loader from '../UICommonComp/Loader';
import ProductColors from './ProductColors';
import ItemCount from '../Home/ItemList/ItemCount';
import SnackBar from '../UICommonComp/SnackBar';
import { itemCountDetail } from '../../assets/js/styleObjects'
const ItemDetailed = ({ itemData }) => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Default Message');
  const [type, setType] = useState('info');
  const handleClose = () => {
      setOpen(false);
  }
  const onAdd = (count) => {
    setOpen(true);
    setType('success');
    setMessage(`Se agregó ${count} producto(s) al carrito`)
  }
  return (
    <>
      {itemData ? (
        <>
        <HeaderViews viewTittle="Detalle"/>
        <div className="item__detailed__container">
          <div className="img__container">
            <img src={itemData?.img} alt={itemData?.model}/>
          </div>
          <div className="item__info__container">
            <span>{itemData?.category}</span>
            <h1>{itemData?.model}</h1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ProductColors/>
            <h4>${itemData?.price/MAGIC_NUMBER}.00</h4>
            <ItemCount styleCount={itemCountDetail} stock={itemData?.stock} onAdd={onAdd}/>
            <span className="stock__total">Stock Total: {itemData?.stock}</span>
            <p>{itemData?.description}</p>
          </div>
        </div>
        <SnackBar open={open} handleClose={handleClose} type={type} message={message}/>
        </>
      ): (
        <Loader />
      )}
      
    </>
    );
};

export default ItemDetailed;
