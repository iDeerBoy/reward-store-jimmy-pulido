import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ContextProducts = createContext([])

export const ContextProductsProvider = (props) => {
    const [productsData, setProductsData] = useState([]);    
    const [updateProducts, setUpdateProducts] = useState([]);
    const [stateProducts, setStateProducts] = useState(false);

    useEffect( async () => {
        const res = await fetch('https://coding-challenge-api.aerolab.co/products',{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE1MWQ2ZDliNzc4MTAwMjA5YzVhOWQiLCJpYXQiOjE2MjE0MzM3MDl9.67iidrUOcvOV_SujZymh8K69mbFEBY6c6OY-GtPuse4'
            }
        })
        const data = await res.json()
        setProductsData(data)
        setStateProducts(true)
    }, [])
    return <ContextProducts.Provider value={ { productsData, setProductsData, updateProducts, setUpdateProducts, stateProducts } }>{props.children}</ContextProducts.Provider>
}