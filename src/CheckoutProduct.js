import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
// import Home from "./Home"
// import SubTotal from "./Subtotal"
function CheckoutProduct(props) {
   const[{basket},dispatch]=useStateValue()
    const { item } = props;
    console.log(item);
    const removeFromCart = (id) => {
        //remove the item from basket
        console.log("id", id);
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:id,
        })
    }
    return (
        <div className="checkProduct">
            <img className="checkoutProduct_image" src={item.image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{item.title}</p>
                <p className="checkoutProduct_price">
                    <small>Rs</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {item.rating}
                    {/* {Array(rating)
                    .filter().map((_,i)=>(
                        <p>⭐</p>
                    ))} */}
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </div>

        </div>
    )
}

export default CheckoutProduct
