import { Button } from '@mui/material'
import React from 'react'
import "./../../assets/css/NavBar.scss"
function Options({redirectTo, name, style}) {
    return (
        <>
            <Button className="nav__button button__hover" sx={style}>
                <a 
                    style={style} 
                    href={redirectTo}>{name}</a>
            </Button>
        </>
    )
}

export default Options
