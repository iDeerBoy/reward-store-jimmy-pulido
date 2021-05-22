import React, { useContext } from 'react';
import { ContextProducts } from '../../Context/products';
import Arrow1 from '../../Images/Arrow1.svg';
import Arrow2 from '../../Images/Arrow2.svg';
import Card from '../Card/Card';

function ProductList({firstPage}) {
        
    const { productsData, updateProducts, stateProducts, setUpdateProducts } = useContext(ContextProducts)
    !stateProducts && setUpdateProducts(productsData)

    const pageOne = updateProducts.slice(0, 16)
    const pageTwo = updateProducts.slice(16, 32)
    const inconPage = firstPage.state ? Arrow2 : Arrow1

    return (
        <section>
            {stateProducts
            ? (
                firstPage.state
                ? pageOne.map((i) =>{                  
                    return <Card {...i} />                    
                })
                : pageTwo.map((i) =>{
                    return <Card {...i} />
                })
               )
            : <p>cargando</p> 
            }
            {updateProducts.length > 16 && <div onClick={firstPage.setSwitch}> <img src ={inconPage} alt="arrow"></img> </div>}
        </section>
    )
}

export default ProductList; 