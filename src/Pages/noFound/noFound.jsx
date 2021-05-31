import './nofound.css'
import React from 'react';
import BtnNavigation from '../../Components/Btn-navegation/BtnNavigation'

function NoFound(){
    return(
        <section className="nofound">
            < BtnNavigation titel="Home" to="reward-store-jimmy-pulido"/>
            <h1>404</h1>
            <p>PAGE NO FOUND</p>
        </section>
    )
}

export default NoFound