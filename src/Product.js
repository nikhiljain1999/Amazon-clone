import React from 'react'
import './Product.css'
// import iphone from "./assets/iphone.jpg"
// import { Button } from '@material-ui/core'
import {useStateValue} from "./StateProvider"
function Product({id,title,image,price,rating}) {
    const [state,dispatch]=useStateValue();
    const addToBasket=()=>{
        //dispatch the item into data layer
        dispatch( {
            type:"ADD_TO_CART",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
            })

    }
    return (
        <div className="product">
            <div className="product_Info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                    </p>
                    {id}
                <div className="product_rating">
                    <p>{rating}</p>
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
