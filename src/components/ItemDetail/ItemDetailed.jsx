import React from 'react';

const MAGIC_NUMBER = 100;
const ItemDetailed = ({ itemData }) => {
  return (
    <div>
        <h1>{itemData?.model}</h1>
        <img src={itemData?.img}/>
        <p style={{maxWidth: '600px', margin: '0 auto' }}>{itemData?.description}</p>
        <h4>${itemData?.price/MAGIC_NUMBER}.00</h4>
    </div>
    );
};

export default ItemDetailed;
