import React from 'react'
import '../css/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Payment() {
    const [state, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        {state.basket.length} items)
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h5><strong>Delivery Address</strong></h5>
                    </div>
                    <div className='payment_address'>
                        <p>{state.user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h5><strong>Review items and delivery</strong></h5>
                    </div>
                    <div className='payment_items'>
                        {state.basket.map(item => (
                            <CheckoutProduct
                                title={item.title}
                                url={item.url}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment_section'>
                    <div className="payment_title">
                        <h5><strong>Payment Method</strong></h5>
                    </div>
                    <div className="payment_details">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
