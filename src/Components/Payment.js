import React,{ useState, useEffect } from 'react'
import '../css/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from './axios'
import { Link, useHistory } from "react-router-dom"
import { db } from "./firebase";
import TextField from '@material-ui/core/TextField';




function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [{basket, total, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [validator, setValidator] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const [address, setAddress] = useState(null);
    const history = useHistory();   


    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const handleTextChange = event =>{
        setAddress(event.target.value)
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
        if(address !=null){ 
            event.preventDefault(); 
        setProcessing(true); 
         const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
                }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
             db
              .collection('users')
              .doc(user.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
                  id: paymentIntent.id,
                  address: address
              })
            dispatch({
                type: 'EMPTY_BASKET'
            })
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })            
        }else{
            event.preventDefault();
            setValidator(true);
        }
        
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
                        <TextField
                            
                            id="filled-full-width"
                            onChange={handleTextChange}
                            label="Full Address"
                            style={{ margin: 8 }}
                            placeholder="Enter your address."
                            helperText={validator ? "Field required.": null}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
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
                                hidebutton = "false"                                
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
                            <CardElement onChange={handleChange} className="cardelement"/> 
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
