import React from 'react'
import "./Home.css"
import AmazonPrime from "./assets/amazonp.jpg.webp"
import Product from "./Product"
import aibook from "./assets/aibook.jpg"
import iphone from "./assets/iphone.jpg"
import bottle from "./assets/bottle.webp"
import samsung from "./assets/samsung.jpg"
import macbook from "./assets/macbook.jpg"
import smartwatch from "./assets/smartwatch.jpg"
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src={AmazonPrime} alt=""/>
                <div className="home_row">
                   <Product title="The Artificial Intelligence Book" price={500} image={aibook} rating="⭐⭐⭐" id={1}/>
                   <Product title="iphone 12 pro 256GB Black " price={85000} image={iphone} rating="⭐⭐⭐⭐"id={2}/>
                    {/* product
                    product */}
                    
                </div>
                <div className="home_row">
                <Product title="Milton Tough white transparent Bottle" price={257} image={bottle} rating="⭐⭐⭐⭐"id={3}/>
                <Product title="Mac Book Air 256Gb Space Grey 2017 Model" price={77000} image={macbook} rating="⭐⭐⭐⭐⭐" id={4}/>
                <Product title="Left Wrist Smart Watch for Men" price={7000} image={smartwatch} rating="⭐⭐" id={5}/>
                </div>
                <div className="home_row">
                <Product title="Smasung 52inch smart Led " price={83000} image={samsung} rating="⭐⭐⭐⭐" id={6}/>
                </div>
            </div>
        </div>
    )
}

export default Home
