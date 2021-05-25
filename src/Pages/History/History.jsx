import React, { useEffect, useState } from 'react';
import './history.css'
import BtnNavegation from '../../Components/Btn-navegation/BtnNavigation';

function History(){

    const [history, setHistory] = useState([])
    useEffect(() =>{
        async function fetchData(){
            const res = await fetch('https://coding-challenge-api.aerolab.co/user/history',{
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            }
            })
            const data = await res.json()
            setHistory(data)
        }
        fetchData()
    },[])

    return (
        <section className="history">
            <div className="navigationHistory">
                <h1>History</h1>
                <nav className="navContainerHistory">                    
                    <BtnNavegation  titel="Home" to="" btnClass="btnBlue" />
                    <BtnNavegation  titel="Credits" to="Credits" btnClass="" />
                </nav>

            </div>
            <div>
                {
                history.length <= 0
                ? <p>Lo que compres aparecera acá</p>
                : history.map((i, index) => {
                    return (
                        <div key={index}>
                            <img src={i.img.url} alt={i.name} />
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