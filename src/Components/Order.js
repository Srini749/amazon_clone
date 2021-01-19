import React from 'react'
import '../css/Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

function Order(props) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{props.order.id}</small>
            </p>
            {props.order.data.basket?.map(item => (
                <CheckoutProduct    
                    title={item.title}
                    url={item.url}
                    price={item.price}
                />
            ))}
            
            <h3 className="order__total">Order Total: {props.order.data.amount}</h3>
        </div>
    )
}

export default Order