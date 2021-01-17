import React from 'react'
import '../css/Payment.css'
import {useStateValue} from '../StateProvider'


function Payment() {
    const [state, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        {state.basket.length} items)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{state.user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {/* {state.basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))} */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment
