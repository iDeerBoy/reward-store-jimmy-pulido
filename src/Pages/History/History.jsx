import React, { useEffect, useState } from 'react';
import BtnNavegation from '../../Components/Btn-navegation/BtnNavigation';

function History(){

    const [history, setHistory] = useState([])
    useEffect( async () =>{
        const res = await fetch('https://coding-challenge-api.aerolab.co/user/history',{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            }
        })
        const data = await res.json()
        setHistory(data)
    },[])

    return (
        <section>
            <div>
                <h1>History</h1>
                <BtnNavegation  titel="Home"/>
                <BtnNavegation  titel="Credits"/>
            </div>
            <div>
                {
                history.length >= 0
                ? <p>Lo que compres aparecera acá</p>
                : history.map((i) => {
                    return (
                        <div>
                            <img src={i.img.url} />
                            <h2>{i.name}</h2>
                            <h3>{i.category}</h3>
                            <p>{i.cost}</p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default History;