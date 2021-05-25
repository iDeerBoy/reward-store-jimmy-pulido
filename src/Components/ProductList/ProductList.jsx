import React, { useContext } from 'react';
import { ContextProducts } from '../../Context/products';
import './productList.css'
import Arrow1 from '../../Images/Arrow1.svg';
import Arrow2 from '../../Images/Arrow2.svg';
import Card from '../Card/Card';

function ProductList({firstPage}) {
        
    const { updateProducts, stateProducts } = useContext(ContextProducts);
    const pageOne = updateProducts.slice(0, 16)
    const pageTwo = updateProducts.slice(16, 32)
    const inconPage = firstPage.state ? Arrow2 : Arrow1

    return (
        <section className="productList" id="productList">
            {stateProducts
            ? (
                firstPage.state
                ? pageOne.map((i) =>{                  
                    return <Card {...i} key={i._id} />                    
                })
                : pageTwo.map((i) =>{
                    return <Card {...i} key={i._id} />
                })
               )
            : <h2 className="loading">Loading...</h2> 
            }
            {updateProducts.length > 16 && <div onClick={firstPage.setSwitch} className="btnContainer"><a href="#productList"><div className="btnPage"><img src ={inconPage} alt="arrow"></img></div></a></div>}
        </section>
    )
}

export default ProductList; 