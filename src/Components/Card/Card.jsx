import './card.css';
import React, { useContext }  from 'react';
import { ContextUser } from '../../Context/user';
import useSwitchState from '../../Hooks/useSwitchState';
import buyImg from '../../Images/comprar.png';

function Card({name, category, img, cost, _id}){

    const { userData, pointsUsed } = useContext(ContextUser)
    const showRedeem = useSwitchState(false)
    const diferent = cost - userData.points
    const purchase = useSwitchState(false)
    const failToPurchase = useSwitchState(false)

    const redeem = async () =>{
        if (cost <= userData.points){
            const res = await fetch('https://coding-challenge-api.aerolab.co/redeem',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            },
            body: JSON.stringify({
                "productId": _id
            })
            })
            res.json();
            purchase.setTrue();
            pointsUsed.setSwitch();
        } else {
            failToPurchase.setTrue();
            setTimeout(() => {
                failToPurchase.setFalse();
            }, 1500);
        }
    }

    return (
        <div 
            onMouseEnter={showRedeem.setSwitch} 
            onMouseLeave={showRedeem.setSwitch} 
            onClick={redeem}
            className={`card ${purchase.state ? "purchase" : ""}`}
        >
            <h2>{name}</h2>
            <h3>{category}</h3>
            <div className="buyContainer">
                {
                    cost >= userData.points 
                    ? <p>You need<br/>{diferent} more.</p> 
                    : <img src={buyImg} alt="BuyIcon"></img>
                }
            </div>
                <img src={img.url} alt={name} />
            {purchase.state ? <p className="cost">Purchased</p> : <p className="cost">{cost}</p>}
            {showRedeem.state && userData.points >= cost && <div className="redeem"><p>Redeem</p></div>}
            {failToPurchase.state && <div className="noRedeem"><p>You need<br/>more credits</p></div>}
        </div>
    )
}

export default Card;