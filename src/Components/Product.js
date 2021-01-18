import React, {useState} from 'react'
import '../css/Product.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'
import {Link} from 'react-router-dom';



function Product(props) {
    const [state, dispatch] = useStateValue()
    var added;
    if(state.basket.filter(item => item.title == props.title) !=0){
        added = "Added"
    }else{
        added="Add your Cart"
    }

    function addtoBasket(){
         if(state.basket.filter(item => item.title == props.title) ==0){
                dispatch({
            type: "Add_to_basket",
            item:{
                title: props.title,
                url: props.url,
                price: props.price
            }
        })  
        }
              
    }

   
    return (
        
        <Card className="product">
            <Link to= {{
                    pathname: '/details/:' + props.title.substring(0,15),
                    state: {
                        title: props.title,
                        url: props.url,
                        price: props.price,
                        details: props.details,
                        images: props.images
                    }
                }}>
            <Card.Body className="product_info">
                <Card.Title><p>{props.title}</p></Card.Title>
                <Card.Text className="product_price">
                    <strong>$</strong>
                    <strong>{props.price}</strong>
                </Card.Text>
                <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            </Card.Body>
            </Link>
            <Card.Img className="product_image" src={props.url}/>
            <button onClick={addtoBasket}className="addbutton" ><strong>{added}</strong></button>
        </Card>
    )
}

export default Product
