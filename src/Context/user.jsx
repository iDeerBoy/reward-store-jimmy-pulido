import React, { useEffect, useState } from "react";
import { createContext } from "react";
import useSwitchState from '../Hooks/useSwitchState';

export const ContextUser = createContext({})

export const ContextUserProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userLoaded, setUserLoaded] = useState(false);    
    const pointsUsed = useSwitchState(true);


    useEffect(() => {
        async function fetchData(){
            const res = await fetch('https://coding-challenge-api.aerolab.co/user/me',{
               headers:{
                   'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
               }
               })
               const data = await res.json()
               setUserData(data)
            }            
        
        fetchData()        
        setUserLoaded(true)
    }, [pointsUsed.state])

    return <ContextUser.Provider value={{ userData, pointsUsed, userLoaded }}>{props.children}</ContextUser.Provider>
}