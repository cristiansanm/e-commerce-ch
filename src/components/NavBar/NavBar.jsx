import React from 'react'
import Options from '../UICommonComp/Options'
import "./../../assets/css/NavBar.scss"
import ControlledSelectNB from './ControlledSelectNB'
function NavBar() {
    return (
        <div className="bg__navbar">
            <ControlledSelectNB 
                header={"Categorías"} 
                listCategory={routesCategory}
                formatLink={formatLinks}/>
            <ControlledSelectNB 
                header={"Otros"} 
                listCategory={routesOthers}
                formatLink={formatOthers}/>
            <Options 
                name="Contacto" 
                redirectTo={"/contact"}
                style={styleLink}/>
            <Options 
                name="Descuentos de hoy" 
                redirectTo={"/offers"}
                style={styleLink}/>
        </div>
    )
}

export default NavBar
const styleLink = {
    '& a':{
        textDecoration: "none",
    },
    color: 'white',
    fontSize: "1rem",
    fontFamily: 'Rubik,sans-serif',
    fontWeight: "600",
    letterSpacing: "0.00938em",
    textTransform: "capitalize",
}
const routesCategory = ['Guitarras', 'Bajos', 'Pianos', 'Percusion', 'Efectos'];
const routesOthers = [ 'Auriculares','Amplis', 'Clases', 'Conciertos'];
const formatLinks = {
    Guitarras: '/category/guitar',
    Bajos: '/category/bass',
    Pianos: '/category/piano',
    Percusion: '/category/percussion',
    Efectos: '/category/fx',
}
const formatOthers = {
    Amplis: '/category/ampli',
    Clases: '/category/classes',
    Conciertos: '/category/concerts',
    Auriculares: '/category/headphones'
}