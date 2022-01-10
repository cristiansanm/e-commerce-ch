import React from 'react';
import "./../../assets/css/HomeStyles/Header.scss"
import FirstCompContact from './HeadersComp/FirstCompContact';
import SecondCompHeader from './HeadersComp/SecondCompHeader';
function HeaderContainer() {
    return (
        <div>
            <FirstCompContact/>
            <hr />
            <SecondCompHeader/>
        </div>
    )
}

export default HeaderContainer
