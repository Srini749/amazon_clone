import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header_search">
                 <input className="header_search_input" type="text"  />
                 <div className="icon">
                    <SearchIcon className="header_search_icon"/>
                 </div>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option_1">Hello Guest</span>
                    <span className="header_option_2">Sign In</span>              
                </div>
                <div className="header_option">
                    <span className="header_option_1">Returns</span>
                    <span className="header_option_2">& Orders</span> 
                </div>
                <div className="header_option">
                    <span className="header_option_1">Your</span>
                    <span className="header_option_2"> Prime</span> 
                </div>
                <div className="header_option_basket">
                    <ShoppingBasketIcon />
                    <span className="header_option_2 basket_count">0</span>
                </div>    
            </div>
                  

        </div>
    )
}

export default Header
