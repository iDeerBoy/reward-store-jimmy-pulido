import React, { useContext }  from 'react';
import { ContextUser } from '../../Context/user';
import useSwitchState from '../../Hooks/useSwitchState';

function Card({name, category, img, cost, _id}){

    const userData = useContext(ContextUser)
    const showRedeem = useSwitchState(false)
    const diferent = cost - userData.points
    const purchase = useSwitchState(false)

    const redeem = async () =>{
        if (cost <= userData.points){
            const res = await fetch('https://coding-challenge-api.aerolab.co/redeem',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            },
            body:{
                "productId": _id
            }
        })
        const data = await res.json()
        console.log(data)
        purchase.setTrue()
        }
    }

    return (
        <div onMouseEnter={showRedeem.setSwitch} onMouseLeave={showRedeem.setSwitch} onClick={redeem}>
            <h2>{name}</h2>
            <h3>{category}</h3>
            {cost >= userData.points ? <p>You need {diferent} more.</p> : <p>comprar</p>}
            <img src={img.url} alt={name} />
            <p>{cost}</p>
            {showRedeem.state && cost <= userData.points && <div><p>Redeem</p></div>}
            {purchase.state ? "true" : "false"}
        </div>
    )

}

export default Card;