import React, { useState, useContext } from 'react';
import { ContextUser } from '../../Context/user';
import useString from '../../Hooks/useString';
import BtnNavegation from '../../Components/Btn-navegation/BtnNavigation';

function Credits(){

    const [getCredits, setGetCredits] = useState(0);
    const nick = useString("");
    const email = useString("");
    const card = useString("");
    const [errorState, setErrorState] = useState(false)   
    const userData = useContext(ContextUser)

    const selectCredits = (e) => {
        setGetCredits(e.target.value)
    }

    const handleOnsubmit = (e) => {
        e.preventDefault()
        if (nick.state ==! userData.name){
            setErrorState(true)
        }
    }
    console.log(errorState)
    

    return (
        <section>
            <div>
                    <h1>History</h1>
                    <BtnNavegation  titel="Home"/>
                    <BtnNavegation  titel="Credits"/>
            </div>
            <div>
                <form onSubmit={handleOnsubmit}>
                    {errorState ? <p>error</p> : <p>Your Nickname:</p> }
                    <input type="text" placeholder="Your Nickname" onChange={nick.setString} />
                    <p>Email:</p>
                    <input type="email"  placeholder="Your Email"  onChange={email.setString} />
                    <p>Credit card:</p>
                    <input type="text" placeholder="Minimum 16 mumbers"  onChange={card.setString} />
                    <div>                        
                        <input type="radio" id="1000" name="getCredits" value="1000" onClick={selectCredits} />
                        <label for="1000" >1000</label>
                    </div>
                    <div>                        
                        <input type="radio" id="5000" name="getCredits" value="5000" onClick={selectCredits} />
                        <label for="5000" >5000</label>
                    </div>
                    <div>                        
                        <input type="radio" id="7500" name="getCredits" value="7500" onClick={selectCredits} />
                        <label for="7500" >7500</label>
                    </div>
                    <button>buy</button>
                </form>
            </div>
        </section>
    )
}

export default Credits;