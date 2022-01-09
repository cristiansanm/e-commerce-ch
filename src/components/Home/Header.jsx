import React from 'react';
import "./../../assets/css/HomeStyles/Header.scss"
import FirstCompContact from './Headers/FirstCompContact';
import SecondCompHeader from './Headers/SecondCompHeader';
function Header() {
    return (
        <div>
            <FirstCompContact/>
            <hr />
            <SecondCompHeader/>
        </div>
    )
}

export default Header
