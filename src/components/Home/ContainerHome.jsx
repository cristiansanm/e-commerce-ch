import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeaderViews from '../UICommonComp/HeaderViews'
import HeaderContainer from './../Header/HeaderContainer'
import ItemListContainer from './ItemList/ItemListContainer'

function ContainerHome() {
    return (
        <div>
            <HeaderContainer/>
            <NavBar/>
            <HeaderViews viewTittle="Principales Ofertas"/>
            <ItemListContainer/>
        </div>
    )
}

export default ContainerHome
