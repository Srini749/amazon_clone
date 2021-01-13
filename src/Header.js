import React, {useState} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function Header() {

    return (
        <div>
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
            <div className="navbar navbar-dark">
                <Navbar className="navbaritems" collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
                <Navbar.Brand className="navbartitles" href="/">All</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="navbartitles" href="#features">Fresh</Nav.Link>
                    <Nav.Link className="navbartitles" href="#pricing">Today's Deals</Nav.Link>
                    <NavDropdown className="navbardropdown" title="Prime" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="navbardropdownitems" href="#action/3.1">Rewards for Prime</NavDropdown.Item>
                        <NavDropdown.Item className="navbardropdownitems" href="#action/3.1">Additional offers on Swiggy, Domino's, Airtel, Uber & more</NavDropdown.Item>
                        <NavDropdown.Item className="navbardropdownimg" href="#action/3.1"><img src="https://m.media-amazon.com/images/G/31/digital/music/merch/India/2018/May/430x300._CB485973056_.jpg" /></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="navbartitles" href="#amazonpay">Amazon Pay</Nav.Link>
                    <Nav.Link className="navbartitles" href="#mobiles">Mobiles</Nav.Link>
                    <Nav.Link className="navbartitles" href="#bestsellers">Best Sellers</Nav.Link>
                    <Nav.Link className="navbartitles" href="#customerservice">Customer Service</Nav.Link>
                    <Nav.Link className="navbartitles" href="/">Buy Again</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                        <Nav.Link href="#deets"><img className="navbaritemimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"/></Nav.Link>
                </Nav>
                </Navbar>
            </div>
        </div>
    )
}

export default Header


