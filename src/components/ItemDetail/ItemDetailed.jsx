import React from 'react';
//TODO: move magic number to filters.js file
//add styles to this view
const MAGIC_NUMBER = 100;
const ItemDetailed = ({ itemData }) => {
  return (
    <div>
        <h1>{itemData?.model}</h1>
        <img src={itemData?.img} alt={itemData?.model}/>
        <p style={{maxWidth: '600px', margin: '0 auto' }}>{itemData?.description}</p>
        <h4>${itemData?.price/MAGIC_NUMBER}.00</h4>
    </div>
    );
};

export default ItemDetailed;
