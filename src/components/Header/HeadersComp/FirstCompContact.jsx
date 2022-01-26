import { Box, Button, Grid } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import './../../../assets/css/HomeStyles/Header.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import ControlledSelect from './ControlledSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
/* TODO: Add views to all the buttons */
const useStyles = makeStyles({
    secondPart :{
        display: 'flex',
        justifyContent : 'flex-end',
        '@media (max-width: 1198px)':{
            justifyContent : 'center',
        }
    },
    phoneContact: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: '18px',
        height: '24px',
       '& h4':{
            margin: 0,
        },
        '& span':{
            marginLeft: '5px',
            marginTop: '2px',
        },
        '@media (max-width: 1198px)':{
            justifyContent : 'center',
            marginBottom: '10px',
            paddingTop: 0,
        }  
    },
    accountButton:{
        backgroundColor: 'black'
    }
})
function FirstCompContact() {
    const classes = useStyles();
    return (
        <div className="header__container">
            <Grid py={2} container>
                <Grid item lg={3} md={12} sm={12} xs={12}>
                    <div className={classes.phoneContact}>
                        <PhoneIcon sx={{height: "100%", fontSize: "2rem"}}/>
                        <span><h4>Contáctanos</h4></span>
                        <span>+31 912 33 43 21</span>
                    </div>
                </Grid>
                <Grid className={classes.secondPart} item lg={9} md={12} sm={12} xs={12}>
                    <div className="links__header">
                        <Box component="span"><a href="#">Acerca de nosotros</a></Box>
                        <Box component="span" mx={2}><a href="#">Blog</a></Box>
                        <Box component="span" mr={2}><a href="#">Cómo comprar</a></Box>
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
