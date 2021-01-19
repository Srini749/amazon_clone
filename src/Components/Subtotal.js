import React , {useState, useEffect}from 'react'
import '../css/Subtotal.css'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'
import { useHistory } from "react-router-dom";


function Subtotal() {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(state.basket.length == 0){
            setDisabled(true);
        }
    }
    ,[])

    return (
        <div className="subtotalbox">
            <p>Subtotal ({state.basket.length} items): <strong>$ {state.total.toFixed(2)}</strong></p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            
            <button onClick={e => history.push('/payment')} disabled={disabled} className="proceedtocart"><strong>{disabled? "Empty Cart" : "Proceed to buy"}</strong></button>
        </div>
    )
}

export default Subtotal
