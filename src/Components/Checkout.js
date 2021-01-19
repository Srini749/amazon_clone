import React from 'react'
import '../css/Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'
import {Link} from "react-router-dom";

function Checkout() {
    const [state, dispatch] = useStateValue();
    return (

        <div className="checkout">
            <div className="checkout_section">
                <h2 className="checkout_title">
                Your Shopping Basket
                </h2>
                <FlipMove enterAnimation="fade" leaveAnimation="fade" >
                {state.basket.length ==0 ? 
                    <div className="noItems">
                        <p>It seems like your basket is empty. . .</p>
                        <Link to="/">
                            <button>Fill it up!</button>
                        </Link>
                    </div>
                
                 : state.basket.map((item) => {
                   return <div>
                        <CheckoutProduct title={item.title} url={item.url} price={item.price} hidebutton="false"/>
                    </div>
                })}
                </FlipMove>
            </div>
            <div className="subtotalsection">
                <Subtotal />
            </div>
        </div>
        
    )
}

export default Checkout
