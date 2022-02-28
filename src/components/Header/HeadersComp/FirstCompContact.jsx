import { Box, Button, Grid } from '@mui/material'
import './../../../assets/css/HomeStyles/Header.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import ControlledSelect from './ControlledSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { secondPartHeader, accountButton } from '../../../assets/js/styleObjects';

function FirstCompContact() {
    return (
        <div className="header__container">
            <Grid py={2} container>
                <Grid item lg={3} md={12} sm={12} xs={12}>
                    <div className="phone__contact">
                        <PhoneIcon sx={{height: "100%", fontSize: "2rem"}}/>
                        <span><h4>Contáctanos</h4></span>
                        <span>+31 912 33 43 21</span>
                    </div>
                </Grid>
                <Grid sx={secondPartHeader} item lg={9} md={12} sm={12} xs={12}>
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
                            sx={ accountButton }
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
