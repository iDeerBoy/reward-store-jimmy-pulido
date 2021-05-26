import './productList.css';
import React, { useContext } from 'react';
import { ContextProducts } from '../../Context/products';
import Arrow1 from '../../Images/Arrow1.svg';
import Arrow2 from '../../Images/Arrow2.svg';
import Card from '../Card/Card';

function ProductList({firstPage, Lowest, Highest}) {

    function filterCost(value){
        const list = [...value]
        if (Lowest){
            return list.sort((a, b) => a.cost - b.cost)
        } else if (Highest){            
            return list.sort((a, b) => b.cost - a.cost)
        } else if (!Lowest && !Highest){
            return value
        }        
    }
        
    const { updateProducts, stateProducts } = useContext(ContextProducts);
    const pageOne = filterCost(updateProducts).slice(0, 16)
    const pageTwo = filterCost(updateProducts).slice(16, 32)
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