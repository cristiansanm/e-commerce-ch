import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import  "./../../../assets/css/HomeStyles/Header.scss";
import CartWidget from '../../Cart/CartWidget';
import OrderWidget from '../../Orders/OrderWidget';
import { quickButtonsContainer } from '../../../assets/js/styleObjects';


function QuickActions({itemWishList=10}) {

    return (
        <>
            <Box component="div" sx={ quickButtonsContainer }>
                <div className="quick__buttons">
                    <div>
                        <FavoriteIcon 
                            color="error"
                            sx={{height:40, width:30, marginRight: 1}} />
                        </div>
                    <div>
                        <span>WishList</span>
                        <span>{itemWishList}</span>
                    </div>
                </div>
                <Box component="div" className="quick__buttons">
                    <OrderWidget/>
                </Box>
                <Box component="div">
                    <CartWidget />
                </Box>
            </Box>
                    
                
        </>
    )
}

export default QuickActions
