import './BtnNavigation.css'
import React from 'react';
import { Link } from 'react-router-dom';

function BtnNavigation({titel, to, btnClass}){

    return <Link to={`/${to}`} className={`BtnNavigation ${btnClass}`}>{titel}</Link>

}

export default BtnNavigation;