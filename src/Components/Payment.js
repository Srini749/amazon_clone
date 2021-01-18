import React,{ useState, useEffect } from 'react'
import '../css/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from './axios'
import { Link, useHistory } from "react-router-dom"


function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [{basket, total, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();   


    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${total*100}`
            });
            setClientSecret(response.data.clientSecret)
            console.log(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setProcessing(true); 
         const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        {basket.length} items)
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h5><strong>Delivery Address</strong></h5>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h5><strong>Review items and delivery</strong></h5>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
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
                            <strong>Order: ${total.toFixed(2)}</strong>
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
