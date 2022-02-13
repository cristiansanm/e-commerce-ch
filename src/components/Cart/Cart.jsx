import { Button } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import NoContent from '../UICommonComp/NoContent';
import CartTable from './CartTable';
import "../../assets/css/Cart.scss";
import { Link } from 'react-router-dom';
// import { addDoc, collection, getFirestore }  from 'firebase/firestore';

const Cart = () => {
  const { cartList , emptyCart } = useCartContext();
  // const totalPrice = calculateTotalPrice();
  // const setOrder = async() =>{
  //   console.log("Orden Completada")
  //   // const db = getFirestore();
  //   // const ordersCollection = collection(db, 'items');
  //   // await addDoc( ordersCollection, orderData )
  //   // .then( res => console.log(res) )
      
  // }
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
            {/* <Button
              onClick={setOrder}>
              Realizar Pedido
            </Button> */}
          </div>}
    </div>
    );
};

export default Cart;
