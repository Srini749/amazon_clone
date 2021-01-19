import {React, useState} from 'react'
import '../css/CheckoutProduct.css'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'


function CheckoutProduct(props) {
    const [state, dispatch] = useStateValue();
    const [qty, setQty] = useState(1);

    const handleSelect=(e)=>{
    setQty(e);
  }

    function removeitem(){
        dispatch({
            type: "Remove_from_basket",
            item:{
                title: props.title,
                url: props.url,
                price: props.price
            }
        })
    }

    return (
        <div className="checkoutproduct">
            <div className="checkoutproductimgbox">
                <img className="checkoutproductimg" src={props.url}/> 
            </div>
            <div className="checkoutproductinfo">
                <p className="checkoutproducttitle">{props.title}</p>
                <p className="checkoutproductprice">
                    <strong>$ {props.price}</strong>
                </p>
                <p>⭐⭐⭐⭐⭐</p>
                {props.hidebutton == "true" ? <div></div> : <button onClick={removeitem} className="removebtn" variant="warning"><strong>Remove from basket</strong></button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
