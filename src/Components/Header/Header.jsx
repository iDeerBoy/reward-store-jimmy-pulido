import './Header.css';
import React, { useContext } from 'react';
import { ContextUser } from '../../Context/user';
import logo from '../../Images/logo.svg';

function Header (){

    const userData = useContext(ContextUser)

    return (
        <header>
            {/* <img src={logo} alt="logo"></img> */}
            <h2>{userData.name}</h2>
            <p>{userData.points}</p>
        </header>
    )
}

export default Header;