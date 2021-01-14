import React from 'react'
import '../css/Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [state, disatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_section">
                <h2 className="checkout_title">
                Your Shopping Basket
                </h2>
                {state.basket.map((item) => {
                   return <div>
                        <CheckoutProduct title={item.title} url={item.url} price={item.price}/>
                    </div>
                })}
            </div>
            <div className="subtotalsection">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
