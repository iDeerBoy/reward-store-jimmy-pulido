import './credits.css'
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
    const [successState, setSuccessState] = useState(false);
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
        res.json()
        pointsUsed.setSwitch();
    } 

    const handleOnsubmit = (e) => {
        e.preventDefault()
        if (card.state.length !== 7 || nick.state !== userData.name || email.state === "" || getCredits === 0){
            setErrorState(true)    
        } else{
            buyCredits()            
            setErrorState(false)
            setSuccessState(true)
            setTimeout(() => {         
                document.getElementById("buyCredits").reset();       
                setSuccessState(false)
            }, 1500);
        }
    }
        
    return (
        <section className="credits">
            <div className="navigationCredits">
                    <h1>Buy credits</h1>
                    <div className="navContainerC">
                        <BtnNavegation  titel="Home" to="" btnClass="btnBlue" />
                        <BtnNavegation  titel="History" to="History" />
                    </div>
            </div>
            <div className="formContainer">
                <form onSubmit={handleOnsubmit} id="buyCredits">
                    <p>Your Nickname:</p>
                    <input type="text" placeholder="Your Nickname" onChange={nick.setString} />
                    <p>Email:</p>
                    <input type="email"  placeholder="Your Email"  onChange={email.setString} />
                    <p>Credit card:</p>
                    <input type="text" placeholder="Min/Max 7 mumbers"  onChange={card.setString} />
                    <div className="radioContainer">
                        <div className="radio">                        
                            <input type="radio" id="1000" name="getCredits" value={1000} onClick={selectCredits} />
                            <label htmlFor="1000" >1000</label>
                        </div>
                        <div className="radio">                        
                            <input type="radio" id="5000" name="getCredits" value={5000} onClick={selectCredits} />
                            <label htmlFor="5000" >5000</label>
                        </div>
                        <div className="radio">                        
                            <input type="radio" id="7500" name="getCredits" value={7500} onClick={selectCredits} />
                            <label htmlFor="7500" >7500</label>
                        </div>
                    </div>
                    {errorState && <p className="fail">Revisa tus datos</p>}
                    {successState && <p className="success">Succesful transaction</p>}
                    <button className="buy">Buy</button>
                    
                </form>
            </div>
        </section>
    )
}

export default Credits;