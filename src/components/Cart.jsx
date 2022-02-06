import { DeleteForever } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useCartContext } from './../context/CartContext';
const Cart = () => {
  const { cartList , emptyCart, removeItem } = useCartContext();

  return (
    <div>
        {(cartList?.length > 0) ? (
          cartList.map((data, index) => 
            <div style={{width: '100%', marginLeft: '40%'}} key={index}>
              {`id: ${data?.item.id}, nombre: ${data?.item.model}, cantidad: ${data?.quantity}`}
              <IconButton
                color="error"
                onClick={() => removeItem(data?.item.id)}>
                <DeleteForever/>
              </IconButton>
            </div>
          )
        ) : (
          <h2 style={{width: '100%', textAlign: 'center'}}>No hay nada en tu cart aún :(</h2>
        )}
        {cartList?.length > 0 && 
          <div style={{marginLeft: '50%', padding: '20px 0'}}>
            <Button variant="contained" color="error" onClick={()=>emptyCart()} >Vaciar Carrito</Button>
          </div>}
    </div>
    );
};

export default Cart;
