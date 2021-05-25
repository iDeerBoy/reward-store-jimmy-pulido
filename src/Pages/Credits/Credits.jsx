import React, { useState, useContext } from 'react';
import { ContextUser } from '../../Context/user';
import useString from '../../Hooks/useString';
import BtnNavegation from '../../Components/Btn-navegation/BtnNavigation';

function Credits(){

    const [getCredits, setGetCredits] = useState(0);
    const credits = parseInt(getCredits, 10);
    const nick = useString("");
    const email = useString("");
    const card = useString("");
    const [errorState, setErrorState] = useState(false);   
    const { userData, pointsUsed } = useContext(ContextUser);

    const selectCredits = (e) => {
        setGetCredits(e.target.value)
    }

    const buyCredits = async () =>{
        const res = await fetch('https://coding-challenge-api.aerolab.co/user/points',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            },
            body: JSON.stringify({
                "amount": credits
            })            
        })
        const data = await res.json()
        console.log(data);
        pointsUsed.setSwitch();
    } 

    const handleOnsubmit = (e) => {
        e.preventDefault()
        if (card.state.length !== 7 || nick.state !== userData.name || email.state === "" || getCredits === 0){
            setErrorState(true)    
        } else{
            buyCredits()            
            setErrorState(false)
        }
    }
        
    return (
        <section>
            <div>
                    <h1>Buy credits</h1>
                    <BtnNavegation  titel="Home" to="" />
                    <BtnNavegation  titel="History" to="History" />
            </div>
            <div>
                <form onSubmit={handleOnsubmit}>
                    <p>Your Nickname:</p>
                    <input type="text" placeholder="Your Nickname" onChange={nick.setString} />
                    <p>Email:</p>
                    <input type="email"  placeholder="Your Email"  onChange={email.setString} />
                    <p>Credit card:</p>
                    <input type="text" placeholder="Minimum 7 mumbers"  onChange={card.setString} />
                    <div>                        
                        <input type="radio" id="1000" name="getCredits" value={1000} onClick={selectCredits} />
                        <label htmlFor="1000" >1000</label>
                    </div>
                    <div>                        
                        <input type="radio" id="5000" name="getCredits" value={5000} onClick={selectCredits} />
                        <label htmlFor="5000" >5000</label>
                    </div>
                    <div>                        
                        <input type="radio" id="7500" name="getCredits" value={7500} onClick={selectCredits} />
                        <label htmlFor="7500" >7500</label>
                    </div>
                    <button>buy</button>
                    {errorState && <p>Revisa tus datos</p>}
                </form>
            </div>
        </section>
    )
}

export default Credits;