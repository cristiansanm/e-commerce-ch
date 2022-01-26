import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./../../assets/css/NavBar.scss"
import { activeStyle } from './../../assets/js/styleObjects'
function Options({redirectTo, name, style}) {
    return (
        <>
            <Button className="nav__button button__hover" sx={style}>
                <NavLink 
                    to={redirectTo} 
                    style={ ({ isActive }) => 
                        isActive ? activeStyle : style} 
                >
                    {name}
                </NavLink>
            </Button>
        </>
    )
}

export default Options
