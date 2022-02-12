import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import  "./../../../assets/css/HomeStyles/Header.scss";
import { makeStyles } from '@mui/styles';
import CartWidget from '../../Cart/CartWidget';

const useStyles = makeStyles({
    quickButtonsContainer:{
        display: "flex",
        width: "100%",
        justifyContent: "space-around"
    }
})
function QuickActions({itemWishList=10, itemOrders=14}) {
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
                    <CartWidget />
                </Box>
            </Box>
                    
                
        </>
    )
}

export default QuickActions
