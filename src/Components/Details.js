import React,{useState} from 'react'
import '../css/Details.css'


function Details(props) {
    const [currentImage, setImage] = useState(props.location.state.url);
    
    function handleHover (event) {
        setImage(event.target.src);
    }

    return (
        <div className="detailsContainer">
           <div className="imageSection">
                {props.location.state.images!=null ? props.location.state.images.map((item) => {
                    return <img src={item} onMouseEnter={handleHover} className="imageSmall" />
                }) : <div></div>}
            </div>
            <div className="image">
                <img src={currentImage} className="imageBig" />
            </div>
            <div className="info">
                <div className="productTitle">
                   <h5>{props.location.state.title}</h5>
                   <hr/>
                   <h6>⭐⭐⭐⭐⭐</h6>
                   <h6>Price: ${props.location.state.price}</h6>
                   <p>FREE delivery: <strong>Tomorrow</strong></p>
                   <p>Order within 12 hrs and 59 mins</p>
                   <p><strong>EMI</strong> starts at ₹324. No Cost EMI available </p>
                    <div className="iconRow">
                        <div className="iconItem">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" />
                            <span>Pay</span>
                            <span>on Delivery</span>
                        </div>
                        <div className="iconItem">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />
                            <span>& Day</span>
                            <span>Replacement</span>
                        </div>
                        <div className="iconItem">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" />
                            <span>Amazon</span>
                            <span>Delivered</span>
                        </div>
                        <div className="iconItem">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />
                            <span>1 year</span>
                            <span>Warranty</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="productInfo">
                <p>In stock.</p>
                {props.location.state.details !=null ? <ul>
                    {props.location.state.details.map((item) => {
                     return<li>{item}</li>
                    })}
                </ul> : <ul></ul>}
                </div>
                
            </div>

        </div>
    )
}

export default Details
