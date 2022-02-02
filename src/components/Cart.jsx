import { Button } from '@mui/material';
import React from 'react';
import { useCartContext } from './../context/CartContext'
import SkeletonLoader from './UICommonComp/SkeletonLoader';
//TODO: add a view to this component
const Cart = () => {
  const { emptyCart } = useCartContext();
  //definir la logica
  const getListOfCart = localStorage.getItem('myCartList') === undefined ?
    [] :
    JSON.parse(localStorage.getItem('myCartList'));
  const listOfCart = getListOfCart.arrayCartList.length > 0 ? getListOfCart.arrayCartList : []
  return (
    <div>
        Soy Cart
        {listOfCart.length > 0 ? (
          listOfCart.map((item, index) => 
            <div>
              hola
            </div>
          )
        ) : (
          <SkeletonLoader/>
        )}
        {listOfCart.length > 0 && (<Button color="error" onClick={()=>emptyCart()} >Vaciar</Button>)}
    </div>
    );
};

export default Cart;
