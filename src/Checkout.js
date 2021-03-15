import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="temp">
                <div className="checkout_left">
                    <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt=""/>
                </div>
                
                <div className="checkout_right">
                    <Subtotal />                
                </div>
            </div>
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                   {basket.map(items=>( <CheckoutProduct item={items}
                  />))}
                    {/*Basket*/ }
                {/*Basket*/ }
                {/*Basket*/ }
                {/*Basket*/ }
                </h2>
            </div>
        </div>
    )
}

export default Checkout
