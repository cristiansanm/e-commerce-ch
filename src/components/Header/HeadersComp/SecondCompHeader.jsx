import React from 'react';
import { Grid } from '@mui/material';
import logo from "./../../../assets/img/original_logo.png"
import './../../../assets/css/HomeStyles/Header.scss'
import TextInput from './../../UICommonComp/TextInput';
import QuickActions from './QuickActions';
import { Link } from 'react-router-dom';
import { secondCompHeader } from '../../../assets/js/styleObjects';
//TODO: make the search bar useable

function SecondCompHeader() {
    return (
        <div className="header__container">
            <Grid mt={2} container>
                <Grid 
                    sx={secondCompHeader.logoGrid} 
                    item 
                    xs={5} 
                    sm={3}
                >
                    <Link to="/">
                        <img 
                            style={{marginTop:16}}
                            width="160" 
                            height="70" 
                            src={logo} 
                            alt="logo" />
                    </Link>
                </Grid>
                <Grid item xs={7} sm={5}>
                    <TextInput/>
                </Grid>
                <Grid 
                    mt={3} 
                    sx={secondCompHeader.quickActions} 
                    item 
                    sm={4}
                >
                    <QuickActions/>
                </Grid>
            </Grid>
        </div>
    )
}

export default SecondCompHeader
