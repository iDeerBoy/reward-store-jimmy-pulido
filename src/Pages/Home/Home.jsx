import React, { useContext }  from 'react';
import { ContextProducts } from '../../Context/products';
import useSwitchState from '../../Hooks/useSwitchState';
import imgAll from '../../Images/img-allCategories.png';
import BtnNavigation from '../../Components/Btn-navegation/BtnNavigation';
import ProductList from '../../Components/ProductList/ProductList';
import SelectInput from '../../Components/SelectInput/SelectInput';

function Home() {
    
    const { productsData, setUpdateProducts } = useContext(ContextProducts);
    const productType = [
        "All Categories",
        "Laptops",
        "Cameras",
        "Audio",
        "Gaming",
        "Phones"];
        
    const productCost = ["All Cost", "Lowest", "Highest"];
    
    const firstPage = useSwitchState(true)

    function filter(e){    

        let updateList = productsData
        .filter((value) =>{
            return e.target.value === "All Categories"
            ? value
            :value.category === e.target.value            
        })
        // .filter((value) => {
        //     return e.target.value === "All Cost"
        //     ? value
        //     : (
        //         e.target.value === "Highest"
        //         ? value.sort(() => value.cost - value.cost)
        //         : value
        //     )
        // })
        setUpdateProducts(updateList);
        firstPage.setTrue()
    }
    
    return (
        <section>
            <div>
                {/* <img src={imgAll} alt="All categories" /> */}
                <h1>categories</h1>
                <div>
                    <BtnNavigation titel="History"/>
                    <BtnNavigation titel="Credits"/>
                </div>
            </div>
            <div>
                <p>x of x products</p>
                <div>
                    <SelectInput 
                        filter={filter}
                        name="categories"
                        categories={productType}
                    />
                    {/* <SelectInput 
                        filter={filter}
                        name="cost"
                        categories={productCost}
                    />
                    <button>Lowest</button>
                    <button>Highest</button> */}
                </div>
            </div>
            <ProductList firstPage={firstPage}/>
        </section>
    )
}

export default Home;