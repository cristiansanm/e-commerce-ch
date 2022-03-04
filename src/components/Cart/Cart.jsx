import { useState } from "react";
import { Button } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import NoContent from '../UICommonComp/NoContent';
import CartTable from './CartTable';
import "../../assets/css/Cart.scss";
import { Link } from 'react-router-dom';
import ClientForm from './ClientForm';
import SnackBar from "../UICommonComp/SnackBar";

const Cart = () => {
  const { cartList , emptyCart, calculateTotalPrice } = useCartContext();
  let totalAmount = calculateTotalPrice();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleClose = () => setOpen(false);
  const [orderId, setOrderId] = useState('');
  const handleOrderId = (id) => {
    setOrderId(id);
    setMessage(`Se ha agregado una nueva orden, puedes ir a verla (ID: ${id})`)
    setType("success");
    setOpen(true);
  }
  return (
    <div>
        {(cartList?.length > 0) ? (
          <CartTable/>
        ) : (
          <NoContent 
            message="Pero te damos una segunda oportunidad"
            title="No tienes nada agregado a tu carrito aún..."/>
        )}
        {cartList?.length > 0 && 
          <div className="emptyCart__container">
            <ClientForm 
              itemsOnCart = { cartList } 
              totalAmount = { totalAmount }
              orderId = { handleOrderId }/>
            <Link to="/">
              <Button
                variant="contained" 
                color="primary">
                Seguir Comprando
              </Button>
            </Link>
            <Button 
              variant="contained" 
              color="error" 
              onClick={()=>emptyCart()} >
                Vaciar Carrito
            </Button>
          </div>}
          {orderId && (
            <SnackBar 
              open = { open }
              handleClose = { handleClose }
              type = { type }
              message = { message }/>
          )}
    </div>
    );
};

export default Cart;
