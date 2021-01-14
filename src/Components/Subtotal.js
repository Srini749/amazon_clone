import React from 'react'
import '../css/Subtotal.css'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'


function Subtotal() {
    const [state, dispatch] = useStateValue();
    return (
        <div className="subtotalbox">
            <p>Subtotal ({state.basket.length} items): <strong>$ {state.total}</strong></p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <Button className="proceedtocart" variant="warning"><strong>Proceed to buy</strong></Button>
        </div>
    )
}

export default Subtotal
