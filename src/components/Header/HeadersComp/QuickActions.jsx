import { Box } from '@mui/material'
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  "./../../../assets/css/HomeStyles/Header.scss";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    quickButtonsContainer:{
        display: "flex",
        width: "100%",
        justifyContent: "space-around"
    }
})
function QuickActions({itemWishList=10, itemOrders=14, itemCart=10}) {
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.quickButtonsContainer}>
                <Box component="div" className="quick__buttons">
                    <div>
                        <FavoriteIcon 
                            color="secondary"
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
                <Box component="div" className="quick__buttons">
                    <div>
                        <ShoppingCartIcon 
                            sx={{height:40, width:30, marginRight: 1}} 
                            color="disabled"
                        />
                    </div>
                    <div>
                        <Link className="button__container__options" to="/cart">
                            <span>Cart</span>
                            <span>{itemCart}</span>
                        </Link>
                    </div>
                </Box>
            </Box>
                    
                
        </>
    )
}

export default QuickActions
