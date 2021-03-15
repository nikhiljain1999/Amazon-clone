import React from 'react'
import './Header.css';
import img from './assets/amazon1.jpg';
import SearchIcone from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from "react-router-dom"
import {useStateValue} from "./StateProvider"
import { SportsBasketball } from '@material-ui/icons';
function Header() {
    const[{basket},dispatch]=useStateValue();
    return (
        
        <div className="header">
            <Link to="/">
            <img className="header_logo"
                src={img} />
            </Link>
            <div className="header_search">
                <input className="header_searchInput"
                    type="text" />
                <SearchIcone className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/login">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                </Link>
                <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Return &</span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
                
            </div>
            
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to ="/checkout">
            <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_basketCount">   
                    {basket?.length}</span>
                    
            </div>
            </Link>
        </div>

        </div >
    )
}

export default Header
