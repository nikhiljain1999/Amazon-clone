import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { SportsBasketball } from '@material-ui/icons'
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './Reducer'
function Subtotal() {
    const [{basket},{price},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText ={(value)=>(
                <>
                <p>
                    {/*Homework*/}
                SubTotal ({basket.length} items):
                <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order Contains a Gift
                </small>
                </>

            )}
            decimalScale={2}
            value={getBasketTotal(basket)} 
            // {/*Homework*/}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs"}
            />
            <button >Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
