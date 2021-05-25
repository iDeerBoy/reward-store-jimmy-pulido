import React, { useContext }  from 'react';
import { ContextProducts } from '../../Context/products';
import useSwitchState from '../../Hooks/useSwitchState';
import './Home.css'
import imgAll from '../../Images/img-allCategories.png';
import BtnNavigation from '../../Components/Btn-navegation/BtnNavigation';
import ProductList from '../../Components/ProductList/ProductList';

function Home() {
    
    const { productsData, setUpdateProducts, category, setCategory } = useContext(ContextProducts);    
    const firstPage = useSwitchState(true)

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
                <img src={imgAll} alt="All categories" />
                <h1>{category}</h1>
                <nav className="navContainer">
                    <BtnNavigation titel="History" to="History" btnClass="btnBlue" />
                    <BtnNavigation titel="Credits" to="Credits" btnClass="" />
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
                    <div className="btnOFF">Lowest</div>
                    <div className="btnOFF">Highest</div>
                </div>
            </div>
            <ProductList firstPage={firstPage}/>
        </section>
    )
}

export default Home;


        // .filter((value) => {
        //     return e.target.value === "All Cost"
        //     ? value
        //     : (
        //         e.target.value === "Highest"
        //         ? value.sort(() => value.cost - value.cost)
        //         : value
        //     )
        // })