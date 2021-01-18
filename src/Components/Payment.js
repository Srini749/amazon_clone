import React,{ useState, useEffect } from 'react'
import '../css/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [state, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${state.total * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [state.basket])

    const handleSubmit = async (event) => {
        setProcessing(true);    
    }

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
                        <form onSubmit={handleSubmit}>                           
                            <CardElement onChange={handleChange}>
                            </CardElement>
                            <strong>Order: ${state.total.toFixed(2)}</strong>
                            <button disabled={processing || disabled}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
