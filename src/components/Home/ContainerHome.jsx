import React from 'react'
import HeaderViews from '../UICommonComp/HeaderViews'
import ItemListContainer from './ItemList/ItemListContainer'

function ContainerHome() {
    return (
        <div>
            <HeaderViews viewTittle="Principales Ofertas"/>
            <ItemListContainer/>
        </div>
    )
}

export default ContainerHome
