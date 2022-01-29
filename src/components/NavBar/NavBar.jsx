import React from 'react'
import Options from '../UICommonComp/Options'
import "./../../assets/css/NavBar.scss"
import ControlledSelectNB from './ControlledSelectNB'
import { mainLinkNavStyle } from '../../assets/js/styleObjects'
import { routesCategory, routesOthers, formatMainLinks, formatOtherLinks } from '../../assets/js/formaters'
//TODO: add view to contacto and descuentos
function NavBar() {
    return (
        <div className="bg__navbar">
            <ControlledSelectNB 
                header={"Categorías"} 
                listCategory={routesCategory}
                formatLink={formatMainLinks}/>
            <ControlledSelectNB 
                header={"Otros"} 
                listCategory={routesOthers}
                formatLink={formatOtherLinks}/>
            <Options 
                name="Contacto" 
                redirectTo={"/contact"}
                style={mainLinkNavStyle}/>
            <Options 
                name="Descuentos de hoy" 
                redirectTo={"/offers"}
                style={mainLinkNavStyle}/>
        </div>
    )
}

export default NavBar

