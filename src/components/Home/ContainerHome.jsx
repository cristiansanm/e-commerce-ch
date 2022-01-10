import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeaderContainer from './../Header/HeaderContainer'
import ItemListContainer from './ItemList/ItemListContainer'

function ContainerHome() {
    return (
        <div>
            <HeaderContainer/>
            <NavBar/>
            <ItemListContainer greeting="Bienvienidos a mi tienda"/>
        </div>
    )
}

export default ContainerHome
