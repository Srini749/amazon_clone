import React from 'react'
import './Product.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Product(props) {
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
             <Button className="addbutton" variant="warning">Add to cart</Button>
        </Card>
    )
}

export default Product
