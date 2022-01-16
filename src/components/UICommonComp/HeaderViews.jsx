import React from 'react'
import './../../assets/css/UICommonComp/HeaderViews.scss'
function HeaderViews({viewTittle}) {
    return (
        <div className="hv__container">
            <h1>{viewTittle}</h1>
        </div>
    )
}

export default HeaderViews
