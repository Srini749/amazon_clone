import React from 'react'
import '../css/Subtotal.css'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'
import { useHistory } from "react-router-dom";


function Subtotal() {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    return (
        <div className="subtotalbox">
            <p>Subtotal ({state.basket.length} items): <strong>$ {state.total}</strong></p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            
            <Button onClick={e => history.push('/payment')} className="proceedtocart" variant="warning"><strong>Proceed to buy</strong></Button>
        </div>
    )
}

export default Subtotal
