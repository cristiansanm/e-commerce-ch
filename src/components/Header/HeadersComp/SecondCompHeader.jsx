import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from "./../../../assets/img/logo_edited.png"
import './../../../assets/css/HomeStyles/Header.scss'
import TextInput from './../../UICommonComp/TextInput';
import QuickActions from './QuickActions';
const useStyles = makeStyles({
    gridContainer:{

    },
    logoGrid:{
        display:"flex",
        justifyContent:"flex-start",
    },
    quickActions:{
        justifyContent:"flex-end",
    }
})
function SecondCompHeader() {
    const classes = useStyles();
    return (
        <div className="header__container">
            <Grid mt={2} className={classes.gridContainer} container>
                <Grid className={classes.logoGrid} item xs={5} sm={3}>
                    <a href="/home">
                        <img 
                            style={{marginTop:16}}
                            width="140" 
                            height="70" 
                            src={logo} 
                            alt="logo" />
                    </a>
                </Grid>
                <Grid item xs={7} sm={5}>
                    <TextInput/>
                </Grid>
                <Grid mt={3} className={classes.quickActions} item sm={4}>
                    <QuickActions/>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondCompHeader
