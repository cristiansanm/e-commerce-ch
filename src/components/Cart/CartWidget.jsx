import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext"
import "../../assets/css/HomeStyles/Header.scss"
const CartWidget = () => {

  const { getTotalItemsOnCart } = useCartContext();
  return (
    <>
        {getTotalItemsOnCart() > 0 && (
            <Link to="/cart" className="quick__buttons">
                <div>
                    <ShoppingCartIcon 
                        sx={{height:40, width:30, marginRight: 1}} 
                        color="secondary"
                    />
                </div>
                <div>
                    <div className="button__container__options">
                        <span>Cart</span>
                            <span>{getTotalItemsOnCart()}</span>
                        </div>
                </div>
            </Link> 
        )}
        
    </>
  )
}

export default CartWidget