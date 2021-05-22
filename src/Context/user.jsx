import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ContextUser = createContext({})

export const ContextUserProvider = (props) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch('https://coding-challenge-api.aerolab.co/user/me',{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            }
        })
        .then((response) => response.json())
        .then((data) => setUserData(data))
    }, [])

    return <ContextUser.Provider value={userData}>{props.children}</ContextUser.Provider>
}