import './Home.css';
import React, { useContext }  from 'react';
import { ContextProducts } from '../../Context/products';
import useSwitchState from '../../Hooks/useSwitchState';
import imgAll from '../../Images/img-allCategories.png';
import BtnNavigation from '../../Components/Btn-navegation/BtnNavigation';
import ProductList from '../../Components/ProductList/ProductList';

function Home() {
    
    const { productsData, setUpdateProducts, category, setCategory } = useContext(ContextProducts);    
    const firstPage = useSwitchState(true);
    const Lowest = useSwitchState(false);
    const Highest = useSwitchState(false);

    function LowestSwitch(){
        Lowest.setSwitch(); 
        Highest.setFalse()
    }

    function HighestSwitch(){
        Highest.setSwitch(); 
        Lowest.setFalse()
    }

    function filter(e){  
        let updateList = productsData
        .filter((value) =>{
            return e.target.value === "All Categories"
            ? value
            :value.category === e.target.value            
        })         
        setUpdateProducts(updateList);
        setCategory(e.target.value)
        firstPage.setTrue()
    }
    
    return (
        <section className="Home">
            <div className="navigation">
                <img src={imgAll} alt="categories" />
                <h1>{category}</h1>
                <nav className="navContainer">
                    <BtnNavigation titel="History" to="reward-store-jimmy-pulido/History" btnClass="btnBlue" />
                    <BtnNavigation titel="Credits" to="reward-store-jimmy-pulido/Credits" />
                </nav>
            </div>
            <div className="filterSection">
                {firstPage.state ? <p>16 of 32 products</p> : <p>32 of 32 products</p>}
                <div className="filters">
                    <select name="categories" onChange={filter}>
                        <option value="All Categories">All Categories</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Audio">Audio</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Phones">Phones</option>
                    </select> 
                    <div className={`btnOFF ${Lowest.state ? "btnActive" : ""}`} onClick={LowestSwitch}>Lowest</div>
                    <div className={`btnOFF ${Highest.state ? "btnActive" : ""}`} onClick={HighestSwitch}>Highest</div>
                </div>
            </div>
            <ProductList 
                firstPage={firstPage}
                Lowest={Lowest.state}
                Highest={Highest.state}
            />
        </section>
    )
}

export default Home;