import React,{useState} from 'react'
import '../css/Details.css'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'
import ItemCarousel from './ItemCarousel'
import carouselItems from '../Data/data'



function Details(props) {
    const [currentImage, setImage] = useState(props.location.state.url);
    const [currentQty, setQty] = useState("1");
    const [state, dispatch] = useStateValue()
    var added;
    if(state.basket.filter(item => item.title == props.location.state.title) !=0){
        added = "Added"
    }else{
        added="Add your Cart"
    }

    function handleHover (event) {
        setImage(event.target.src);
    }

    function handleSelect(event){
        console.log(event)
        setQty(event);
    }

    function addtoBasket(){
         if(state.basket.filter(item => item.title == props.location.state.title) ==0){
                dispatch({
            type: "Add_to_basket",
            item:{
                title: props.location.state.title,
                url: props.location.state.url,
                price: props.location.state.price,
                details: props.location.state.details,
                images: props.location.state.images,        
            }
        })  
        }
              
    }

    return (
        <div>
            <div className="detailsContainer">
                <div className="imageContainer">
            <div className="imageSection">
                    {props.location.state.images!=null ? props.location.state.images.map((item) => {
                        return <img src={item} onMouseEnter={handleHover} className="imageSmall" />
                    }) : <div></div>}
                </div>
                <div className="image">
                    <img src={currentImage} className="imageBig" />
                </div>
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
                <div className="addtoCart">
                    <div className="dropdown">
                        <span>Qty :</span>
                        <DropdownButton
                            alignRight
                            title={currentQty}
                            className="dropdownmenu"
                            onSelect={handleSelect}
                                >
                                    <Dropdown.Item className="dropdownItem" eventKey="1">1</Dropdown.Item>
                                    <Dropdown.Item className="dropdownItem" eventKey="2">2</Dropdown.Item>
                                    <Dropdown.Item className="dropdownItem"eventKey="3">3</Dropdown.Item>
                                    <Dropdown.Item className="dropdownItem" eventKey="4+">4+</Dropdown.Item>
                            </DropdownButton>
                    </div>
                    <button onClick ={addtoBasket}className="cartBtn" variant="warning"><strong>{added}</strong></button>
                    <button className="cartBtn" variant="warning"><strong>Buy Now</strong></button>
                </div>
            </div>
            <ItemCarousel title="Based on your searches" items={carouselItems}/>
        </div>
    )
}

export default Details
