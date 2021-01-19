import React from 'react'
import '../css/Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'


function Checkout() {
    const [state, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_section">
                <h2 className="checkout_title">
                Your Shopping Basket
                </h2>
                <FlipMove enterAnimation="fade" leaveAnimation="fade" >
                {state.basket.map((item) => {
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
