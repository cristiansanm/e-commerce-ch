import { Box, Button, Grid } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import "./../../../assets/css/HomeStyles/Header.scss"
import PhoneIcon from '@mui/icons-material/Phone';
import ControlledSelect from './ControlledSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useStyles = makeStyles({
    second__part :{
        display: 'flex',
    },
    accountButton:{
        backgroundColor: 'black'
    }
})
function FirstCompContact() {
    const classes = useStyles();
    return (
        <div className="header__container">
            <Grid py={2} container xs={12}>
                <Grid item xs={6}>
                    <div className="phone__contact">
                        <PhoneIcon sx={{height: "100%", fontSize: "2rem"}}/>
                        <span><h4>Contáctanos</h4></span>
                        <span>+31 912 33 43 21</span>
                    </div>
                </Grid>
                <Grid className={classes.second__part} item xs={6}>
                    <div className="links__header">
                        <Box component="a"><a href="#">Acerca de nosotros</a></Box>
                        <Box component="a" mx={2}><a href="#">Blog</a></Box>
                        <Box component="a" mr={2}><a href="#">Cómo comprar</a></Box>
                    </div>
                    <div className="money__type">
                        <ControlledSelect/>
                    </div>
                    <div className="my__account">
                        <Button 
                            sx={{
                                color: '#0943AEFF',
                                border: '1px solid #0943AEFF'
                            }}
                            variant="outlined"
                            startIcon={<AccountCircleIcon />}
                        >
                            Mi cuenta
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FirstCompContact
