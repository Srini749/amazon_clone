import React, {useState} from 'react'
import '../css/Product.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useStateValue} from '../StateProvider'

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
            <Card.Body className="product_info">
                <Card.Title><p>{props.title}</p></Card.Title>
                <Card.Text className="product_price">
                    <strong>$</strong>
                    <strong>{props.price}</strong>
                </Card.Text>
                <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            </Card.Body>
            <Card.Img className="product_image" src={props.url}/>
            <Button onClick={addtoBasket}className="addbutton" variant="warning"><strong>{added}</strong></Button>
        </Card>
    )
}

export default Product
