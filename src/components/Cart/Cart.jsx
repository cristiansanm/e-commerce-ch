import { Button } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import NoContent from '../UICommonComp/NoContent';
import CartTable from './CartTable';
import "../../assets/css/Cart.scss";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartList , emptyCart } = useCartContext();

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
            <Button 
              variant="contained" 
              color="error" 
              onClick={()=>emptyCart()} >
                Vaciar Carrito
            </Button>
            <Link to="/">
              <Button
                sx={{marginLeft: 10}}
                variant="contained" 
                color="primary">
                Seguir Comprando
              </Button>
            </Link>
          </div>}
    </div>
    );
};

export default Cart;
