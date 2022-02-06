import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  "./../../../assets/css/HomeStyles/Header.scss";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext'

const useStyles = makeStyles({
    quickButtonsContainer:{
        display: "flex",
        width: "100%",
        justifyContent: "space-around"
    }
})
function QuickActions({itemWishList=10, itemOrders=14}) {
    const { getTotalItemsOnCart } = useCartContext();
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.quickButtonsContainer}>
                <Box component="div" className="quick__buttons">
                    <div>
                        <FavoriteIcon 
                            color="error"
                            sx={{height:40, width:30, marginRight: 1}} />
                        </div>
                    <div>
                        <span>WishList</span>
                        <span>{itemWishList}</span>
                    </div>
                </Box>
                <Box component="div" className="quick__buttons">
                    <div>
                        <DeliveryDiningIcon 
                            color="primary"
                            sx={{height:40, width:30, marginRight: 1}} />
                    </div>
                    <div>
                        <span>Pedidos</span>
                        <span>{itemOrders}</span>
                    </div>
                </Box>
                <Box component="div">
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
                </Box>
            </Box>
                    
                
        </>
    )
}

export default QuickActions
